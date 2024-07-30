import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisConsumos extends BasePage {

    readonly MIS_CONSUMOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MIS_CONSUMOS = this.page.locator('//a[normalize-space()="Mis Consumos"]')
    }

    async clickiConsumos(): Promise<void> {
        await this.click(this.MIS_CONSUMOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMisConsumos(): Promise<void> {
        await this.clickiConsumos()
    }
}
