import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisDireccionesSelectTipoDomicilio extends BasePage {

    readonly TIPO_DOMICILIO: Locator
    readonly SELECT_TIPO_DOMICILIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TIPO_DOMICILIO = this.page.locator('div:nth-child(9) > .select-wrapper > input')
        this.SELECT_TIPO_DOMICILIO = this.page.getByText('Tipo de domicilioDomicilio PrincipalTrabajoOtros')
    }

    async clickTipoDomicilio(): Promise<void> {
        await this.click(this.TIPO_DOMICILIO)
        await this.page.waitForTimeout(1000)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectTipoDomicilio(): Promise<void> {
        await this.click(this.SELECT_TIPO_DOMICILIO)
        await this.page.waitForTimeout(1000)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionarTipoDomicilio (): Promise<void> {

        const addressArray = ['Otros', 'Trabajo', 'Domicilio Principal']
        for (const typeOfAddress of addressArray){
            const input = "div:nth-child(9) > .select-wrapper > input"
            await this.page.click(input)
            await this.page.waitForSelector(input)
            await this.page.locator('span').filter({ hasText: `${typeOfAddress}` }).click()
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }

    async navigateToMisDireccionesSelectTipoDomicilio(): Promise<void> {
        await this.clickTipoDomicilio()
        await this.clickSelectTipoDomicilio()
        await this.seleccionarTipoDomicilio()
    }
}
