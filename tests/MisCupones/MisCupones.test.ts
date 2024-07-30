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

test('@MisCupones @Regression (FC-TC-104) Verificar que el boton Mis Cupones del navbar lateral funciona correctamente', async ({ misCupones }) => {

    await test.step('Click en el boton Mis Cupones', async () => {
        await misCupones.clickiMisCupones()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
