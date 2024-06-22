import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/Login/LoginPage'
import { MiPerfilEditarDatosPersonales } from '../pageObjectModel/MiPerfil/MiPerfilEditarDatosPersonales'
import { MiPerfil } from '../pageObjectModel/MiPerfil/MiPerfil'
import {
    MiPerfilEditarMisDireccionesRadioButtonSi
} from '../pageObjectModel/MiPerfil/MiPerfilEditarMisDireccionesRadioButtonSi'
import { CerrarSesion } from '../pageObjectModel/Login/CerrarSesion'
import { SelectProvBuenosAiresPartidos } from '../pageObjectModel/MiPerfil/SelectProvBuenosAiresPartidos'
import {
    MiPerfilEditarMisDireccionesRadioButtonNo
} from '../pageObjectModel/MiPerfil/MiPerfilEditarMisDireccionesRadioButtonNo'
import {
    MisDireccionesBtnEditarVerVolverGuardar
} from '../pageObjectModel/MiPerfil/MisDireccionesBtnEditarVerVolverGuardar'


const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    cerrarSesion: CerrarSesion
    miPerfil: MiPerfil
    miPerfilEditarDatosPersonales: MiPerfilEditarDatosPersonales
    misDireccionesBtnEditarVerVolverGuardar: MisDireccionesBtnEditarVerVolverGuardar
    miPerfilEditarMisDireccionesRadioButtonSi: MiPerfilEditarMisDireccionesRadioButtonSi
    miPerfilEditarMisDireccionesRadioButtonNo: MiPerfilEditarMisDireccionesRadioButtonNo
    selectProvBuenosAiresPartidos: SelectProvBuenosAiresPartidos


}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },
    cerrarSesion: async ({ page, context }, use) => {
        await use(new CerrarSesion(page, context, environment))
    },

    selectProvBuenosAiresPartidos: async ({ page, context }, use) => {
        await use(new SelectProvBuenosAiresPartidos(page, context, environment))
    },




    // MI PERFIL
    miPerfil: async ({ page, context }, use) => {
        await use(new MiPerfil(page, context, environment))
    },
    misDireccionesBtnEditarVerVolverGuardar: async ({ page, context }, use) => {
        await use(new MisDireccionesBtnEditarVerVolverGuardar(page, context, environment))
    },
    miPerfilEditarDatosPersonales: async ({ page, context }, use) => {
        await use(new MiPerfilEditarDatosPersonales(page, context, environment))
    },
    miPerfilEditarMisDireccionesRadioButtonSi: async ({ page, context }, use) => {
        await use(new MiPerfilEditarMisDireccionesRadioButtonSi(page, context, environment))
    },
    miPerfilEditarMisDireccionesRadioButtonNo: async ({ page, context }, use) => {
        await use(new MiPerfilEditarMisDireccionesRadioButtonNo(page, context, environment))
    },


})

export default test
