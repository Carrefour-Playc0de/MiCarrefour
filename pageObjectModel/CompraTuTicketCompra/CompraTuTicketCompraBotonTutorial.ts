import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CompraTuTicketCompraBotonTutorial extends BasePage {

    readonly BOTON_TUTORIAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_TUTORIAL = this.page.locator('//a[normalize-space()="Tutorial"]')
    }

    async clickiBotonTutorial(): Promise<void> {
        await this.click(this.BOTON_TUTORIAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCompraTuTicketCompraBotonTutorial(): Promise<void> {
        await this.clickiBotonTutorial()
    }
}
