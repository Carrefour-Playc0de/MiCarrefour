import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'
import { runInThisContext } from 'node:vm'

export class InicioSlideDerechoIzquierdo extends BasePage {

    readonly SLIDE_DERECHO: Locator
    readonly SLIDE_IZQUIERDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SLIDE_DERECHO = this.page.locator('//button[normalize-space()="Next"]')
        this.SLIDE_IZQUIERDO = this.page.locator('//button[normalize-space()="Previous"]')
    }

    async clickSlideDerecho(): Promise<void> {
        for(let i=0; i<19; i++){
            await this.click(this.SLIDE_DERECHO)
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForFunction(() => document.readyState === 'complete')
            await this.page.waitForTimeout(250)
        }


    }
    async clickSlideIzquierdo(): Promise<void> {
        for(let i=0; i<=20; i++){
            await this.click(this.SLIDE_IZQUIERDO)
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForFunction(() => document.readyState === 'complete')
            await this.page.waitForTimeout(250)
        }
    }

    async navigateToInicioSlideDerechoIzquierdo(): Promise<void> {
        await this.clickSlideDerecho()
        await this.clickSlideIzquierdo()
    }
}
