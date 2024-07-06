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

test('@Inicio @Smoke @Regression (FC-TC-81) Verificar cierre de sesión correctamente desde el boton salir', async ({ inicioBotonSalir }) => {

    await test.step('Click en el boton salir', async () => {
        await inicioBotonSalir.clickBotonSalir()
    })
})
test('@Inicio @Regression (FC-TC-82) Verificar que los botones Slide Derecho e Izquierdo del carrucel inferior funcionan correctamente', async ({ inicioSlideDerechoIzquierdo }) => {

    await test.step('Click en el boton Slide Derecho del carrucel inferior', async () => {
        await inicioSlideDerechoIzquierdo.clickSlideDerecho()
    })
    await test.step('Click en el boton Slide Izquierdo del carrucel inferior', async () => {
        await inicioSlideDerechoIzquierdo.clickSlideIzquierdo()
    })
})
test('@Inicio @Regression (FC-TC-83) Verificar que el link TARJETA CARREFOUR funciona correctamente', async ({ inicioLinkTarjetaCarrefour }) => {

    await test.step('Click en el link TARJETA CARREFOUR', async () => {
        await inicioLinkTarjetaCarrefour.clickLinkTarjetaCarrefour()
    })
})
test('@Inicio @Regression (FC-TC-84) Verificar que el link PROMOCIONES funciona correctamente', async ({ inicioLinkPromociones, inicioLoginCarrefourComAr }) => {

    await test.step('Click en el link PROMOCIONES', async () => {
        await inicioLinkPromociones.clickLinkPromociones()
    })
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await inicioLoginCarrefourComAr.acceptCookies()
    })
})
test('@Inicio @Regression (FC-TC-85) Verificar que el link PANEL CARREFOUR funciona correctamente', async ({ inicioLinkPanelCarrefour, inicioLoginCarrefourComAr }) => {

    await test.step('Click en el link PANEL CARREFOUR', async () => {
        await inicioLinkPanelCarrefour.clickLinkPanelCarrefour()
    })
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await inicioLoginCarrefourComAr.acceptCookies()
    })
})
test('@Inicio @Regression (FC-TC-86) Verificar que el link CONTACTO funciona correctamente', async ({ inicioLinkContacto, inicioLoginCarrefourComAr }) => {

    await test.step('Click en el link CONTACTO', async () => {
        await inicioLinkContacto.clickLinkContacto()
    })
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await inicioLoginCarrefourComAr.acceptCookies()
    })
})
test('@Inicio @Regression (FC-TC-87) Verificar que el link PREGUNTAS FRECUENTES funciona correctamente', async ({ inicioLinkPreguntasFrecuentes, inicioLoginCarrefourComAr }) => {

    await test.step('Click en el link PREGUNTAS FRECUENTES', async () => {
        await inicioLinkPreguntasFrecuentes.clickLinkPreguntasFrecuentes()
    })
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await inicioLoginCarrefourComAr.acceptCookies()
    })
})
