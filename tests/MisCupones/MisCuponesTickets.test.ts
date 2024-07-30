import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, misCupones, miHogar }) => {

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
    await test.step('Click en el boton Mis Cupones', async () => {
        await misCupones.clickiMisCupones()
    })
})

test('@MisCupones @Regression (FC-TC-106) Verificar que el boton IR A COMPRAR e IR AL INICIO de la ventan MIS CUPONES funcionan correctamente', async ({ misCuponesComprarTickets }) => {

    await test.step('Click en el boton IR A COMPRAR', async () => {
        await misCuponesComprarTickets.clickiBotonIrComprar()
    })
    await test.step('Click en el boton IR AL INICIO', async () => {
        await misCuponesComprarTickets.clickBotonIrInicio()
    })
})
test('@MisCupones @Regression (FC-TC-107) Verificar que al clickear el boton Tutorial se abre la ventna correctamente', async ({ misCuponesBotonTutorial }) => {

    await test.step('Click en el boton Tutorial', async () => {
        await misCuponesBotonTutorial.clickiBotonTutorial()
    })
})
test('@MisCupones @Regression (FC-TC-108) Verificar que al clickear el boton Ver Legales se abre la ventna correctamente', async ({ misCuponesBotonVerLegales }) => {

    await test.step('Click en el boton Ver Legales', async () => {
        await misCuponesBotonVerLegales.clickiBotonVerLegales()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
