import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, miHogar }) => {

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
})

test('@CompraTuTicketCompra @Regression (FC-TC-109) Verificar que el boton Compra tu ticket de compra del navbar lateral funciona correctamente', async ({ compraTuTicketCompra }) => {

    await test.step('Click en el boton Compra tu ticket de compra', async () => {
        await compraTuTicketCompra.clickiCompraTuTicketCompra()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
