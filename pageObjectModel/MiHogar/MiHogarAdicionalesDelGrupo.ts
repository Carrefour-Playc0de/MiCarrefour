import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiHogarAdicionalesDelGrupo extends BasePage {

    readonly AGREGAR_ADICIONAL: Locator
    readonly NOMBRE_ADICIONAL: Locator
    readonly NOMBRE_ADICIONAL_TAB: Locator
    readonly EMAIL: Locator
    // readonly EMAIL_TAB: Locator
    readonly CONFIRMAR_EMAIL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGREGAR_ADICIONAL = this.page.getByRole('link', { name: 'Agregar adicional' })
        this.NOMBRE_ADICIONAL = this.page.locator('//label[normalize-space()="Nombre del adicional*"]')
        this.NOMBRE_ADICIONAL_TAB = this.page.getByLabel('Nombre del adicional*')
        this.EMAIL = this.page.locator('#email')
        this.CONFIRMAR_EMAIL = this.page.locator('#email2')
    }
    async clickAgregarAdicional(): Promise<void> {
        await this.click(this.AGREGAR_ADICIONAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillNombreAdicional(): Promise<void> {
        await this.fill(this.NOMBRE_ADICIONAL, 'Testing QA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillEmail(): Promise<void> {
        await this.NOMBRE_ADICIONAL_TAB.press('Tab')
        await this.fill(this.EMAIL, 'testingqammr@gmail.com')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillConfirmarEmail(): Promise<void> {
        await this.EMAIL.press('Tab')
        await this.fill(this.CONFIRMAR_EMAIL, 'testingqammr@gmail.com')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiHogarAdicionalesDelGrupo(): Promise<void> {
        await this.clickAgregarAdicional()
        await this.fillNombreAdicional()
        await this.fillEmail()
        await this.fillConfirmarEmail()
    }
}
