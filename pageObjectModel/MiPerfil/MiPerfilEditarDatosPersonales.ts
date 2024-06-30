import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfilEditarDatosPersonales extends BasePage {
    readonly EDITAR: Locator
    readonly CELULAR: Locator
    readonly GUARDAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EDITAR = this.page.locator('//a [@id="editar_datos"]')
        this.CELULAR = this.page.locator('//input [@id="tel"]')
        this.GUARDAR = this.page.locator('//a [@id="save_actualizar"]')

    }

    async clickEditarDatosPersonales(): Promise<void> {
        await this.click(this.EDITAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillCelularDatosPersonales(): Promise<void> {
        await this.fill(this.CELULAR, '2613456789')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickGuardarDatosPersonales(): Promise<void> {
        await this.click(this.GUARDAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilDatosPersonales(): Promise<void> {
        await this.clickEditarDatosPersonales()
        await this.fillCelularDatosPersonales()
        await this.clickGuardarDatosPersonales()
    }
}
