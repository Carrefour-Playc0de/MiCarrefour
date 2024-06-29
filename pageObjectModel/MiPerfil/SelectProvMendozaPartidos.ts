import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class SelectProvMendozaPartidos extends BasePage {

    readonly SELECT_PROVINCIA: Locator
    readonly PROVINCIA: Locator
    readonly PROVINCIA_MENDOZA: Locator
    readonly SELECT_PARTIDO: Locator
    readonly PARTIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROVINCIA = this.page.locator('.select-dropdown').first()
        this.PROVINCIA = this.page.locator('span').filter({ hasText: 'BUENOS AIRES' })
        this.PROVINCIA_MENDOZA = this.page.locator('span').filter({ hasText: 'MENDOZA' })
        this.SELECT_PARTIDO = this.page.locator('div:nth-child(3) > .select-wrapper > input')
        this.PARTIDO = this.page.locator("div:nth-child(3) > .select-wrapper > input")
    }

    async clickSelectOtherProvincia(): Promise<void> {
        await this.click(this.SELECT_PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.click(this.PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionProvinciaMendoza(): Promise<void> {
        await this.click(this.SELECT_PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.click(this.PROVINCIA_MENDOZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async clickPartidos (): Promise<void> {

        const partidosArray = ['GENERAL ALVEAR', 'GODOY CRUZ', 'GUAYMALLÉN', 'JUNÍN', 'LA PAZ', 'LAS HERAS', 'LAVALLE', 'LUJÁN DE CUYO', 'MAIPÚ', 'MALARGÜE', 'MENDOZA (CAPITAL)', 'RIVADAVIA', 'SAN CARLOS', 'SAN MARTÍN', 'SAN RAFAEL', 'SANTA ROSA', 'TUNUYÁN', 'TUPUNGATO']
        let flag = true
        for (const locality of partidosArray){
            const input = "div:nth-child(3) > .select-wrapper > input"
            await this.page.click(input)
            await this.page.waitForSelector(input)
            if (flag){
                await this.page.click(input)
                flag = false
            }
            await this.page.locator(`(//span[normalize-space()='${locality}'])[1]`).click()
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }

    async navigateToMiPerfilEditMisDirecProvMendozaPartidos(): Promise<void> {
        await this.clickSelectOtherProvincia()
        await this.seleccionProvinciaMendoza()
        await this.clickPartidos()
    }
}
