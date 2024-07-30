import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, compraTuTicketCompra, miHogar }) => {

    await test.step(`Navegar en Mi Carrefour`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Click en el boton INGRESAR para loguearse', async () => {
        await loginPage.clickIngresarLoging()
    })
    await test.step('Ingresar credenciales validas', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el boton Ingresar del login', async () => {
        await loginPage.clickIngresarCuenta()
    })
    await test.step('Click en el boton Compra tu ticket de compra', async () => {
        await compraTuTicketCompra.clickiCompraTuTicketCompra()
    })
})

test('@CompraTuTicketCompra @Regression (FC-TC-110) Verificar que el boton IR AL INICIO de la ventana Compra tu ticket de compra funciona correctamente', async ({ compraTuTicketCompraBotonIrInicio }) => {

    await test.step('Click en el boton IR AL INICIO', async () => {
        await compraTuTicketCompraBotonIrInicio.clickiBotonIrInicio()
    })
})
test('@CompraTuTicketCompra @Regression (FC-TC-111) Verificar que al clickear el boton Tutorial se abre la ventna correctamente', async ({ compraTuTicketCompraBotonTutorial }) => {

    await test.step('Click en el boton Tutorial', async () => {
        await compraTuTicketCompraBotonTutorial.clickiBotonTutorial()
    })
})
test('@CompraTuTicketCompra @Regression (FC-TC-112) Verificar que al clickear el boton Ver Legales se abre la ventna correctamente', async ({ compraTuTicketCompraBotonVerLegales }) => {

    await test.step('Click en el boton Ver Legales', async () => {
        await compraTuTicketCompraBotonVerLegales.clickiBotonVerLegales()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
