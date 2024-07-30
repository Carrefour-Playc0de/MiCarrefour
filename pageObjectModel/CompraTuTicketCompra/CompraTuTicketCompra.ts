import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CompraTuTicketCompra extends BasePage {

    readonly COMPRAR_TU_TICKET_COMPRA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COMPRAR_TU_TICKET_COMPRA = this.page.locator('//a[normalize-space()="Compará tu ticket de compra"]')
    }

    async clickiCompraTuTicketCompra(): Promise<void> {
        await this.click(this.COMPRAR_TU_TICKET_COMPRA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCompraTuTicketCompra(): Promise<void> {
        await this.clickiCompraTuTicketCompra()
    }
}
