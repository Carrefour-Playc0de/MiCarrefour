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

test('@Smoke @Regression (FC-TC-12) Verificar que los botones EDITAR y VOLVER funcionan correctamente de la card Domicilio Principal', async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})

test('@Smoke @Regression (FC-TC-14) Verificar que los botones VER y VOLVER funcionan correctamente de la card Domicilio Principal', async ({ misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton VER de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardVerDomicilioPrincipal()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})

test('@Perfil @Regression (FC-TC-11) Verificar que en Domicilio Principal en Vivis en Barrio Cerrado (SI) los datos se guardan correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesRadioButtonSi, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR en Mis Direcciones', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el radio button SI de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickRadioButtonSi()
    })
    await test.step('Click en el select Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickSelectProvincia()
    })
    await test.step('Seleccionar Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.seleccionProvincia()
    })
    await test.step('Click en el select Partido', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickSelectPartido()
    })
    await test.step('Seleccionar Partido', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.seleccionPartido()
    })
    await test.step('Ingresar datos en el input Nombre del Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.fillNombreBarrioCerrado()
    })
    await test.step('Ingresar datos en el input Lote o Unidad Funcional', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.fillLoteUnidadFuncional()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickTipoDomicilio()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickSelectTipoDomicilio()
    })
    await test.step('Seleccionar Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.seleccionarTipoDomicilio()
    })
    await test.step('Ingresar datos en el input Comentario', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.fillComentario()
    })
    await test.step('Click en el boton GUARDAR CAMBIOS', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickGuardarCambios()
    })
})

test('@Perfil @Regression (FC-TC-26) Verificar que en Domicilio Principal en Vivis en Barrio Cerrado (NO) los datos se guardan correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesRadioButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR en Mis Direcciones', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el radio button NO de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.clickRadioButtonNo()
    })
    await test.step('Click en el select Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.clickSelectProvincia()
    })
    await test.step('Seleccionar Provincia', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.seleccionProvincia()
    })
    await test.step('Click en el select Partido', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.clickSelectPartido()
    })
    await test.step('Seleccionar Partido', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.seleccionPartido()
    })
    await test.step('Ingresar el nombre de la Calle', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillNombreCalle()
    })
    await test.step('Ingresar el numero de la Calle', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillNumero()
    })
    await test.step('Ingrese el numero de Piso', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillPiso()
    })
    await test.step('Ingrese el numero de Departamento', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillDepartamento()
    })
    await test.step('Ingrese el Codigo Postal', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillCodPostal()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickTipoDomicilio()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickSelectTipoDomicilio()
    })
    await test.step('Seleccionar Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.seleccionarTipoDomicilio()
    })
    await test.step('Ingresar datos en el input Comentario', async () => {
        await miPerfilEditarMisDireccionesRadioButtonNo.fillComentario()
    })
    await test.step('Click en el boton GUARDAR CAMBIOS', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickGuardarCambios()
    })
})

test('@Perfil @Regression (FC-TC-77) Verificar que el formulario Responsanble se puede cargar los datos correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesResponsable }) => {

    await test.step('Click en el boton EDITAR en Mis Direcciones', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton AGREGAR', async () => {
        await miPerfilEditarMisDireccionesResponsable.clickButtonAgregar()
    })
    await test.step('Ingresar un Nombre en el input', async () => {
        await miPerfilEditarMisDireccionesResponsable.fillNombre()
    })
    await test.step('Ingresar un DNI en el input', async () => {
        await miPerfilEditarMisDireccionesResponsable.fillDNI()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})

test('@Perfil @Regression (FC-TC-78) Verificar que el boton << Volver funciona correctamente en Mis Direcciones', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesResponsable }) => {

    await test.step('Click en el boton EDITAR de la card Mis Direcciones', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el botón << Volver', async () => {
        await miPerfilEditarMisDireccionesResponsable.clickButtonVolver()
    })
})

test('@Perfil @Regression (FC-TC-79) Verificar que en Agregar Direccion en Vivis en Barrio Cerrado (NO) los datos se guardan correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesAgregarDirecRButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en la card Agregar Direccion', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardAgregarDireccion()
    })
    await test.step('Click en el select Provincia', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.clickSelectProvincia()
    })
    await test.step('Seleccionar Provincia', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.seleccionProvincia()
    })
    await test.step('Click en el select Partido', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.clickSelectPartido()
    })
    await test.step('Seleccionar Partido', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.seleccionPartido()
    })
    await test.step('Ingresar el nombre de la Calle', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillNombreCalle()
    })
    await test.step('Ingresar el numero de la Calle', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillNumero()
    })
    await test.step('Ingrese el numero de Piso', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillPiso()
    })
    await test.step('Ingrese el numero de Departamento', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillDepartamento()
    })
    await test.step('Ingrese el Codigo Postal', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillCodPostal()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickTipoDomicilio()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickSelectTipoDomicilio()
    })
    await test.step('Seleccionar Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.seleccionarTipoDomicilio()
    })
    await test.step('Ingresar datos en el input Comentario', async () => {
        await miPerfilEditarMisDireccionesAgregarDirecRButtonNo.fillComentario()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})

test('@Perfil @Regression (FC-TC-80) Verificar que el select Tipo de Domicilio funciona correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesRadioButtonSi, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR en Mis Direcciones', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarDomicilioPrincipal()
    })
    await test.step('Click en el radio button SI de la ventana Vivis en un Barrio Cerrado', async () => {
        await miPerfilEditarMisDireccionesRadioButtonSi.clickRadioButtonSi()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickTipoDomicilio()
    })
    await test.step('Click en el select Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.clickSelectTipoDomicilio()
    })
    await test.step('Seleccionar Tipo de domicilio', async () => {
        await misDireccionesSelectTipoDomicilio.seleccionarTipoDomicilio()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})








test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})






