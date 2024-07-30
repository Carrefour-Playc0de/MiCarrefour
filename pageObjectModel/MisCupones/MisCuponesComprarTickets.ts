import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisCuponesComprarTickets extends BasePage {

    readonly BOTON_IR_COMPRAR: Locator
    readonly BOTON_IR_INICIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_IR_COMPRAR = this.page.locator('//a[normalize-space()="Ir a comparar"]')
        this.BOTON_IR_INICIO = this.page.locator('//a[normalize-space()="ir al inicio"]')
    }

    async clickiBotonIrComprar(): Promise<void> {
        await this.click(this.BOTON_IR_COMPRAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonIrInicio(): Promise<void> {
        await this.click(this.BOTON_IR_INICIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMisCuponesComprarTickets(): Promise<void> {
        await this.clickiBotonIrComprar()
        await this.clickBotonIrInicio()
    }
}
