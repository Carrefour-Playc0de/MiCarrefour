import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, miPerfil, misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesRadioButtonSi }) => {

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
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el radio button Si de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickRadioButtonSi()
    })
})

test('@qaz @Perfil @Regression (FC-TC-27) Verificar que el selec Provincia Buenos Aires y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (SI)', async ({ selectProvBuenosAiresPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvBuenosAiresPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar Buenos Aires', async () => {
        await selectProvBuenosAiresPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvBuenosAiresPartidos.clickPartidos()
    })

})





test.afterEach(async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
    // await test.step('Click en el boton Cerrar Sesion', async () => {
    //     await cerrarSesion.clickCerrarSesion()
    // })
})


















