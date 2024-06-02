import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfilEditarMisDireccionesRadioButtonNo extends BasePage {
    readonly EDITAR: Locator
    readonly DOMICILIO: Locator
    readonly RADIOBUTON_NO: Locator
    // readonly SELECT_PROVINCIA: Locator
    // readonly BSAS: Locator
    // readonly SELECT_PARTIDO: Locator
    // readonly GUAYMALLEN: Locator
    // readonly NOMBRE_BARRIO: Locator
    // readonly LOTE: Locator
    // readonly SELECT_TIPO_DOMICILIO: Locator
    // readonly DOMICILIO_PRINCIPAL: Locator
    // readonly COMENTARIO: Locator
    // readonly GUARDAR_CAMBIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EDITAR = this.page.locator('//a[@href="https://www.micarrefour.com.ar/mi-perfil/mis-direcciones"]')
        this.DOMICILIO = this.page.locator("//a[normalize-space()='EDITAR']")
        this.RADIOBUTON_NO = this.page.locator("//input[@type='radio' and @name='barrioCerrado' and @value='0']")
        this.SELECT_PROVINCIA = this.page.locator("(//input[@type='text'])[1]")
        this.BSAS = this.page.locator('//*[@id="select-options-e1d9abfc-832d-5dd6-49b7-baecc0d8e5b61"]')
        this.SELECT_PARTIDO = this.page.locator("(//input[@class='select-dropdown dropdown-trigger valid'])[1]")
        this.GUAYMALLEN = this.page.locator('//*[@id="select-options-c2a99389-3be6-41c3-ac15-b8334dba57033"]')
        this.NOMBRE_BARRIO = this.page.locator("//input [@id='dDireccionCalle']")
        this.LOTE = this.page.locator("//input [@id='nDepartamento']")
        this.SELECT_TIPO_DOMICILIO = this.page.locator('(//input[@class="select-dropdown dropdown-trigger valid"])[1]')
        this.DOMICILIO_PRINCIPAL = this.page.locator('//span[normalize-space()="Domicilio Principal"]')
        this.COMENTARIO = this.page.locator('//input[@id="dComentario"]')
        this.GUARDAR_CAMBIOS = this.page.locator('(//button[normalize-space()="Guardar cambios"])[1]')
    }

    async clickEditarMisDirecciones(): Promise<void> {
        await this.click(this.EDITAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickCardEditarDomicilioPrincipal(): Promise<void> {
        await this.click(this.DOMICILIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickRadioButtonNo(): Promise<void> {
        await this.click(this.RADIOBUTON_NO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvincia(): Promise<void> {
        await this.click(this.SELECT_PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async seleccionProvincia(): Promise<void> {
        await this.click(this.BSAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectPartido(): Promise<void> {
        await this.click(this.SELECT_PARTIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async seleccionPartido(): Promise<void> {
        await this.click(this.GUAYMALLEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async fillNombreBarrioCerrado(): Promise<void> {
        await this.fill(this.NOMBRE_BARRIO, 'Alto Las Tortugas')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async fillLoteUnidadFuncional(): Promise<void> {
        await this.fill(this.LOTE, '13')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectTipoDomicilio(): Promise<void> {
        await this.click(this.SELECT_TIPO_DOMICILIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async seleccionarTipoDomicilio(): Promise<void> {
        await this.click(this.DOMICILIO_PRINCIPAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async fillComentario(): Promise<void> {
        await this.fill(this.COMENTARIO, 'Preuba QA Automatizada')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async clickGuardarCambios(): Promise<void> {
        await this.click(this.GUARDAR_CAMBIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMiPerfilEditarMisDireccionesRadioButtonNo(): Promise<void> {
        await this.clickEditarMisDirecciones()
        await this.clickCardEditarDomicilioPrincipal()
        await this.clickRadioButtonNo()
        await this.clickSelectProvincia()
        await this.seleccionProvincia()
        await this.clickSelectPartido()
        await this.seleccionPartido()
        await this.fillNombreBarrioCerrado()
        await this.fillLoteUnidadFuncional()
        await this.clickSelectTipoDomicilio()
        await this.seleccionarTipoDomicilio()
        await this.fillComentario()
        await this.clickGuardarCambios()
    }
}
