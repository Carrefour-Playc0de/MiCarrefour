import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MiPerfilContraseniaCaracteresInvalidos extends BasePage {
    readonly BOTON_EDITAR: Locator
    readonly CONTRASENIA_ACTUAL: Locator
    readonly CONTRASENIA_NUEVA: Locator
    readonly CONTRASENIA_REPETIR: Locator
    readonly PASSW1_MENSAJE_CANT_CARACTERES: Locator
    readonly PASSW1_CORRECTO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_EDITAR = this.page.locator('(//a[@class="editar"][normalize-space()="EDITAR"])[3]')
        this.CONTRASENIA_ACTUAL = this.page.locator('//input[@id="old_password"]')
        this.CONTRASENIA_NUEVA = this.page.locator('//input[@id="password1"]')
        this.CONTRASENIA_REPETIR = this.page.locator('//label[normalize-space()="Repetir Contraseña"]')
        this.PASSW1_MENSAJE_CANT_CARACTERES = this.page.locator('//label[@for="password1" and contains(@class, "invalid active") and contains(@style, "display: block;")]')
        this.PASSW1_CORRECTO = this.page.locator('//label[@for="password1" and contains(@class, "invalid active") and contains(@style, "display: none;")]')
    }

    async clickBotonEditar(): Promise<void> {
        await this.click(this.BOTON_EDITAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillContrasenias(): Promise<void> {
        await this.fill(this.CONTRASENIA_ACTUAL, 'Old Password')
        await this.fill(this.CONTRASENIA_NUEVA, 'NewPassword0123456789')
        await this.fill(this.CONTRASENIA_REPETIR, 'NewPassword2')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(2000)
    }

    async navigateToMiPerfilContraseniaCaracteresInvalidos(): Promise<void> {
        await this.clickBotonEditar()
        await this.fillContrasenias()
    }
}








