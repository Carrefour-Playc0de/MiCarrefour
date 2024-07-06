import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'
import { runInThisContext } from 'node:vm'

export class InicioLinkPanelCarrefour extends BasePage {

    readonly LINK: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LINK = this.page.locator('//a[normalize-space()="Panel Carrefour"]')
    }

    async clickLinkPanelCarrefour(): Promise<void> {
        await this.click(this.LINK)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')

    }

    async navigateToInicioLinkPanelCarrefour(): Promise<void> {
        await this.clickLinkPanelCarrefour()
    }
}
