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

test('@zxcv @Perfil @Regression (FC-TC-11) Verificar que en Domicilio Principal en Vivis en Barrio Cerrado (SI) los datos se guardan correctamente', async ({ miPerfilEditarMisDireccionesRadioButtonSi }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickEditarMisDirecciones()
    })
    await test.step('lick en el boton EDITAR', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el radio button Si de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickRadioButtonSi()
    })
    await test.step('Click en el select Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickSelectProvincia()
    })
    await test.step('Seleccionar Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.seleccionProvincia()
    })
    // await test.step('Click en el select Partido', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.clickSelectPartido()
    // })
    // await test.step('Seleccionar Partido', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.seleccionPartido()
    // })
    // await test.step('Ingresar datos en el input Nombre del Barrio Cerrado', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.fillNombreBarrioCerrado()
    // })
    // await test.step('Ingresar datos en el input Lote o Unidad Funcional', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.fillLoteUnidadFuncional()
    // })
    // await test.step('Click en el select Tipo de domicilio', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.clickSelectTipoDomicilio()
    // })
    // await test.step('Seleccionar Tipo de domicilio', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.seleccionarTipoDomicilio()
    // })
    // await test.step('Ingresar datos en el input Comentario', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.fillComentario()
    // })
    // await test.step('Click en el boton GUARDAR CAMBIOS', async () => {
    //     await miPerfilEditarMisDireccionesRadioButtonSi.clickGuardarCambios()
    // })
})

















test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click sobre el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})






