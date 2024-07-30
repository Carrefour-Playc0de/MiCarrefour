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

test('@MisNotificaciones @Regression (FC-TC-105) Verificar que el boton Mis Notificaciones del navbar lateral funciona correctamente', async ({ misNotificaciones }) => {

    await test.step('Click en el botón Mis Notificaciones', async () => {
        await misNotificaciones.clickMisNotificaciones()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
