import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, miPerfil, misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesRadioButtonNo }) => {

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
    await test.step('Click en el radio button NO de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.clickRadioButtonNo()
    })
})

test('@Perfil @Regression (FC-TC-52) Verificar que el selec Provincia BUENOS AIRES y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvBuenosAiresPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvBuenosAiresPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar BUENOS AIRES', async () => {
        await selectProvBuenosAiresPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvBuenosAiresPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-53) Verificar que el selec Provincia CAPITAL FEDERAL y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvCapitalFederalPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvCapitalFederalPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CAPITAL FEDERAL', async () => {
        await selectProvCapitalFederalPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvCapitalFederalPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-54) Verificar que el selec Provincia CATAMARCA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvCatamarcaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvCatamarcaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CATAMARCA', async () => {
        await selectProvCatamarcaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvCatamarcaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-55) Verificar que el selec Provincia CHACO y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvChacoPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvChacoPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CHACO', async () => {
        await selectProvChacoPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvChacoPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-56) Verificar que el selec Provincia CHUBUT y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvChubutPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvChubutPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CHUBUT', async () => {
        await selectProvChubutPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvChubutPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-57) Verificar que el selec Provincia CORDOBA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvCordobaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvCordobaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CORDOBA', async () => {
        await selectProvCordobaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvCordobaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-58) Verificar que el selec Provincia CORRIENTES y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvCorrientesPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvCorrientesPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar CORRIENTES', async () => {
        await selectProvCorrientesPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvCorrientesPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-59) Verificar que el selec Provincia ENTRE RIOS y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvEntreRiosPartidos, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvEntreRiosPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar ENTRE RIOS', async () => {
        await selectProvEntreRiosPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvEntreRiosPartidos.clickPartidos()
    })
    await test.step('Ingresar nombre de la calle', async () => {
        await selectProvEntreRiosPartidos.fillNombreCalle()
    })
    await test.step('Click en boton Guardar Cambios', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickGuardarCambios()
    })
})
test('@Perfil @Regression (FC-TC-60) Verificar que el selec Provincia FORMOSA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvFormosaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvFormosaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar FORMOSA', async () => {
        await selectProvFormosaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvFormosaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-61) Verificar que el selec Provincia ISLAS MALVINAS y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvIslasMalvinasPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvIslasMalvinasPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar ISLAS MALVINAS', async () => {
        await selectProvIslasMalvinasPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvIslasMalvinasPartidos.clickPartidos()
    })
    await test.step('Click en ISLAS MALVINAS', async () => {
        await selectProvIslasMalvinasPartidos.seleccionIslasMalvinas()
    })
})
test('@Perfil @Regression (FC-TC-62) Verificar que el selec Provincia JUJUY y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvJujuyPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvJujuyPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar JUJUY', async () => {
        await selectProvJujuyPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvJujuyPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-63) Verificar que el selec Provincia LA PAMPA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvLaPampaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvLaPampaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar LA PAMPA', async () => {
        await selectProvLaPampaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvLaPampaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-64) Verificar que el selec Provincia LA RIOJA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvLaRiojaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvLaRiojaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar LA RIOJA', async () => {
        await selectProvLaRiojaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvLaRiojaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-65) Verificar que el selec Provincia MENDOZA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvMendozaPartidos, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Selecionar otra Provincia', async () => {
        await selectProvMendozaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar MENDOZA', async () => {
        await selectProvMendozaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvMendozaPartidos.clickPartidos()
    })
    await test.step('Ingresar nombre de la calle', async () => {
        await selectProvMendozaPartidos.fillNombreCalle()
    })
    await test.step('Click en boton Guardar Cambios', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickGuardarCambios()
    })
})
test('@Perfil @Regression (FC-TC-66) Verificar que el selec Provincia MISIONES y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvMisionesPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvMisionesPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar MISIONES', async () => {
        await selectProvMisionesPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvMisionesPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-67) Verificar que el selec Provincia NEUQUEN y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvNeuquenPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvNeuquenPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar NEUQUEN', async () => {
        await selectProvNeuquenPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvNeuquenPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-68) Verificar que el selec Provincia RIO NEGRO y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvRioNegroPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvRioNegroPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar RIO NEGRO', async () => {
        await selectProvRioNegroPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvRioNegroPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-69) Verificar que el selec Provincia SALTA y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSaltaPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSaltaPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SALTA', async () => {
        await selectProvSaltaPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSaltaPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-70) Verificar que el selec Provincia SAN JUAN y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSanJuanPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSanJuanPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SAN JUAN', async () => {
        await selectProvSanJuanPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSanJuanPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-71) Verificar que el selec Provincia SAN LUIS y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSanLuisPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSanLuisPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SAN LUIS', async () => {
        await selectProvSanLuisPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSanLuisPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-72) Verificar que el selec Provincia SANTA CRUZ y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSantaCruzPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSantaCruzPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SANTA CRUZ', async () => {
        await selectProvSantaCruzPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSantaCruzPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-73) Verificar que el selec Provincia SANTA FE y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSantaFePartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSantaFePartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SANTA FE', async () => {
        await selectProvSantaFePartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSantaFePartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-74) Verificar que el selec Provincia SANTIAGO DEL ESTERO y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvSantiagoDelEsteroPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvSantiagoDelEsteroPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar SANTIAGO DEL ESTERO', async () => {
        await selectProvSantiagoDelEsteroPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvSantiagoDelEsteroPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-75) Verificar que el selec Provincia TIERRA DEL FUEGO y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvTierraDelFuegoPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvTierraDelFuegoPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar TIERRA DEL FUEGO', async () => {
        await selectProvTierraDelFuegoPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvTierraDelFuegoPartidos.clickPartidos()
    })
})
test('@Perfil @Regression (FC-TC-76) Verificar que el selec Provincia TUCUMAN y todos sus Partidos funcionan correctamente en Vivis en Barrio Cerrado (NO)', async ({ selectProvTucumanPartidos }) => {

    await test.step('Click en el select Provincia', async () => {
        await selectProvTucumanPartidos.clickSelectProvincia()
    })
    await test.step('Seleccionar TUCUMAN', async () => {
        await selectProvTucumanPartidos.seleccionProvincia()
    })
    await test.step('Click en los Partidos de la Provincia', async () => {
        await selectProvTucumanPartidos.clickPartidos()
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


















