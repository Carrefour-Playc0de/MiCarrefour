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

test('@pass @CambioContrasenia @Regression (FC-TC-88) Verificar que el sistema no muestre el mensaje de error con caracteres válidos', async ({ miPerfilContraseniaCamposContrasenias }) => {

    await test.step('Clic en el boton EDITAR', async () => {
        await miPerfilContraseniaCamposContrasenias.clickBotonEditar()
    })
    await test.step('Ingresar datos en los campos contrasenia actual, nueva contrasenia y repetir contrasenia', async () => {
        await miPerfilContraseniaCamposContrasenias.fillContrasenias()
    })
})
test('@pass @CambioContrasenia @Regression (FC-TC-89) Verificar que nueva contrasenia y repetir contrasenia son iguales', async ({ miPerfilContraseniaCamposContrasenias }) => {

    await test.step('Clic en el boton EDITAR', async () => {
        await miPerfilContraseniaCamposContrasenias.clickBotonEditar()
    })
    await test.step('Ingresar datos en los campos contrasenia actual, nueva contrasenia y repetir contrasenia', async () => {
        await miPerfilContraseniaCamposContrasenias.fillContrasenias()
    })
})
test('@pass @CambioContrasenia @Regression (FC-TC-90) Verificar que el sistema muestre el mensaje de error Su contraseña debe tener entre 8 y 15 caracteres, usar mayúscula, y 1 número', async ({ miPerfilContraseniaCaracteresInvalidos }) => {

    await test.step('Clic en el boton EDITAR', async () => {
        await miPerfilContraseniaCaracteresInvalidos.clickBotonEditar()
    })
    await test.step('Ingresar datos en los campos contrasenia actual, nueva contrasenia y repetir contrasenia', async () => {
        await miPerfilContraseniaCaracteresInvalidos.fillContrasenias()
    })
})
test('@pass @CambioContrasenia @Regression (FC-TC-91) Verificar que el sistema muestre el mensaje de error Las contraseñas no coinciden', async ({ miPerfilContraseniaNewPassNoCoinciden }) => {

    await test.step('Clic en el boton EDITAR', async () => {
        await miPerfilContraseniaNewPassNoCoinciden.clickBotonEditar()
    })
    await test.step('Ingresar datos en los campos contrasenia actual, nueva contrasenia y repetir contrasenia', async () => {
        await miPerfilContraseniaNewPassNoCoinciden.fillContrasenias()
    })
})
