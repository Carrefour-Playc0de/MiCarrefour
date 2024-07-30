import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisCuponesBotonVerLegales extends BasePage {

        readonly BOTON_VER_LEGALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_VER_LEGALES = this.page.locator('//a[normalize-space()="Ver legales"]')
    }

    async clickiBotonVerLegales(): Promise<void> {
        await this.click(this.BOTON_VER_LEGALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMisCuponesBotonVerLegales(): Promise<void> {
        await this.clickiBotonVerLegales()
    }
}
