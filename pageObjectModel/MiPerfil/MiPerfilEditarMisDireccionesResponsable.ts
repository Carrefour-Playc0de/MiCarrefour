import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MiPerfilEditarMisDireccionesResponsable extends BasePage {
    readonly AGREGAR: Locator
    readonly NOMBRE: Locator
    readonly DNI: Locator
    readonly BUTTON_VOLVER: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGREGAR = this.page.locator('//a[normalize-space()="AGREGAR"]')
        this.NOMBRE = this.page.locator('//label[normalize-space()="Nombre"]')
        this.DNI = this.page.locator('//input[@id="dniResponsable"]')
        this.BUTTON_VOLVER = this.page.locator('//a[normalize-space()="« Volver"]')
    }

    async clickButtonAgregar(): Promise<void> {
        await this.click(this.AGREGAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillNombre(): Promise<void> {
        await this.fill(this.NOMBRE, 'Test QA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async fillDNI(): Promise<void> {
        await this.fill(this.DNI, '20123456')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickButtonVolver(): Promise<void> {
        await this.click(this.BUTTON_VOLVER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMiPerfilEditarMisDireccionesResponsable(): Promise<void> {
        await this.clickButtonAgregar()
        await this.fillNombre()
        await this.fillDNI()
        await this.clickButtonVolver()
    }
}
