import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfil extends BasePage {
    readonly MI_PERFIL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MI_PERFIL = this.page.locator('//a[normalize-space()="Mi Perfil"]')
    }

    async clickMiPerfil(): Promise<void> {
        await this.click(this.MI_PERFIL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfil(): Promise<void> {
        await this.clickMiPerfil()
    }
}
