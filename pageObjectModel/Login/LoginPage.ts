import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class LoginPage extends BasePage {
    readonly INGRESAR_LOGIN: Locator
    readonly EMAIL: Locator
    readonly PASSWORD: Locator
    readonly INGRESAR_CUENTA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INGRESAR_LOGIN = this.page.locator("(//a[normalize-space()='INGRESAR'])[1]")
        this.EMAIL = this.page.locator("(//input[@id='email'])[1]")
        this.PASSWORD = this.page.locator("(//label[@for='password'])[1]")
        this.INGRESAR_CUENTA = this.page.locator('//button[normalize-space()="INGRESAR"]')
    }

    async navigateToLoginPage(): Promise<void> {
        await this.goto(this.env.baseURL)
    }

    async clickIngresarLoging(): Promise<void> {
        await this.click(this.INGRESAR_LOGIN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async fillCredentials(): Promise<void> {
        await this.fill(this.EMAIL, this.env.username)
        await this.fill(this.PASSWORD, this.env.password)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async clickIngresarCuenta(): Promise<void> {
        await this.click(this.INGRESAR_CUENTA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToUrlAndLogin(): Promise<void> {
        await this.navigateToLoginPage()
        await this.clickIngresarLoging()
        await this.fillCredentials()
        await this.clickIngresarCuenta()
    }
}
