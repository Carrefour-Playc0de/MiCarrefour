import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MiPerfilDatosSeguridad extends BasePage {

    readonly RESPUESTA: Locator
    readonly BOTON_GUARDAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RESPUESTA = this.page.locator('//input[@id="respuesta"]')
        this.BOTON_GUARDAR = this.page.locator('//a[@id="new_pregunta"]')
    }

    async clickPreguntaSeguridad (): Promise<void> {

        const seguridadArray = ['¿Cuál es el apellido de soltera de tu mamá?', '¿Cuál es tu comida favorita?', '¿Cuál es el apellido de tu esposa?', '¿Cuál es tu fecha de casamiento?', '¿Cuál es el nombre de tu mascota?']
        let flag = true
        for (const pregunta of seguridadArray){
            await this.page.getByRole('textbox').first().click()
            await this.page.waitForTimeout(2000)
            await this.page.locator('span').filter({ hasText: `${pregunta}` }).click()
            await this.page.waitForTimeout(1000)
            await this.page.waitForLoadState('domcontentloaded')
            await this.page.waitForFunction(() => document.readyState === 'complete')
        }
    }
    async fillRespuesta(): Promise<void> {
        await this.fill(this.RESPUESTA, 'QA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonGuardar(): Promise<void> {
        await this.click(this.BOTON_GUARDAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilDatosSeguridad(): Promise<void> {
        await this.clickPreguntaSeguridad()
        await this.fillRespuesta()
        await this.clickBotonGuardar()
    }
}








