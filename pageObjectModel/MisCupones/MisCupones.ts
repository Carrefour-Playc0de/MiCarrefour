import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisCupones extends BasePage {

    readonly MIS_CUPONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MIS_CUPONES = this.page.locator('//a[normalize-space()="Mis Cupones"]')
    }

    async clickiMisCupones(): Promise<void> {
        await this.click(this.MIS_CUPONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMisCupones(): Promise<void> {
        await this.clickiMisCupones()
    }
}
