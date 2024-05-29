import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting

test('@Smoke @Regression (FC-TC-1) Navigate to the forum and login with valid credentials', async ({ loginPage }) => {
    await test.step(`Navegar en Mi Carrefour`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Click en el boton INGRESAR para loguearse', async () => {
        await loginPage.clickIngresarLoging()
    })
    await test.step('Ingresar credenciales validas', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el botón Ingresar del login', async () => {
        await loginPage.clickIngresarCuenta()
    })
})
