import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class SelectProvLaPampaPartidos extends BasePage {

    readonly SELECT_PROVINCIA: Locator
    readonly PROVINCIA: Locator
    readonly SELECT_PARTIDO: Locator
    readonly PARTIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROVINCIA = this.page.locator('.select-dropdown').first()
        this.PROVINCIA = this.page.locator('span').filter({ hasText: 'LA PAMPA' })
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

        const partidosArray = ['ATREUCO', 'CALEU CALEU', 'CATRILÓ', 'CHALILEO', 'CHAPALEUFÚ', 'CHICAL CO', 'CONHELLO', 'CURA CÓ', 'GUATRACHÉ', 'HUCAL', 'LA PAMPA CAPITAL', 'LIHUEL CALEL', 'LIMAY MAHUIDA', 'LOVENTUE', 'MARACO', 'PUELÉN', 'QUEMÚ QUEMÚ', 'RANCUL', 'REALICÓ', 'TOAY', 'TRENEL', 'ULTRACAN']
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
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }

    async navigateToMiPerfilEditMisDirecProvLaPampaPartidos(): Promise<void> {
        await this.clickSelectProvincia()
        await this.seleccionProvincia()
        await this.clickPartidos()
    }
}
