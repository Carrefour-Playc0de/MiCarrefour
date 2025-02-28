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
import { SelectProvCapitalFederalPartidos } from '../pageObjectModel/MiPerfil/SelectProvCapitalFederalPartidos'
import { SelectProvCatamarcaPartidos } from '../pageObjectModel/MiPerfil/SelectProvCatamarcaPartidos'
import { SelectProvChacoPartidos } from '../pageObjectModel/MiPerfil/SelectProvChacoPartidos'
import { SelectProvChubutPartidos } from '../pageObjectModel/MiPerfil/SelectProvChubutPartidos'
import { SelectProvCordobaPartidos } from '../pageObjectModel/MiPerfil/SelectProvCordobaPartidos'
import { SelectProvCorrientesPartidos } from '../pageObjectModel/MiPerfil/SelectProvCorrientesPartidos'
import { SelectProvEntreRiosPartidos } from '../pageObjectModel/MiPerfil/SelectProvEntreRiosPartidos'
import { SelectProvFormosaPartidos } from '../pageObjectModel/MiPerfil/SelectProvFormosaPartidos'
import { SelectProvIslasMalvinasPartidos } from '../pageObjectModel/MiPerfil/SelectProvIslasMalvinasPartidos'
import { SelectProvJujuyPartidos } from '../pageObjectModel/MiPerfil/SelectProvJujuyPartidos'
import { SelectProvLaPampaPartidos } from '../pageObjectModel/MiPerfil/SelectProvLaPampaPartidos'
import { SelectProvLaRiojaPartidos } from '../pageObjectModel/MiPerfil/SelectProvLaRiojaPartidos'
import { SelectProvMendozaPartidos } from '../pageObjectModel/MiPerfil/SelectProvMendozaPartidos'
import { SelectProvMisionesPartidos } from '../pageObjectModel/MiPerfil/SelectProvMisionesPartidos'
import { SelectProvNeuquenPartidos } from '../pageObjectModel/MiPerfil/SelectProvNeuquenPartidos'
import { SelectProvRioNegroPartidos } from '../pageObjectModel/MiPerfil/SelectProvRioNegroPartidos'
import { SelectProvSaltaPartidos } from '../pageObjectModel/MiPerfil/SelectProvSaltaPartidos'
import { SelectProvSanJuanPartidos } from '../pageObjectModel/MiPerfil/SelectProvSanJuanPartidos'
import { SelectProvSanLuisPartidos } from '../pageObjectModel/MiPerfil/SelectProvSanLuisPartidos'
import { SelectProvSantaCruzPartidos } from '../pageObjectModel/MiPerfil/SelectProvSantaCruzPartidos'
import { SelectProvSantaFePartidos } from '../pageObjectModel/MiPerfil/SelectProvSantaFePartidos'
import { SelectProvSantiagoDelEsteroPartidos } from '../pageObjectModel/MiPerfil/SelectProvSantiagoDelEsteroPartidos'
import { SelectProvTierraDelFuegoPartidos } from '../pageObjectModel/MiPerfil/SelectProvTierraDelFuegoPartidos'
import { SelectProvTucumanPartidos } from '../pageObjectModel/MiPerfil/SelectProvTucumanPartidos'
import {
    MiPerfilEditarMisDireccionesResponsable
} from '../pageObjectModel/MiPerfil/MiPerfilEditarMisDireccionesResponsable'
import {
    MiPerfilEditarMisDireccionesAgregarDirecRButtonNo
} from '../pageObjectModel/MiPerfil/MiPerfilEditarMisDireccionesAgregarDirecRButtonNo'
import { MisDireccionesSelectTipoDomicilio } from '../pageObjectModel/MiPerfil/MisDireccionesSelectTipoDomicilio'
import { InicioBotonSalir } from '../pageObjectModel/Inicio/InicioBotonSalir'
import { InicioSlideDerechoIzquierdo } from '../pageObjectModel/Inicio/InicioSlideDerechoIzquierdo'
import { InicioLinkTarjetaCarrefour } from '../pageObjectModel/Inicio/InicioLinkTarjetaCarrefour'
import { InicioLinkPromociones } from '../pageObjectModel/Inicio/InicioLinkPromociones'
import { InicioLoginCarrefourComAr } from '../pageObjectModel/Inicio/InicioLoginCarrefourComAr'
import { InicioLinkPanelCarrefour } from '../pageObjectModel/Inicio/InicioLinkPanelCarrefour'
import { InicioLinkContacto } from '../pageObjectModel/Inicio/InicioLinkContacto'
import { InicioLinkPreguntasFrecuentes } from '../pageObjectModel/Inicio/InicioLinkPreguntasFrecuentes'
import {
    MiPerfilContraseniaCamposContrasenias
} from '../pageObjectModel/MiPerfil/Contrasenia/MiPerfilContraseniaCamposContrasenias'
import {
    MiPerfilContraseniaCaracteresInvalidos
} from '../pageObjectModel/MiPerfil/Contrasenia/MiPerfilContraseniaCaracteresInvalidos'
import {
    MiPerfilContraseniaNewPassNoCoinciden
} from '../pageObjectModel/MiPerfil/Contrasenia/MiPerfilContraseniaNewPassNoCoinciden'
import { MiPerfilDatosSeguridad } from '../pageObjectModel/MiPerfil/DatosSeguridad/MiPerfilDatosSeguridad'
import { MiPerfil_Intereses } from '../pageObjectModel/MiPerfil/Intereses/MiPerfil_Intereses'
import { MiPerfilActualizarTuEmail } from '../pageObjectModel/MiPerfil/ActualizarTuEmail/MiPerfilActualizarTuEmail'
import { MiHogarAdicionalesDelGrupo } from '../pageObjectModel/MiHogar/MiHogarAdicionalesDelGrupo'
import { MiHogar } from '../pageObjectModel/MiHogar/MiHogar'
import { MisNotificaciones } from '../pageObjectModel/MisNotificaciones/MisNotificaciones'
import { MisConsumos } from '../pageObjectModel/MisConsumos/MisConsumos'
import { MisCupones } from '../pageObjectModel/MisCupones/MisCupones'
import { MisCuponesComprarTickets } from '../pageObjectModel/MisCupones/MisCuponesComprarTickets'
import { MisCuponesBotonTutorial } from '../pageObjectModel/MisCupones/MisCuponesBotonTutorial'
import { MisCuponesBotonVerLegales } from '../pageObjectModel/MisCupones/MisCuponesBotonVerLegales'
import { CompraTuTicketCompra } from '../pageObjectModel/CompraTuTicketCompra/CompraTuTicketCompra'
import {
    CompraTuTicketCompraBotonIrInicio
} from '../pageObjectModel/CompraTuTicketCompra/CompraTuTicketCompraBotonIrInicio'
import {
    CompraTuTicketCompraBotonTutorial
} from '../pageObjectModel/CompraTuTicketCompra/CompraTuTicketCompraBotonTutorial'
import {
    CompraTuTicketCompraBotonVerLegales
} from '../pageObjectModel/CompraTuTicketCompra/CompraTuTicketCompraBotonVerLegales'


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
    selectProvCapitalFederalPartidos: SelectProvCapitalFederalPartidos
    selectProvCatamarcaPartidos: SelectProvCatamarcaPartidos
    selectProvChacoPartidos: SelectProvChacoPartidos
    selectProvChubutPartidos: SelectProvChubutPartidos
    selectProvCordobaPartidos: SelectProvCordobaPartidos
    selectProvCorrientesPartidos: SelectProvCorrientesPartidos
    selectProvEntreRiosPartidos: SelectProvEntreRiosPartidos
    selectProvFormosaPartidos: SelectProvFormosaPartidos
    selectProvIslasMalvinasPartidos: SelectProvIslasMalvinasPartidos
    selectProvJujuyPartidos: SelectProvJujuyPartidos
    selectProvLaPampaPartidos: SelectProvLaPampaPartidos
    selectProvLaRiojaPartidos: SelectProvLaRiojaPartidos
    selectProvMendozaPartidos: SelectProvMendozaPartidos
    selectProvMisionesPartidos: SelectProvMisionesPartidos
    selectProvNeuquenPartidos: SelectProvNeuquenPartidos
    selectProvRioNegroPartidos: SelectProvRioNegroPartidos
    selectProvSaltaPartidos: SelectProvSaltaPartidos
    selectProvSanJuanPartidos: SelectProvSanJuanPartidos
    selectProvSanLuisPartidos: SelectProvSanLuisPartidos
    selectProvSantaCruzPartidos: SelectProvSantaCruzPartidos
    selectProvSantaFePartidos: SelectProvSantaFePartidos
    selectProvSantiagoDelEsteroPartidos: SelectProvSantiagoDelEsteroPartidos
    selectProvTierraDelFuegoPartidos: SelectProvTierraDelFuegoPartidos
    selectProvTucumanPartidos: SelectProvTucumanPartidos
    miPerfilEditarMisDireccionesResponsable: MiPerfilEditarMisDireccionesResponsable
    miPerfilEditarMisDireccionesAgregarDirecRButtonNo: MiPerfilEditarMisDireccionesAgregarDirecRButtonNo
    misDireccionesSelectTipoDomicilio: MisDireccionesSelectTipoDomicilio
    inicioBotonSalir: InicioBotonSalir
    inicioSlideDerechoIzquierdo: InicioSlideDerechoIzquierdo
    inicioLinkTarjetaCarrefour: InicioLinkTarjetaCarrefour
    inicioLinkPromociones: InicioLinkPromociones
    inicioLoginCarrefourComAr: InicioLoginCarrefourComAr
    inicioLinkPanelCarrefour: InicioLinkPanelCarrefour
    inicioLinkContacto: InicioLinkContacto
    inicioLinkPreguntasFrecuentes: InicioLinkPreguntasFrecuentes
    miPerfilContraseniaCamposContrasenias: MiPerfilContraseniaCamposContrasenias
    miPerfilContraseniaCaracteresInvalidos: MiPerfilContraseniaCaracteresInvalidos
    miPerfilContraseniaNewPassNoCoinciden: MiPerfilContraseniaNewPassNoCoinciden
    miPerfilDatosSeguridad: MiPerfilDatosSeguridad
    miPerfil_Intereses: MiPerfil_Intereses
    miPerfilActualizarTuEmail: MiPerfilActualizarTuEmail
    miHogar: MiHogar
    miHogarAdicionalesDelGrupo: MiHogarAdicionalesDelGrupo
    misNotificaciones: MisNotificaciones
    misConsumos: MisConsumos
    misCupones: MisCupones
    misCuponesComprarTickets: MisCuponesComprarTickets
    misCuponesBotonTutorial: MisCuponesBotonTutorial
    misCuponesBotonVerLegales: MisCuponesBotonVerLegales
    compraTuTicketCompra: CompraTuTicketCompra
    compraTuTicketCompraBotonIrInicio: CompraTuTicketCompraBotonIrInicio
    compraTuTicketCompraBotonTutorial: CompraTuTicketCompraBotonTutorial
    compraTuTicketCompraBotonVerLegales: CompraTuTicketCompraBotonVerLegales

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },
    cerrarSesion: async ({ page, context }, use) => {
        await use(new CerrarSesion(page, context, environment))
    },






    // MI HOGAR
    miHogar: async ({ page, context }, use) => {
        await use(new MiHogar(page, context, environment))
    },
    miHogarAdicionalesDelGrupo: async ({ page, context }, use) => {
        await use(new MiHogarAdicionalesDelGrupo(page, context, environment))
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
    miPerfilEditarMisDireccionesResponsable: async ({ page, context }, use) => {
        await use(new MiPerfilEditarMisDireccionesResponsable(page, context, environment))
    },
    // Select Provincias y sus Departamentos
    selectProvBuenosAiresPartidos: async ({ page, context }, use) => {
        await use(new SelectProvBuenosAiresPartidos(page, context, environment))
    },
    selectProvCapitalFederalPartidos: async ({ page, context }, use) => {
        await use(new SelectProvCapitalFederalPartidos(page, context, environment))
    },
    selectProvCatamarcaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvCatamarcaPartidos(page, context, environment))
    },
    selectProvChacoPartidos: async ({ page, context }, use) => {
        await use(new SelectProvChacoPartidos(page, context, environment))
    },
    selectProvChubutPartidos: async ({ page, context }, use) => {
        await use(new SelectProvChubutPartidos(page, context, environment))
    },
    selectProvCordobaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvCordobaPartidos(page, context, environment))
    },
    selectProvCorrientesPartidos: async ({ page, context }, use) => {
        await use(new SelectProvCorrientesPartidos(page, context, environment))
    },
    selectProvEntreRiosPartidos: async ({ page, context }, use) => {
        await use(new SelectProvEntreRiosPartidos(page, context, environment))
    },
    selectProvFormosaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvFormosaPartidos(page, context, environment))
    },
    selectProvIslasMalvinasPartidos: async ({ page, context }, use) => {
        await use(new SelectProvIslasMalvinasPartidos(page, context, environment))
    },
    selectProvJujuyPartidos: async ({ page, context }, use) => {
        await use(new SelectProvJujuyPartidos(page, context, environment))
    },
    selectProvLaPampaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvLaPampaPartidos(page, context, environment))
    },
    selectProvLaRiojaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvLaRiojaPartidos(page, context, environment))
    },
    selectProvMendozaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvMendozaPartidos(page, context, environment))
    },
    selectProvMisionesPartidos: async ({ page, context }, use) => {
        await use(new SelectProvMisionesPartidos(page, context, environment))
    },
    selectProvNeuquenPartidos: async ({ page, context }, use) => {
        await use(new SelectProvNeuquenPartidos(page, context, environment))
    },
    selectProvRioNegroPartidos: async ({ page, context }, use) => {
        await use(new SelectProvRioNegroPartidos(page, context, environment))
    },
    selectProvSaltaPartidos: async ({ page, context }, use) => {
        await use(new SelectProvSaltaPartidos(page, context, environment))
    },
    selectProvSanJuanPartidos: async ({ page, context }, use) => {
        await use(new SelectProvSanJuanPartidos(page, context, environment))
    },
    selectProvSanLuisPartidos: async ({ page, context }, use) => {
        await use(new SelectProvSanLuisPartidos(page, context, environment))
    },
    selectProvSantaCruzPartidos: async ({ page, context }, use) => {
        await use(new SelectProvSantaCruzPartidos(page, context, environment))
    },
    selectProvSantaFePartidos: async ({ page, context }, use) => {
        await use(new SelectProvSantaFePartidos(page, context, environment))
    },
    selectProvSantiagoDelEsteroPartidos: async ({ page, context }, use) => {
        await use(new SelectProvSantiagoDelEsteroPartidos(page, context, environment))
    },
    selectProvTierraDelFuegoPartidos: async ({ page, context }, use) => {
        await use(new SelectProvTierraDelFuegoPartidos(page, context, environment))
    },
    selectProvTucumanPartidos: async ({ page, context }, use) => {
        await use(new SelectProvTucumanPartidos(page, context, environment))
    },
    misDireccionesSelectTipoDomicilio: async ({ page, context }, use) => {
        await use(new MisDireccionesSelectTipoDomicilio(page, context, environment))
    },
    miPerfilContraseniaCamposContrasenias: async ({ page, context }, use) => {
        await use(new MiPerfilContraseniaCamposContrasenias(page, context, environment))
    },
    miPerfilContraseniaCaracteresInvalidos: async ({ page, context }, use) => {
        await use(new MiPerfilContraseniaCaracteresInvalidos(page, context, environment))
    },
    miPerfilContraseniaNewPassNoCoinciden: async ({ page, context }, use) => {
        await use(new MiPerfilContraseniaNewPassNoCoinciden(page, context, environment))
    },
    miPerfilDatosSeguridad: async ({ page, context }, use) => {
        await use(new MiPerfilDatosSeguridad(page, context, environment))
    },
    miPerfil_Intereses: async ({ page, context }, use) => {
        await use(new MiPerfil_Intereses(page, context, environment))
    },
    miPerfilActualizarTuEmail: async ({ page, context }, use) => {
        await use(new MiPerfilActualizarTuEmail(page, context, environment))
    },
    miPerfilEditarMisDireccionesAgregarDirecRButtonNo: async ({ page, context }, use) => {
        await use(new MiPerfilEditarMisDireccionesAgregarDirecRButtonNo(page, context, environment))
    },
    // Sección Inicio
    inicioBotonSalir: async ({ page, context }, use) => {
        await use(new InicioBotonSalir(page, context, environment))
    },
    inicioSlideDerechoIzquierdo: async ({ page, context }, use) => {
        await use(new InicioSlideDerechoIzquierdo(page, context, environment))
    },
    inicioLinkTarjetaCarrefour: async ({ page, context }, use) => {
        await use(new InicioLinkTarjetaCarrefour(page, context, environment))
    },
    inicioLinkPromociones: async ({ page, context }, use) => {
        await use(new InicioLinkPromociones(page, context, environment))
    },
    inicioLoginCarrefourComAr: async ({ page, context }, use) => {
        await use(new InicioLoginCarrefourComAr(page, context, environment))
    },
    inicioLinkPanelCarrefour: async ({ page, context }, use) => {
        await use(new InicioLinkPanelCarrefour(page, context, environment))
    },
    inicioLinkContacto: async ({ page, context }, use) => {
        await use(new InicioLinkContacto(page, context, environment))
    },
    inicioLinkPreguntasFrecuentes: async ({ page, context }, use) => {
        await use(new InicioLinkPreguntasFrecuentes(page, context, environment))
    },
    // MIS NOTIFICACIONES
    misNotificaciones: async ({ page, context }, use) => {
        await use(new MisNotificaciones(page, context, environment))
    },
    // MIS CUNSUMOS
    misConsumos: async ({ page, context }, use) => {
        await use(new MisConsumos(page, context, environment))
    },
    // MIS CUPONES
    misCupones: async ({ page, context }, use) => {
        await use(new MisCupones(page, context, environment))
    },
    misCuponesComprarTickets: async ({ page, context }, use) => {
        await use(new MisCuponesComprarTickets(page, context, environment))
    },
    misCuponesBotonTutorial: async ({ page, context }, use) => {
        await use(new MisCuponesBotonTutorial(page, context, environment))
    },
    misCuponesBotonVerLegales: async ({ page, context }, use) => {
        await use(new MisCuponesBotonVerLegales(page, context, environment))
    },
    // COMPRA TU TICKET DE COMPRA
    compraTuTicketCompra: async ({ page, context }, use) => {
        await use(new CompraTuTicketCompra(page, context, environment))
    },
    compraTuTicketCompraBotonIrInicio: async ({ page, context }, use) => {
        await use(new CompraTuTicketCompraBotonIrInicio(page, context, environment))
    },
    compraTuTicketCompraBotonTutorial: async ({ page, context }, use) => {
        await use(new CompraTuTicketCompraBotonTutorial(page, context, environment))
    },
    compraTuTicketCompraBotonVerLegales: async ({ page, context }, use) => {
        await use(new CompraTuTicketCompraBotonVerLegales(page, context, environment))
    },

})

export default test
