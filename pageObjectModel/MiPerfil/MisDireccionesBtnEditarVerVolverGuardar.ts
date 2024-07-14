import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MisDireccionesBtnEditarVerVolverGuardar extends BasePage {

    readonly EDITAR_MIS_DIRECCIONES: Locator
    readonly EDITAR_DOMICILIO_PRINCIPAL: Locator
    readonly VER_DOMICILIO_PRINCIPAL: Locator
    readonly GUARDAR_CAMBIOS: Locator
    readonly VOLVER: Locator
    readonly AGREGAR_DIRECCION: Locator
    readonly EDITAR_AGREGAR_DIRECCION: Locator
    readonly VALIDAR: Locator
    readonly ELIMINAR_AGREGAR_DIRECCION: Locator
    readonly MODAL_SEGURO_QUE_ELIMINAR: Locator
    readonly VER_AGREGAR_DIRECCION: Locator
    readonly MODAL_SEGURO_QUE_CANCELAR: Locator
    readonly EDITAR_DATOS_SEGURIDAD: Locator
    readonly EDITAR_INTERESES: Locator
    readonly EDITAR_ACTUALIZAR_MAIL: Locator
    readonly GUARDAR: Locator
    readonly REENVIAR: Locator
    readonly ELIMINAR_PENDIENTE: Locator
    readonly BOTON_SI: Locator
    readonly BOTON_NO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EDITAR_MIS_DIRECCIONES = this.page.locator('//a[@href="https://www.micarrefour.com.ar/mi-perfil/mis-direcciones"]')
        this.EDITAR_DOMICILIO_PRINCIPAL = this.page.locator('(//a[@class="fw-bold"][normalize-space()="EDITAR"])[1]')
        this.EDITAR_AGREGAR_DIRECCION = this.page.locator('(//a[@class="fw-bold"][normalize-space()="EDITAR"])[2]')
        this.VER_DOMICILIO_PRINCIPAL = this.page.locator('(//a[@class="fw-bold"][normalize-space()="VER"])[1]')
        this.GUARDAR_CAMBIOS = this.page.locator('//button[normalize-space()="Guardar cambios"]')
        this.VOLVER = this.page.locator('//a[normalize-space()="Volver"]')
        this.AGREGAR_DIRECCION = this.page.getByRole('link', { name: 'Agregar Agregar dirección' }).first()
        this.VALIDAR = this.page.locator('//button[normalize-space()="Validar"]')
        this.ELIMINAR_AGREGAR_DIRECCION = this.page.locator('(//a[normalize-space()="ELIMINAR"])[1]')
        this.MODAL_SEGURO_QUE_ELIMINAR = this.page.getByRole('button', { name: 'Eliminar' })
        this.MODAL_SEGURO_QUE_CANCELAR = this.page.locator('(//button[normalize-space()="Cancelar"])[1]')
        this.VER_AGREGAR_DIRECCION = this.page.locator('(//a[@class="fw-bold"][normalize-space()="VER"])[2]')
        this.EDITAR_DATOS_SEGURIDAD = this.page.locator('(//a[@class="editar"][normalize-space()="EDITAR"])[4]')
        this.EDITAR_INTERESES = this.page.locator('(//a[@class="editar"][normalize-space()="EDITAR"])[5]')
        this.EDITAR_ACTUALIZAR_MAIL = this.page.locator('(//a[@class="editar"][normalize-space()="EDITAR"])[6]')
        this.GUARDAR = this.page.locator('//a[normalize-space()="GUARDAR"]')
        this.REENVIAR = this.page.locator('(//a[contains(text(),"Reenviar")])[1]')
        this.ELIMINAR_PENDIENTE = this.page.getByRole('link', { name: 'Eliminar' })
        this.BOTON_SI = this.page.getByRole('link', { name: 'Sí' })
        this.BOTON_NO = this.page.getByRole('link', { name: 'No', exact: true })
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
        await this.click(this.VER_DOMICILIO_PRINCIPAL)
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
    async clickBotonEliminarModalSeguroQue(): Promise<void> {
        await this.click(this.MODAL_SEGURO_QUE_ELIMINAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonCancelarModalSeguroQue(): Promise<void> {
        await this.click(this.MODAL_SEGURO_QUE_CANCELAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardVerAgregarDireccion(): Promise<void> {
        await this.click(this.VER_AGREGAR_DIRECCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardDatosSeguridad(): Promise<void> {
        await this.click(this.EDITAR_DATOS_SEGURIDAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardIntereses(): Promise<void> {
        await this.click(this.EDITAR_INTERESES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickCardActualizarTuEmail(): Promise<void> {
        await this.click(this.EDITAR_ACTUALIZAR_MAIL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonGuardar(): Promise<void> {
        await this.click(this.GUARDAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonReenviar(): Promise<void> {
        await this.click(this.REENVIAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonEliminarPendiente(): Promise<void> {
        await this.click(this.ELIMINAR_PENDIENTE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickBotonNo(): Promise<void> {
        await this.page.waitForTimeout(3000)
        await this.click(this.BOTON_NO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickBotonSi(): Promise<void> {
        await this.page.waitForTimeout(3000)
        await this.click(this.BOTON_SI)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
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
        await this.clickBotonEliminarModalSeguroQue()
        await this.clickBotonCancelarModalSeguroQue()
        await this.clickCardVerAgregarDireccion()
        await this.clickCardDatosSeguridad()
        await this.clickCardIntereses()
        await this.clickCardActualizarTuEmail()
        await this.clickBotonGuardar()
        await this.clickBotonReenviar()
    }
}
