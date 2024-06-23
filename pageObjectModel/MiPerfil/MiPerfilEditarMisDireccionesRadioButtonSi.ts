import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfilEditarMisDireccionesRadioButtonSi extends BasePage {

    readonly RADIOBUTON_SI: Locator
    readonly SELECT_PROVINCIA: Locator
    readonly PROVINCIA: Locator
    readonly SELECT_PARTIDO: Locator
    readonly PARTIDO: Locator
    readonly NOMBRE_BARRIO: Locator
    readonly LOTE: Locator
    readonly SELECT_TIPO_DOMICILIO: Locator
    readonly TIPO_DOMICILIO: Locator
    readonly COMENTARIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RADIOBUTON_SI = this.page.getByText('Sí')
        this.SELECT_PROVINCIA = this.page.locator('.select-dropdown').first()
        this.PROVINCIA = this.page.locator('span').filter({ hasText: 'MENDOZA' })
        this.SELECT_PARTIDO = this.page.locator('div:nth-child(3) > .select-wrapper > input')
        this.PARTIDO = this.page.locator('span').filter({ hasText: 'GODOY CRUZ' })
        this.NOMBRE_BARRIO = this.page.locator("//input [@id='dDireccionCalle']")
        this.LOTE = this.page.locator("//input [@id='nDepartamento']")
        this.SELECT_TIPO_DOMICILIO = this.page.locator('div:nth-child(9) > .select-wrapper > input')
        this.TIPO_DOMICILIO = this.page.locator('span').filter({ hasText: 'Otros' })
        this.COMENTARIO = this.page.locator('//input[@id="dComentario"]')
    }

    async clickRadioButtonSi(): Promise<void> {
        await this.click(this.RADIOBUTON_SI)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectProvincia(): Promise<void> {
        await this.click(this.SELECT_PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionProvincia(): Promise<void> {
        await this.click(this.PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(1000)
    }
    async clickSelectPartido(): Promise<void> {
        await this.click(this.SELECT_PARTIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionPartido(): Promise<void> {
        await this.click(this.PARTIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(1000)
    }
    async fillNombreBarrioCerrado(): Promise<void> {
        await this.fill(this.NOMBRE_BARRIO, 'Alto Las Tortugas')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillLoteUnidadFuncional(): Promise<void> {
        await this.fill(this.LOTE, '795')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectTipoDomicilio(): Promise<void> {
        await this.click(this.SELECT_TIPO_DOMICILIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async seleccionarTipoDomicilio(): Promise<void> {
        await this.click(this.TIPO_DOMICILIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(1000)
    }
    async fillComentario(): Promise<void> {
        await this.fill(this.COMENTARIO, 'Prueba QA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilEditarMisDireccionesRadioButtonSi(): Promise<void> {
        await this.clickRadioButtonSi()
        await this.clickSelectProvincia()
        await this.seleccionProvincia()
        await this.clickSelectPartido()
        await this.seleccionPartido()
        await this.fillNombreBarrioCerrado()
        await this.fillLoteUnidadFuncional()
        await this.clickSelectTipoDomicilio()
        await this.seleccionarTipoDomicilio()
        await this.fillComentario()
    }
}
