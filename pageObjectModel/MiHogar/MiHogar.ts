import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiHogar extends BasePage {

    readonly MI_HOGAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MI_HOGAR = this.page.locator('//a[normalize-space()="Mi Hogar"]')
    }

    async clickMiHogar(): Promise<void> {
        await this.click(this.MI_HOGAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiHogarAdicionalesDelGrupo(): Promise<void> {
        await this.clickMiHogar()
    }
}
