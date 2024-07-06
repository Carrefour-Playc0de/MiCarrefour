import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MiPerfilActualizarContrasenia extends BasePage {
    readonly BOTON_EDITAR: Locator
    readonly CONTRASENIA_ACTUAL: Locator
    readonly CONTRASENIA_NUEVA: Locator
    readonly CONTRASENIA_REPETIR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_EDITAR = this.page.locator('(//a[@class="editar"][normalize-space()="EDITAR"])[3]')
        this.CONTRASENIA_ACTUAL = this.page.locator('//input[@id="old_password"]')
        this.CONTRASENIA_NUEVA = this.page.locator('//input[@id="password1"]')
        this.CONTRASENIA_REPETIR = this.page.locator('//label[normalize-space()="Repetir Contraseña"]')
    }

    async clickBotonEditar(): Promise<void> {
        await this.click(this.BOTON_EDITAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillCredentials(): Promise<void> {
        await this.fill(this.CONTRASENIA_ACTUAL, 'Old Password')
        await this.fill(this.CONTRASENIA_NUEVA, 'New Password')
        await this.fill(this.CONTRASENIA_REPETIR, 'Repeat Password')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMiPerfilActualizarContrasenia(): Promise<void> {
        await this.clickBotonEditar()
        await this.fillCredentials()
    }
}
