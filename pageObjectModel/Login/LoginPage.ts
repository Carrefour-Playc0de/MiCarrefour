import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class LoginPage extends BasePage {
    readonly INGRESAR_LOGIN_BUTTON: Locator
    readonly EMAIL_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly INGRESAR_CUENTA_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INGRESAR_LOGIN_BUTTON = this.page.locator("(//a[normalize-space()='INGRESAR'])[1]")
        this.EMAIL_INPUT = this.page.locator("(//input[@id='email'])[1]")
        this.PASSWORD_INPUT = this.page.locator("(//label[@for='password'])[1]")
        this.INGRESAR_CUENTA_BUTTON = this.page.getByRole('link', { name: ' Iniciar sesión' })
    }

    async navigateToLoginPage(): Promise<void> {
        await this.goto(this.env.baseURL)
    }

    async clickIngresarLoging(): Promise<void> {
        await this.click(this.INGRESAR_LOGIN_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async fillCredentials(): Promise<void> {
        await this.fill(this.EMAIL_INPUT, this.env.username)
        await this.fill(this.PASSWORD_INPUT, this.env.password)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async clickIngresarCuenta(): Promise<void> {
        await this.click(this.INGRESAR_CUENTA_BUTTON)
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
