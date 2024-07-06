import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class InicioBotonSalir extends BasePage {

    readonly SALIR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SALIR = this.page.locator('//a[normalize-space()="salir"]')
    }

    async clickBotonSalir(): Promise<void> {
        await this.click(this.SALIR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToInicioBotonSalir(): Promise<void> {
        await this.clickBotonSalir()
    }
}
