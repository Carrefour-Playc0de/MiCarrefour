import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisNotificaciones extends BasePage {

    readonly MIS_NOTIFICACIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MIS_NOTIFICACIONES = this.page.locator('//span[normalize-space()="Mis Notificaciones"]')
    }

    async clickMisNotificaciones(): Promise<void> {
        await this.click(this.MIS_NOTIFICACIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMisNotificaciones(): Promise<void> {
        await this.clickMisNotificaciones()
    }
}
