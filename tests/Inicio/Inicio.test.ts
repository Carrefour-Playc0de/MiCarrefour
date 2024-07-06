import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, miPerfil }) => {

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

test('@asd @Inicio @Smoke @Regression (FC-TC-81) Verificar cierre de sesión correctamente desde el boton salir', async ({ inicioBotonSalir }) => {

    await test.step('Click en el boton salir', async () => {
        await inicioBotonSalir.clickBotonSalir()
    })
})
