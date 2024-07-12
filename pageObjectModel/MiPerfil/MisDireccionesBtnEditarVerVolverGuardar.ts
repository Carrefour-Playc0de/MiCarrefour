import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisDireccionesBtnEditarVerVolverGuardar extends BasePage {

    readonly EDITAR_MIS_DIRECCIONES: Locator
    readonly EDITAR_DOMICILIO_PRINCIPAL: Locator
    readonly VER: Locator
    readonly GUARDAR_CAMBIOS: Locator
    readonly VOLVER: Locator
    readonly AGREGAR_DIRECCION: Locator
    readonly EDITAR_AGREGAR_DIRECCION: Locator
    readonly VALIDAR: Locator
    readonly ELIMINAR_AGREGAR_DIRECCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EDITAR_MIS_DIRECCIONES = this.page.locator('//a[@href="https://www.micarrefour.com.ar/mi-perfil/mis-direcciones"]')
        this.EDITAR_DOMICILIO_PRINCIPAL = this.page.locator('(//a[@class="fw-bold"][normalize-space()="EDITAR"])[1]')
        this.EDITAR_AGREGAR_DIRECCION = this.page.locator('(//a[@class="fw-bold"][normalize-space()="EDITAR"])[2]')
        this.VER = this.page.locator('//a[normalize-space()="VER"]')
        this.GUARDAR_CAMBIOS = this.page.locator('//button[normalize-space()="Guardar cambios"]')
        this.VOLVER = this.page.locator('//a[normalize-space()="Volver"]')
        this.AGREGAR_DIRECCION = this.page.getByRole('link', { name: 'Agregar Agregar dirección' }).first()
        this.VALIDAR = this.page.locator('//button[normalize-space()="Validar"]')
        this.ELIMINAR_AGREGAR_DIRECCION = this.page.locator('(//a[normalize-space()="ELIMINAR"])[1]')
    }

    async clickEditarMisDirecciones(): Promise<void> {
        await this.click(this.EDITAR_MIS_DIRECCIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardEditarDomicilioPrincipal(): Promise<void> {
        await this.click(this.EDITAR_DOMICILIO_PRINCIPAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardVerDomicilioPrincipal(): Promise<void> {
        await this.click(this.VER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickGuardarCambios(): Promise<void> {
        await this.click(this.GUARDAR_CAMBIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickVolver(): Promise<void> {
        await this.click(this.VOLVER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardAgregarDireccion(): Promise<void> {
        await this.click(this.AGREGAR_DIRECCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonValidar(): Promise<void> {
        await this.click(this.VALIDAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardEditarAgregarDireccion(): Promise<void> {
        await this.click(this.EDITAR_AGREGAR_DIRECCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonEliminarAgregarDireccion(): Promise<void> {
        await this.click(this.ELIMINAR_AGREGAR_DIRECCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilEditarMisDireccionesRadioButtonNo(): Promise<void> {
        await this.clickEditarMisDirecciones()
        await this.clickCardEditarDomicilioPrincipal()
        await this.clickCardVerDomicilioPrincipal()
        await this.clickGuardarCambios()
        await this.clickVolver()
        await this.clickCardAgregarDireccion()
        await this.clickBotonValidar()
        await this.clickCardEditarAgregarDireccion()
        await this.clickBotonEliminarAgregarDireccion()
    }
}
