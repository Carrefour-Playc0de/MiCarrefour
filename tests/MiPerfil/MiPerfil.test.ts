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
    await test.step('Click en Mi Perfil', async () => {
        await miPerfil.clickMiPerfil()
    })
})

test('@Smoke @Regression (FC-TC-5) Verificar que se pueda cambiar solo numero de celular desde Editar Datos personales desde Mi Perfil', async ({ miPerfilEditarDatosPersonales }) => {

    await test.step('Click en el boton Datos Personales', async () => {
        await miPerfilEditarDatosPersonales.clickEditarDatosPersonales()
    })
    await test.step('Ingresar numero de celular', async () => {
        await miPerfilEditarDatosPersonales.fillCelularDatosPersonales()
    })
    await test.step('Click en el boton Guardar', async () => {
        await miPerfilEditarDatosPersonales.clickGuardarDatosPersonales()
    })
})

test('@zxcv @Smoke @Regression (FC-TC-5) Verificar que se pueda cambiar solo numero de celular desde Editar Datos personales desde Mi Perfil', async ({ miPerfilEditarMiDireccionRadioButtonSi }) => {

    await test.step('Click en el boton Mis Direcciones', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickEditarMisDirecciones()
    })
    await test.step('Ingresar numero de celular', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickCardEditarDomicilio()
    })
    await test.step('Click en el boton Guardar', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickRadioButtonSi()
    })
    await test.step('Click en el boton Datos Personales', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickSelectProvincia()
    })
    await test.step('Ingresar numero de celular', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickBsAs()
    })
    await test.step('Click en el boton Guardar', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickSelectPartido()
    })
    await test.step('Click en el boton Datos Personales', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickGuaymallen()
    })
    await test.step('Ingresar numero de celular', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.fillNombreBarrio()
    })
    await test.step('Click en el boton Guardar', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.fillLote()
    })
    await test.step('Click en el boton Datos Personales', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickSelectTipoDomicilio()
    })
    await test.step('Ingresar numero de celular', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.clickDomicilioPrincipal()
    })
    await test.step('Click en el boton Guardar', async () => {
        await miPerfilEditarMiDireccionRadioButtonSi.fillComentario()
    })
})

















test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click sobre el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})






