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

test('@MisConsumos @Regression (FC-TC-103) Verificar que el boton Mis Consumos del navbar lateral funciona correctamente', async ({ misConsumos }) => {

    await test.step('Click en el boton Mis Consumos', async () => {
        await misConsumos.clickiConsumos()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
