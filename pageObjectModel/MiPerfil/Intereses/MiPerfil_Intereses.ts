import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MiPerfil_Intereses extends BasePage {

    readonly BOTON_GUARDAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_GUARDAR = this.page.locator('#new_intereses')
    }

    async clickIntereses (): Promise<void> {

        const interesesArray = ['BEBÉ', 'GOURMET', 'PRODUCTOS SIN TACC', 'MASCOTAS', 'BODEGA Y CERVEZA', 'Seleccionar todas', 'TECNOLOGÍA']
        for (const interes of interesesArray){
            await this.page.getByText(`${interes}`).click()
            // await this.page.waitForTimeout(500)
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }
    async clickBotonGuardar(): Promise<void> {
        await this.click(this.BOTON_GUARDAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfil_Intereses(): Promise<void> {
        await this.clickIntereses()
        await this.clickBotonGuardar()
    }
}
