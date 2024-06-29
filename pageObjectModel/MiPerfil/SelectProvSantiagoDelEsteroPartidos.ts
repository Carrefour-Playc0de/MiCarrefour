import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class SelectProvSantiagoDelEsteroPartidos extends BasePage {

    readonly SELECT_PROVINCIA: Locator
    readonly PROVINCIA: Locator
    readonly SELECT_PARTIDO: Locator
    readonly PARTIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROVINCIA = this.page.locator('.select-dropdown').first()
        this.PROVINCIA = this.page.locator('span').filter({ hasText: 'SANTIAGO DEL ESTERO' })
        this.SELECT_PARTIDO = this.page.locator('div:nth-child(3) > .select-wrapper > input')
        this.PARTIDO = this.page.locator("div:nth-child(3) > .select-wrapper > input")
    }

    async clickSelectProvincia(): Promise<void> {
        await this.click(this.SELECT_PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionProvincia(): Promise<void> {
        await this.click(this.PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickPartidos (): Promise<void> {

        const partidosArray = ['AGUIRRE', 'ALBERDI', 'ALMIRANTE BROWN', 'ATAMISQUI', 'AVELLANEDA', 'BANDA', 'BELGRANO', 'CHOYA', 'COPO', 'FIGUEROA', 'GENERAL TABOADA', 'GUASAYÁN', 'JIMÉNEZ', 'JUAN F. IBARRA', 'LORETO', 'MITRE', 'MORENO', 'OJO DE AGUA', 'PELLEGRINI', 'QUEBRACHOS', 'RIVADAVIA', 'ROBLES', 'RÍO HONDO', 'SALAVINA', 'SAN MARTÍN', 'SANTIAGO DEL ESTERO (CAPITAL)', 'SARMIENTO', 'SILIPICA']
        let flag = true
        for (const locality of partidosArray){
            const input = "div:nth-child(3) > .select-wrapper > input"
            await this.page.click(input)
            await this.page.waitForSelector(input)
            if (flag){
                await this.page.click(input)
                flag = false
            }
            await this.page.locator('span').filter({ hasText: `${locality}` }).click()
            console.log('Se dio Click - ' + locality)
            await this.page.waitForTimeout(500)
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }

    async navigateToMiPerfilEditMisDirecProvSantiagoDelEsteroPartidos(): Promise<void> {
        await this.clickSelectProvincia()
        await this.seleccionProvincia()
        await this.clickPartidos()
    }
}
