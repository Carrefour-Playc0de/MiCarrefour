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

test('@CambioContrasenia @Regression (FC-TC-88) Verificar que los campos de la card Actualizar Contrasenia funcionan correctamente', async ({ miPerfilActualizarContrasenia }) => {

    await test.step('Clic en el boton EDITAR', async () => {
        await miPerfilActualizarContrasenia.clickBotonEditar()
    })
    await test.step('Ingresar datos en los campos contrasenia actual, nueva contrasenia y repetir contrasenia', async () => {
        await miPerfilActualizarContrasenia.fillCredentials()
    })
})


















