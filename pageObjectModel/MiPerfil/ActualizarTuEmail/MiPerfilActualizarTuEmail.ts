import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MiPerfilActualizarTuEmail extends BasePage {
    readonly EMAIL: Locator
    readonly CONTRASENIA: Locator
    readonly BOTON_GUARDAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EMAIL = this.page.locator('//label[@for="nuevo_email"]')
        this.CONTRASENIA = this.page.locator('//label[@for="password_para_nuevo_correo"]')
        this.BOTON_GUARDAR = this.page.locator('//a[@id="new_email"]')
    }

    async fillEmail(): Promise<void> {
        await this.fill(this.EMAIL, 'mauriroh@gmail.com')
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillContrasenias(): Promise<void> {
        await this.fill(this.CONTRASENIA, 'Underc0de')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    // async clickBotonGuardar(): Promise<void> {
    //     await this.click(this.BOTON_GUARDAR)
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.page.waitForTimeout(5000)
    // }

    async navigateToMiPerfilActualizarTuEmail(): Promise<void> {
        await this.fillEmail()
        await this.fillContrasenias()
        // await this.clickBotonGuardar()
    }
}








