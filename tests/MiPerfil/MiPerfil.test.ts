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
    await test.step('Click en el boton VALIDAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonValidar()
    })
})


test('@Perfil @Regression (FC-TC-92) Verificar que en Agregar Direccion se puede editar los datos correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesAgregarDirecRButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton EDITAR en la card Agregar Direccion', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardEditarAgregarDireccion()
    })
    await test.step('Click en el boton GUARDAR CAMBIOS', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickGuardarCambios()
    })
})

test('@Perfil @Regression (FC-TC-94) Verificar que el boton VER del modal Seguro que querés eliminar la dirección de la card Agregar Direccion funciona correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesAgregarDirecRButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton VER en la card Agregar Direccion', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardVerAgregarDireccion()
    })
    await test.step('Click en el boton VOLVER', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickVolver()
    })
})

test('@Perfil @Regression (FC-TC-95) Verificar que el boton CANCELAR del modal Seguro que querés eliminar la dirección de la card Agregar Direccion funciona correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesAgregarDirecRButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton ELIMINAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonEliminarAgregarDireccion()
    })
    await test.step('Click en el boton CANCELAR del modal Seguro que querés eliminar', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonCancelarModalSeguroQue()
    })
})
test('@Perfil @Regression (FC-TC-93) Verificar que el boton ELIMINAR del modal Seguro que querés eliminar la dirección de la card Agregar Direccion funciona correctamente', async ({ misDireccionesBtnEditarVerVolverGuardar, miPerfilEditarMisDireccionesAgregarDirecRButtonNo, misDireccionesSelectTipoDomicilio }) => {

    await test.step('Click en el boton EDITAR de la card Domicilio Principal', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickEditarMisDirecciones()
    })
    await test.step('Click en el boton ELIMINAR', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonEliminarAgregarDireccion()
    })
    await test.step('Click en el boton ELIMINAR del modal Seguro que querés eliminar', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickBotonEliminarModalSeguroQue()
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
test('@Perfil @Regression (FC-TC-96) Verificar que se puede guardar los Datos de Seguridad correctamente al editar sus datos', async ({ miPerfilDatosSeguridad, misDireccionesBtnEditarVerVolverGuardar}) => {

    await test.step('Click en el boton EDITAR en la card Datos de Seguridad', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardDatosSeguridad()
    })
    await test.step('Seleccion de una opción', async () => {
        await miPerfilDatosSeguridad.clickPreguntaSeguridad()
    })
    await test.step('Ingresar respuesta', async () => {
        await miPerfilDatosSeguridad.fillRespuesta()
    })
    await test.step('Click en el boton GUARDAR', async () => {
        await miPerfilDatosSeguridad.clickBotonGuardar()
    })
})
test('@Perfil @Regression (FC-TC-97) Verificar que el select Pregunta de seguridad de la card Datos de Seguridad funciona correctamente', async ({ miPerfilDatosSeguridad, misDireccionesBtnEditarVerVolverGuardar}) => {

    await test.step('Click en el boton EDITAR en la card Datos de Seguridad', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardDatosSeguridad()
    })
    await test.step('Seleccion de una opción', async () => {
        await miPerfilDatosSeguridad.clickPreguntaSeguridad()
    })
})
test('@Perfil @Regression (FC-TC-98) Verificar que las categorias de la card Intereces funciona correctamente', async ({ miPerfil_Intereses, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton EDITAR en la card Intereses', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardIntereses()
    })
    await test.step('Click en cada categoria y el checkbox Seleccionar todas', async () => {
        await miPerfil_Intereses.clickIntereses()
    })
    await test.step('Repetir nuevamente los click en cada categoria y el checkbox Seleccionar todas', async () => {
        await miPerfil_Intereses.clickIntereses()
    })
    await test.step('Click en el boton GUARDAR', async () => {
        await miPerfil_Intereses.clickBotonGuardar()
    })
})
test('@Perfil @Regression (FC-TC-99) Verificar que los campos email y contrasenia funcionan correctamente en la card Actualizar Tu Email', async ({ miPerfilActualizarTuEmail, misDireccionesBtnEditarVerVolverGuardar }) => {

    await test.step('Click en el boton EDITAR en la card Actualizar Tu Email', async () => {
        await misDireccionesBtnEditarVerVolverGuardar.clickCardActualizarTuEmail()
    })
    await test.step('Ingresar un correo', async () => {
        await miPerfilActualizarTuEmail.fillEmail()
    })
    await test.step('Ingresar la cantrasenia actual', async () => {
        await miPerfilActualizarTuEmail.fillContrasenias()
    })
})

test.afterEach(async ({ cerrarSesion }) => {

    await test.step('Click en el boton Cerrar Sesion', async () => {
        await cerrarSesion.clickCerrarSesion()
    })
})
