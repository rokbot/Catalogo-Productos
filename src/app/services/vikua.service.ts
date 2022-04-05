import { Injectable } from "@angular/core";

@Injectable()
export class VikuaService{


    private projects: Project[] = [
        {
          nombre: "Tablero de monitoreo de servicios públicos e incidencias a nivel metropolitano - Barranquilla",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento del estado y desempeño de los distintos servicios públicos, así como de las distintas incidencias que estos pueden presentar, a nivel metropolitano.",
          img: "assets/images/barranquilla.png",
          indicador1: "Accidentes Totales",
          rsp_indicador1:"18.066",
          indicador2: "Edad promedio de la Flota",
          icono1 : "fas fa-car",
          rsp_indicador2: "2010",
          icono2 : "fas fa-clock",
          indicador3: "Día con más accidentes",
          rsp_indicador3: "Viernes",
          icono3 : "fas fa-route",
          indicador4: "Accidente con mayor mortalidad",
          rsp_indicador4: "Atropello",
          icono4: "fas fa-car-burst",
          objetivos: "<ul> <li>Disponer de información relacionada a accidentes viales registrados en la ciudad. </li> <li> Disponer de datos relacionados a las empresas prestadoras del servicio de transporte público urbano y sus flotas asociadas. </li> <li>Visualizar información e indicadores relacionados a la calidad del aire en la ciudad. </li> <li> Realizar cruces de los datos obtenidos para llegar a análisis y conclusiones relevantes para el tomador de decisiones. </li> </ul>",
          indicadores: "<ul> <li> Cantidad y georreferenciación de accidentes totales registrados.</li> <li>Desglose de accidentes registrados por día de la semana y por vía donde ocurrió.                   </li> Día de la semana con mayor cantidad de accidentes. <li>Periodo del día con mayor cantidad de accidentes. </li> <li>Clasificación de accidentes por tipo. </li> <li> Tipo de accidente con mayor tasa de mortalidad.</li> <li> Hora de registro de los accidentes.</li> <li>Tiempo de retraso y conductores afectados a causa de los accidentes registrados. </li> <li>Cantidad de empresas privadas que prestan servicios de transporte. </li> <li>Cantidad y características de unidades de transporte público que funcionan en la ciudad por empresa de transporte. </li> <li>Promedio de antigüedad de las unidades. </li> <li>Cantidad de particulas de distintos compuestos en el aire por fecha y por estación de medido (PM10, PM25, Ozono, Dióxido de Nitrógeno, Monóxido de Carbono, Dióxido de Azufre). </li> <li>Comparación de la calidad del aire de Barranquilla con indicadores mínimos internacionales. </li> <li>Promedio anual, mensual, semanal y diario de partículas en el aire.</li> </ul>",
          fuente: "Se utilizaron varias fuentes de información que permitiesen vislumbrar la realidad urbana: <ul> <li> En cuanto a la información referente a los accicidentes viales fue proveída por la plataforma Waze gracias a acuerdos alcanzados con la municipalidad de Barranquilla. </li> <li> Por otro lado, la información relacionada a las empresas de transporte fue provista directamente por las dos organizaciones que supervisan el transporte superficial: Transmetro y la Subdirección de Transporte del Área Metropolitana de Barranquilla. </li> <li> En último lugar, el ente encargado de asuntos ambientales, Barranquilla Verde, proveyó la información referente a la calidad del aire en la ciudad. </li> </ul>",
          solucion: "https://vikuabarranquilla2020.herokuapp.com/"
        },
        {
          nombre: "GDC Caracas Digital Covid-19",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento de casos activos y nuevos casos (registrados diariamente) de COVID-19 segmentando la información por entidad federal del territorio venezolano ",
          img: "assets/images/covidgdc.jpg",
          indicador1: "Casos Confirmados",
          rsp_indicador1:"520.708",
          indicador2: "Casos recuperados",
          icono1 : "fas fa-syringe",
          rsp_indicador2: "513.432",
          icono2 : "fas fa-virus-covid-slash",
          indicador3: "Casos Mortales",
          rsp_indicador3: "5.685",
          icono3 : "fas fa-virus-covid",
          indicador4: "Casos Activos",
          rsp_indicador4: "1.591",
          icono4: "fas fa-vial-virus",
          objetivos: "Disponer de estadísticas generadas a partir de información oficial para la toma de decisiones con base en medidas objetivas (indicadores cuantitativos).",
          indicadores: "<ul> <li>Total de casos confirmados </li> <li>Casos recuperados </li> <li>Casos mortales </li> <li>Tasa de recuperación </li> <li>Casos activos (Nacionales)</li> <li>Tasa de mortalidad  </li> <li>Días consecutivos con casos confirmados activos  </li> </ul>",
          fuente: "Realizado el 20/08/2021 con base en las API's de las estadísticas oficiales del COVID-19 en Venezuela en la Plataforma Patria: https://covid19.patria.org.ve/api/v1/summary https://covid19.patria.org.ve/api/v1/timeline",
          solucion: "https://datastudio.google.com/embed/u/0/reporting/e05851cc-eadd-46db-9d00-4cbe47b63493/page/EI4XC"
        },

        {
            nombre: "Reporte de triaje y captación Caracas Digital",
            requerimiento: "Desarrollar una herramienta que permitiese el registro de personal a ingresar al programa de reciclaje estadal, bajo las funciones de reciclador, operadores de área, o brigadista de mantenimiento.",
            img: "assets/images/triaje.jpg",
            indicador1: "Total de Personas censadas",
            rsp_indicador1:"735",
            indicador2: "Total de personas captadas",
            icono1 : "fas fa-people-group",
            rsp_indicador2: "544",
            icono2 : "fas-solid fa-people",
            indicador3: "Horas de capacitación invertidas",
            rsp_indicador3: "16",
            icono3 : "fas fa-hourglass",
            indicador4: "Personal Capacitado",
            rsp_indicador4: "83%",
            icono4: "fas fa-person-circle-check",
            objetivos: "Disponer de datos básicos del personal que conforma la nómina del programa, para gestionar efectivamente ayudas sociales, subsidios, y jornadas de salud destinadas a los mismos.",
            indicadores: "<ul> <li>Cantidad personas abordadas (registradas parcialmente)**</li> <li>Cantidad de personas captadas (registro completo = forma parte del programa)**</li> <li>Cantidad de personas asignadas por tarea específica**</li> <li>Cantidad de personas por grupos de edad</li> <li>Cantidad de personas por sexo</li> <li>Registro de patologías o condiciones de salud</li> <li>Condiciones de vivienda del personal abordado y captado</li> <b> Nota:  ** (Se dispone de datos básicos de las personas tal como nombre completo, cédula, fotografía, datos bancarios, entre otros datos necesarios para la operación) </b> </ul>",
            fuente: "Al no disponer de la información, se planteó hacer un levantamiento en campo haciendo uso de FULCRUM APP. <br> Sobre la herramienta de recolección de datos en campo utilizada (FULCRUM APP): FULCRUM APP permite desarrollar herramientas de recolección de datos en campo a partir de una interfaz de programación drag and drop, facilitando así la creación de aplicación sin necesidad de escribir código; dichas aplicaciones se configuran para uso exclusivo de los usuarios que sean definidos por el desarrollador.",
            solucion: "https://datastudio.google.com/embed/reporting/b2fd237a-98ac-4744-89f3-666d3b03666a/page/p_d7apagg0lc",
          },
        {
          nombre: "Transporte El Salvador",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento del estado y desempeño de las unidades de transporte que prestaban servicio al personal de salud pública a nivel nacional en tiempo real",
          img: "assets/images/sansalvador.png",
          indicador1: "Dispositivo",
          rsp_indicador1:"URBO-118",
          indicador2: "Tiempo Medio de Respuesta",
          icono1 : "fas fa-bus",
          rsp_indicador2: "00:01:17",
          icono2 : "fas fa-clock",
          indicador3: "Distancia Total Recorrida",
          rsp_indicador3: "285,56 Km",
          icono3 : "fas fa-router",
          indicador4: "Batería Promedio",
          rsp_indicador4: "80%",
          icono4: "fas fa-battery-half",
          objetivos: "<ul> <li>Disponer de medidas de mantenimiento y reactivación de unidades con base en información actualizada en tiempo real</li> <li>Determinar la demanda del servicio en los distintos puntos atendidos.</li> <li>Identificar las rutas utilizadas por los diferentes conductores y sus características.</li> </ul>",
          indicadores: "<ul> <li>ID del dispositivo móvil utilizado para el seguimiento de la unidad. </li> <li>Tiempo medio de recepción de los datos en el servidor por parte del dispositivo móvil. </li> <li>Distancia total recorida por la unidad. </li> <li>Batería promedio y total durante el día del dispositivo. </li> <li>Ruta Tomada por la unidad. </li> <li>Distancia recorrida por hora por la unidad. </li> <li>Cantidad de viajes completados por la unidad. </li> <li>Tiempo en línea vs. tiempo fuera de línea del dispositivo móvil. </li> </ul>",
          fuente: "Información proveída de manera automática por el dispositivo móvil (aplicaciones móviles FULCRUM APP y sensores GPS) del conductor de la unidad.",
          solucion: "https://vigilant-knuth-0a86ca.netlify.app/",
        },

        {
          nombre: "Infomapa Turístico de atractivos (categorizados por tipo de turismo) georeferenciados. - INATUR",
          requerimiento: "Desarrollar una herramienta que pudiese mostrar ubicación exacta e información general de atractivos turísticos de las entidades federales del territorio venezolano.",
          img: "assets/images/sansalvador.png",
          indicador1: "Dispositivo",
          rsp_indicador1:"URBO-118",
          indicador2: "Tiempo Medio de Respuesta",
          icono1 : "fas fa-bus",
          rsp_indicador2: "00:01:17",
          icono2 : "fas fa-clock",
          indicador3: "Distancia Total Recorrida",
          rsp_indicador3: "285,56 Km",
          icono3 : "fas fa-router",
          indicador4: "Batería Promedio",
          rsp_indicador4: "80%",
          icono4: "fas fa-battery-half",
          objetivos: "Disponer de una fuente de información oficial que sirviese como guía de viaje a turistas y población general. Se busca priorizar la promoción de ocho estados estratégicos, por lo que se desarrolló dos tipos de mapas web, uno que posea mayor detalle para estos ocho estados, y otro más sencillo para las entidades federales restantes.",
          indicadores: "<ul> <li>ESRI StoryMaps (Aplicación web no-code) </li> <li> ESRI Web Map</li> <li> ARCGIS HUB (Sitio web no-code): Feria Internacional del Turismo 2021 </li> </ul>",
          fuente: "Información proveída por el equipo de mercadeo de la institución (INATUR)",
          solucion: "https://inatur-filven-vikua.hub.arcgis.com/?share=link",
        },

        {
          nombre: "Transporte El Salvador",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento del estado y desempeño de las unidades de transporte que prestaban servicio al personal de salud pública a nivel nacional en tiempo real",
          img: "assets/images/sansalvador.png",
          indicador1: "Dispositivo",
          rsp_indicador1:"URBO-118",
          indicador2: "Tiempo Medio de Respuesta",
          icono1 : "fas fa-bus",
          rsp_indicador2: "00:01:17",
          icono2 : "fas fa-clock",
          indicador3: "Distancia Total Recorrida",
          rsp_indicador3: "285,56 Km",
          icono3 : "fas fa-router",
          indicador4: "Batería Promedio",
          rsp_indicador4: "80%",
          icono4: "fas fa-battery-half",
          objetivos: "<ul> <li>Disponer de medidas de mantenimiento y reactivación de unidades con base en información actualizada en tiempo real</li> <li>Determinar la demanda del servicio en los distintos puntos atendidos.</li> <li>Identificar las rutas utilizadas por los diferentes conductores y sus características.</li> </ul>",
          indicadores: "<ul> <li>ID del dispositivo móvil utilizado para el seguimiento de la unidad. </li> <li>Tiempo medio de recepción de los datos en el servidor por parte del dispositivo móvil. </li> <li>Distancia total recorida por la unidad. </li> <li>Batería promedio y total durante el día del dispositivo. </li> <li>Ruta Tomada por la unidad. </li> <li>Distancia recorrida por hora por la unidad. </li> <li>Cantidad de viajes completados por la unidad. </li> <li>Tiempo en línea vs. tiempo fuera de línea del dispositivo móvil. </li> </ul>",
          fuente: "Información proveída de manera automática por el dispositivo móvil (aplicaciones móviles FULCRUM APP y sensores GPS) del conductor de la unidad.",
          solucion: "https://vigilant-knuth-0a86ca.netlify.app/",
        },
        {
          nombre: "Transporte El Salvador",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento del estado y desempeño de las unidades de transporte que prestaban servicio al personal de salud pública a nivel nacional en tiempo real",
          img: "assets/images/sansalvador.png",
          indicador1: "Dispositivo",
          rsp_indicador1:"URBO-118",
          indicador2: "Tiempo Medio de Respuesta",
          icono1 : "fas fa-bus",
          rsp_indicador2: "00:01:17",
          icono2 : "fas fa-clock",
          indicador3: "Distancia Total Recorrida",
          rsp_indicador3: "285,56 Km",
          icono3 : "fas fa-router",
          indicador4: "Batería Promedio",
          rsp_indicador4: "80%",
          icono4: "fas fa-battery-half",
          objetivos: "<ul> <li>Disponer de medidas de mantenimiento y reactivación de unidades con base en información actualizada en tiempo real</li> <li>Determinar la demanda del servicio en los distintos puntos atendidos.</li> <li>Identificar las rutas utilizadas por los diferentes conductores y sus características.</li> </ul>",
          indicadores: "<ul> <li>ID del dispositivo móvil utilizado para el seguimiento de la unidad. </li> <li>Tiempo medio de recepción de los datos en el servidor por parte del dispositivo móvil. </li> <li>Distancia total recorida por la unidad. </li> <li>Batería promedio y total durante el día del dispositivo. </li> <li>Ruta Tomada por la unidad. </li> <li>Distancia recorrida por hora por la unidad. </li> <li>Cantidad de viajes completados por la unidad. </li> <li>Tiempo en línea vs. tiempo fuera de línea del dispositivo móvil. </li> </ul>",
          fuente: "Información proveída de manera automática por el dispositivo móvil (aplicaciones móviles FULCRUM APP y sensores GPS) del conductor de la unidad.",
          solucion: "https://vigilant-knuth-0a86ca.netlify.app/",
        },


        {
          nombre: "Transporte El Salvador",
          requerimiento: "Desarrollar una herramienta que permitiese hacer seguimiento del estado y desempeño de las unidades de transporte que prestaban servicio al personal de salud pública a nivel nacional en tiempo real",
          img: "assets/images/sansalvador.png",
          indicador1: "Dispositivo",
          rsp_indicador1:"URBO-118",
          indicador2: "Tiempo Medio de Respuesta",
          icono1 : "fas fa-bus",
          rsp_indicador2: "00:01:17",
          icono2 : "fas fa-clock",
          indicador3: "Distancia Total Recorrida",
          rsp_indicador3: "285,56 Km",
          icono3 : "fas fa-router",
          indicador4: "Batería Promedio",
          rsp_indicador4: "80%",
          icono4: "fas fa-battery-half",
          objetivos: "<ul> <li>Disponer de medidas de mantenimiento y reactivación de unidades con base en información actualizada en tiempo real</li> <li>Determinar la demanda del servicio en los distintos puntos atendidos.</li> <li>Identificar las rutas utilizadas por los diferentes conductores y sus características.</li> </ul>",
          indicadores: "<ul> <li>ID del dispositivo móvil utilizado para el seguimiento de la unidad. </li> <li>Tiempo medio de recepción de los datos en el servidor por parte del dispositivo móvil. </li> <li>Distancia total recorida por la unidad. </li> <li>Batería promedio y total durante el día del dispositivo. </li> <li>Ruta Tomada por la unidad. </li> <li>Distancia recorrida por hora por la unidad. </li> <li>Cantidad de viajes completados por la unidad. </li> <li>Tiempo en línea vs. tiempo fuera de línea del dispositivo móvil. </li> </ul>",
          fuente: "Información proveída de manera automática por el dispositivo móvil (aplicaciones móviles FULCRUM APP y sensores GPS) del conductor de la unidad.",
          solucion: "https://vigilant-knuth-0a86ca.netlify.app/",
        }
      ];

    constructor(){
        console.log('Servicio listo');
    }

    getProjects(){
        return this.projects;
    }

    getProject(idx: string){
        return this.projects[idx];
    }
}

export interface Project{
    nombre: string;
    requerimiento: string;
    img: string;
    indicador1: string;
    rsp_indicador1: string;
    icono1: string;
    indicador2: string;
    rsp_indicador2: string;
    icono2: string;
    indicador3: string;
    rsp_indicador3: string;
    icono3: string;
    indicador4: string;
    rsp_indicador4: string;
    icono4:string;
    objetivos: string;
    indicadores: string;
    fuente: string;
    solucion: string;

};



