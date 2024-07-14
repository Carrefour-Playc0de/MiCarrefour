import test from '../../config/testManager'

test.beforeEach(async ({ loginPage, miHogar }) => {

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
    await test.step('Click en Mi Hogar', async () => {
        await miHogar.clickMiHogar()
    })
})

test('@MiHogar @Regression (FC-TC-21) Verificar que se pueda guardar los datos de Mi Hogar en Adicionales del grupo correctamente', async ({ miHogarAdicionalesDelGrupo, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en la card AGREGAR ADICIONAL', async () => {
        await miHogarAdicionalesDelGrupo.clickAgregarAdicional()
    })
    await test.step('Ingresar Nombre adicional', async () => {
        await miHogarAdicionalesDelGrupo.fillNombreAdicional()
    })
    await test.step('Ingresar Email adicional', async () => {
        await miHogarAdicionalesDelGrupo.fillEmail()
    })
    await test.step('Repetir Email adicional', async () => {
        await miHogarAdicionalesDelGrupo.fillConfirmarEmail()
    })
    await test.step('Click en el boton GUARDAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonGuardar()
    })
})
test('@MiHogar @Regression (FC-TC-100) Verificar que el boton VOLVER de la card Adicionales del grupo funcionan correctamente', async ({ miHogarAdicionalesDelGrupo, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en la card AGREGAR ADICIONAL', async () => {
        await miHogarAdicionalesDelGrupo.clickAgregarAdicional()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})
test('@MiHogar @Regression (FC-TC-101) Verificar que el boton Reenviar correo de invitación de la card Adicionales del grupo funcionan correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton Reenviar correo de invitación', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonReenviar()
    })
})
test('@MiHogar @Regression (FC-TC-102) Verificar que no se elimina un usuario en Mi Hogar al hacer clic en el boton NO del modal Atencion', async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton ELIMINAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonEliminarPendiente()
    })
    await test.step('Click en el boton NO del modal Atencion', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonNo()
    })
})
test('@MiHogar @Regression (FC-TC-22) Verificar que se elimina un usuario en Mi Hogar al hacer clic en el boton SI del modal Atencion', async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton ELIMINAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonEliminarPendiente()
    })
    await test.step('Click en el boton SI del modal Atencion', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonSi()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
