import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfilEditarMisDireccionesAgregarDirecRButtonNo extends BasePage {

    readonly RADIOBUTON_NO: Locator
    readonly SELECT_PROVINCIA: Locator
    readonly PROVINCIA: Locator
    readonly SELECT_PARTIDO: Locator
    readonly PARTIDO: Locator
    readonly CALLE: Locator
    readonly NUMERO: Locator
    readonly PISO: Locator
    readonly DEPTO: Locator
    readonly COD_POSTAL: Locator
    readonly COMENTARIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RADIOBUTON_NO = this.page.getByText('No', { exact: true })
        this.SELECT_PROVINCIA = this.page.locator('.select-dropdown').first()
        this.PROVINCIA = this.page.locator('span').filter({ hasText: 'BUENOS AIRES' })
        this.SELECT_PARTIDO = this.page.locator('div:nth-child(3) > .select-wrapper > input')
        this.PARTIDO = this.page.locator('span').filter({ hasText: '25 DE MAYO' })
        this.CALLE = this.page.locator("//input[@id='dDireccionCalle']")
        this.NUMERO = this.page.locator("//input[@id='nCalle']")
        this.PISO = this.page.locator("//input[@id='nPiso']")
        this.DEPTO = this.page.locator("//input[@id='nDepartamento']")
        this.COD_POSTAL = this.page.locator("//input[@id='dCodigoPostal']")
        this.COMENTARIO = this.page.locator('//input[@id="dComentario"]')
    }

    async clickRadioButtonNo(): Promise<void> {
        await this.click(this.RADIOBUTON_NO)
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
    }
    async fillNombreCalle(): Promise<void> {
        await this.fill(this.CALLE, 'Test QA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillNumero(): Promise<void> {
        await this.fill(this.NUMERO, '123456')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillPiso(): Promise<void> {
        await this.fill(this.PISO, '12')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillDepartamento(): Promise<void> {
        await this.fill(this.DEPTO, '12')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillCodPostal(): Promise<void> {
        await this.fill(this.COD_POSTAL, '5000')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillComentario(): Promise<void> {
        await this.fill(this.COMENTARIO, 'Preuba QA Automatizada')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilEditarMisDireccionesAgregarDirecRButtonNo(): Promise<void> {
        await this.clickRadioButtonNo()
        await this.clickSelectProvincia()
        await this.seleccionProvincia()
        await this.clickSelectPartido()
        await this.seleccionPartido()
        await this.fillNombreCalle()
        await this.fillNumero()
        await this.fillPiso()
        await this.fillDepartamento()
        await this.fillCodPostal()
        await this.fillComentario()

    }
}
