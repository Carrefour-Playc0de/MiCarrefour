import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'
import { runInThisContext } from 'node:vm'

export class InicioLoginCarrefourComAr extends BasePage {
    readonly ACCEPT_COOKIES_BUTTON: Locator
    readonly USERNAME_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly LOGIN_FINISH_BUTTON: Locator
    readonly LOGIN_MAIL_PASSWORD_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCEPT_COOKIES_BUTTON = this.page.locator('//button [@id="onetrust-accept-btn-handler"]')
        this.LOGIN_MAIL_PASSWORD_BUTTON = this.page.locator('//div [@class="vtex-login-2-x-button vtex-login-2-x-emailPasswordOptionBtn"]')
        this.USERNAME_INPUT = this.page.getByPlaceholder('Ej.: ejemplo@mail.com')
        this.PASSWORD_INPUT = this.page.getByPlaceholder('Ingrese su contraseña ')
        this.LOGIN_FINISH_BUTTON = this.page.locator('//span [contains(text(), \'Entrar\')]')
    }

    async acceptCookies(): Promise<void> {
        await this.click(this.ACCEPT_COOKIES_BUTTON)
        await this.page.waitForTimeout(3000)
    }
    async loginMailPassword(): Promise<void> {
        await this.click(this.LOGIN_MAIL_PASSWORD_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }
    async fillCredentials(): Promise<void> {
        await this.fill(this.USERNAME_INPUT, 'mauricio_roh@carrefour.com')
        await this.fill(this.PASSWORD_INPUT, 'Underc0de')
    }

    async endLoginProcess(): Promise<void> {
        await this.click(this.LOGIN_FINISH_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToInicioLoginCarrefourComAr(): Promise<void> {
        await this.acceptCookies()
        await this.loginMailPassword()
        await this.fillCredentials()
        await this.endLoginProcess()
    }
}

