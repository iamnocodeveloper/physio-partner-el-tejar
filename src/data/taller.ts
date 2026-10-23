export interface HorarioDia {
  dias: number[]; // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  nombreDias: string;
  apertura: string; // "07:30"
  cierre: string;   // "19:30"
  cerrado?: boolean;
  nota?: string;
}

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  precio: number;
  precioTexto: string;
  icono: string;
  mensajeWhatsApp: string;
}

export interface Testimonio {
  autor: string;
  iniciales: string;
  tipo: string;
  texto: string;
  estrellas: number;
}

export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

export interface MiembroEquipo {
  rol: string;
  especialidad: string;
  descripcion: string;
  icono: string;
}

export interface PasoProceso {
  numero: string;
  titulo: string;
  descripcion: string;
  destacado: string;
  icono: string;
}

export interface PilarConfianza {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

export interface DatosClinica {
  nombre: string;
  razonSocial: string;
  subtitulo: string;
  tagline: string;
  descripcion: string;
  direccion: string;
  direccionCorta: string;
  ciudad: string;
  provincia: string;
  pais: string;
  codigoPostal: string;
  referencia: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  telefono: string;
  telefonoLlamada: string;
  telefonoFijo: string;
  whatsapp: string;
  whatsappMensajeDefault: string;
  email: string;
  dominio: string;
  zonaHoraria: string;
  googleMapsUrl: string;
  ratingGoogle: number;
  totalOpiniones: number;
  horarios: HorarioDia[];
  pilaresConfianza: PilarConfianza[];
  servicios: Servicio[];
  pasosProceso: PasoProceso[];
  equipo: MiembroEquipo[];
  testimonios: Testimonio[];
  faq: PreguntaFrecuente[];
  redes: RedSocial[];
}

export const clinicaData: DatosClinica = {
  nombre: "PHYSIO PARTNER – EL TEJAR",
  razonSocial: "Physio Partner El Tejar Cía. Ltda.",
  subtitulo: "El Tejar · Cuenca",
  tagline: "Clínica de Fisioterapia Especializada · Cuenca, Ecuador",
  descripcion: "En PHYSIO PARTNER – EL TEJAR te acompañamos en tu recuperación con fisioterapia especializada, valoración personalizada y tratamientos adaptados a tus necesidades biomecánicas y funcionales en Cuenca.",
  direccion: "Av. del Tejar, 010111 Cuenca, Ecuador",
  direccionCorta: "Av. del Tejar, Cuenca",
  ciudad: "Cuenca",
  provincia: "Azuay",
  pais: "Ecuador",
  codigoPostal: "010111",
  referencia: "Próximo al cruce con Av. Ordóñez Lasso. Acceso a nivel de calle con rampa habilitada para pacientes con movilidad reducida.",
  coordenadas: {
    lat: -2.89432,
    lng: -79.03254
  },
  telefono: "+593 99 000 0000",
  telefonoLlamada: "+593990000000",
  telefonoFijo: "(07) 400 0000",
  whatsapp: "593990000000",
  whatsappMensajeDefault: "Hola Physio Partner El Tejar, deseo agendar una cita de evaluación",
  email: "contacto@physiopartner.ec",
  dominio: "https://physiopartnereltejar.ec",
  zonaHoraria: "America/Guayaquil",
  googleMapsUrl: "https://maps.google.com/?q=Av.+del+Tejar,+Cuenca,+Ecuador",
  ratingGoogle: 4.9,
  totalOpiniones: 128,

  horarios: [
    {
      dias: [1, 2, 3, 4, 5],
      nombreDias: "Lunes a Viernes",
      apertura: "07:30",
      cierre: "19:30"
    },
    {
      dias: [6],
      nombreDias: "Sábados",
      apertura: "08:00",
      cierre: "13:00"
    },
    {
      dias: [0],
      nombreDias: "Domingos y Feriados",
      apertura: "00:00",
      cierre: "00:00",
      cerrado: true,
      nota: "Previa Cita Prioritaria"
    }
  ],

  pilaresConfianza: [
    {
      titulo: "Atención personalizada",
      descripcion: "Enfoque individualizado en cada sesión y constante valoración funcional.",
      icono: "person_check"
    },
    {
      titulo: "Profesionales especializados",
      descripcion: "Fisioterapeutas con amplia formación en biomecánica y readaptación física.",
      icono: "medical_services"
    },
    {
      titulo: "Tratamientos adaptados",
      descripcion: "Planes progresivos ajustados estrictamente al nivel de evolución del paciente.",
      icono: "tune"
    },
    {
      titulo: "Acompañamiento continuo",
      descripcion: "Seguimiento cercano en clínica y pautas claras de autocuidado domiciliario.",
      icono: "partner_exchange"
    }
  ],

  servicios: [
    {
      id: "musculoesqueletica",
      titulo: "Fisioterapia musculoesquelética",
      descripcion: "Evaluación clínica precisa y manejo biomecánico de lesiones musculares, desgarros, distensiones articulares y tendinopatías agudas.",
      duracion: "45-60 min",
      precio: 25,
      precioTexto: "$25 ref./sesión",
      icono: "accessibility_new",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Fisioterapia Musculoesquelética"
    },
    {
      id: "rehabilitacion-fisica",
      titulo: "Rehabilitación física",
      descripcion: "Recuperación de la función motriz global para retomar actividades de la vida diaria y laboral sin restricciones ni dolor recurrente.",
      duracion: "60 min",
      precio: 30,
      precioTexto: "$30 ref./sesión",
      icono: "fitness_center",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Rehabilitación Física"
    },
    {
      id: "deportiva",
      titulo: "Fisioterapia deportiva",
      descripcion: "Tratamiento de lesiones en atletas de alto rendimiento y aficionados. Readaptación al gesto técnico y prevención de recaídas.",
      duracion: "60 min",
      precio: 30,
      precioTexto: "$30 ref./sesión",
      icono: "sports_tennis",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Fisioterapia Deportiva"
    },
    {
      id: "terapia-manual",
      titulo: "Terapia manual ortopédica",
      descripcion: "Movilización articular específica, liberación miofascial y técnicas de tejido blando orientadas al alivio analgésico y descompresión.",
      duracion: "45 min",
      precio: 25,
      precioTexto: "$25 ref./sesión",
      icono: "front_hand",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Terapia Manual"
    },
    {
      id: "espalda-cuello",
      titulo: "Dolor de espalda y cuello",
      descripcion: "Protocolos específicos para lumbalgia mecánica, ciática, hernia discal contenida y cervicalgia derivada de fatiga postural digital.",
      duracion: "45-60 min",
      precio: 25,
      precioTexto: "$25 ref./sesión",
      icono: "airline_seat_recline_normal",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Dolor de Espalda y Cuello"
    },
    {
      id: "postoperatoria",
      titulo: "Rehabilitación postoperatoria",
      descripcion: "Intervención dosificada poscirugía de ligamento cruzado anterior, meniscos, manguito rotador y prótesis de cadera o rodilla.",
      duracion: "60 min",
      precio: 35,
      precioTexto: "$35 ref./sesión",
      icono: "healing",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Rehabilitación Postoperatoria"
    },
    {
      id: "ejercicio-terapeutico",
      titulo: "Ejercicio terapéutico",
      descripcion: "Sesiones guiadas de fortalecimiento isométrico, control motor, reprogramación propioceptiva y estabilización lumbo-pélvica (Core).",
      duracion: "45 min",
      precio: 25,
      precioTexto: "$25 ref./sesión",
      icono: "directions_run",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Ejercicio Terapéutico"
    },
    {
      id: "prevencion-lesiones",
      titulo: "Prevención de lesiones",
      descripcion: "Screening osteoarticular preventivo, análisis de patrones de movimiento y acondicionamiento pre-temporada o retorno laboral.",
      duracion: "60 min",
      precio: 30,
      precioTexto: "$30 ref./sesión",
      icono: "shield",
      mensajeWhatsApp: "Hola Physio Partner, quisiera consultar por Prevención de Lesiones"
    }
  ],

  pasosProceso: [
    {
      numero: "01",
      titulo: "Agenda tu cita",
      descripcion: "Escríbenos directamente por WhatsApp o llena nuestro formulario indicando qué molestia presentas y tus días u horarios preferidos.",
      destacado: "Coordinación ágil sin esperas",
      icono: "chat_bubble"
    },
    {
      numero: "02",
      titulo: "Valoramos tu caso",
      descripcion: "Realizamos una evaluación funcional y biomecánica exhaustiva para identificar el origen del dolor y establecer un plan de tratamiento apropiado.",
      destacado: "Diagnóstico clínico individual",
      icono: "stethoscope"
    },
    {
      numero: "03",
      titulo: "Comienza tu recuperación",
      descripcion: "Inicias tus sesiones con terapia manual, agentes físicos o ejercicio guiado, junto con orientaciones claras para mantener tus logros en casa.",
      destacado: "Seguimiento continuo de avances",
      icono: "trending_up"
    }
  ],

  equipo: [
    {
      rol: "Fisioterapeuta Principal",
      especialidad: "Valoración Integral & Musculoesquelética",
      descripcion: "Especialista en diagnóstico biomecánico diferencial, readaptación motriz y protocolos de fisioterapia avanzada para afecciones complejas.",
      icono: "medical_services"
    },
    {
      rol: "Fisioterapeuta Deportiva",
      especialidad: "Recuperación Motora & Readaptación",
      descripcion: "Enfocada en retorno seguro al entrenamiento, refuerzo cinético y optimización de movilidad para deportistas de alto nivel y runners.",
      icono: "sports_kabaddi"
    },
    {
      rol: "Fisioterapeuta Clínica",
      especialidad: "Terapia Manual & Dolor Crónico",
      descripcion: "Experta en movilización articular analgésica, patología de columna cervical y lumbar, y readaptación ergonómica postural.",
      icono: "spa"
    }
  ],

  testimonios: [
    {
      autor: "María P.",
      iniciales: "MP",
      tipo: "Paciente de Fisioterapia Deportiva · Cuenca",
      texto: "La atención fue muy profesional y personalizada. Me explicaron cada parte del tratamiento y me sentí acompañada durante todas las sesiones. Volví a correr sin molestias de rodilla.",
      estrellas: 5
    },
    {
      autor: "Carlos M.",
      iniciales: "CM",
      tipo: "Paciente de Dolor Lumbar · Cuenca",
      texto: "Un ambiente agradable, instalaciones muy cómodas y limpias, y una atención de primera. Me gustó que se tomaran el tiempo para escuchar mi dolor de espalda crónico y encontrar la causa real.",
      estrellas: 5
    },
    {
      autor: "Andrea R.",
      iniciales: "AR",
      tipo: "Rehabilitación Postquirúrgica · Cuenca",
      texto: "Muy buena experiencia tras mi cirugía de hombro. La calidez del trato, la puntualidad en los turnos y las indicaciones para practicar en mi casa marcaron toda la diferencia.",
      estrellas: 5
    }
  ],

  faq: [
    {
      pregunta: "¿Cómo puedo agendar una cita en la clínica?",
      respuesta: "Puedes agendar tu cita enviándonos un mensaje directo a través de WhatsApp, llamando a nuestros números telefónicos o completando el formulario de solicitud en esta página. Te confirmaremos el turno disponible más conveniente en cuestión de minutos."
    },
    {
      pregunta: "¿Necesito una valoración inicial antes de comenzar el tratamiento?",
      respuesta: "Sí. Todo proceso seguro inicia con una valoración clínica para evaluar el rango de movimiento articular, contracturas, dolor y biomecánica corporal. De esta forma aseguramos que las técnicas aplicadas sean exactamente las que tu condición requiere."
    },
    {
      pregunta: "¿Cuánto dura habitualmente una sesión de fisioterapia?",
      respuesta: "Las sesiones tienen una duración promedio de 45 a 60 minutos, dependiendo del tipo de tratamiento asignado (terapia manual, agentes electroterápicos o ejercicio terapéutico adaptado)."
    },
    {
      pregunta: "¿Qué debo llevar o vestir para mi primera cita?",
      respuesta: "Recomendamos vestir ropa cómoda o deportiva que permita evaluar la zona a tratar (por ejemplo, short para rodilla o tobillo, camiseta sin mangas para hombro o cuello). Si dispones de exámenes radiológicos, resonancias o informes médicos previos, es muy útil traerlos."
    },
    {
      pregunta: "¿Atienden lesiones deportivas y preparación funcional?",
      respuesta: "Absolutamente. Contamos con protocolos especializados para esguinces, desgarros fibrilares, tendinitis rotuliana o aquilea y fascitis plantar, complementados con ejercicios de propiocepción para un reingreso deportivo óptimo."
    },
    {
      pregunta: "¿Dónde se encuentra exactamente PHYSIO PARTNER en Cuenca?",
      respuesta: "Estamos ubicados en la Av. del Tejar, código postal 010111, Cuenca, Azuay, con excelente conexión hacia la Av. Ordóñez Lasso y el sector oeste de la ciudad, ofreciendo facilidad de acceso y estacionamiento."
    }
  ],

  redes: [
    {
      nombre: "Facebook",
      url: "https://facebook.com",
      icono: "facebook"
    },
    {
      nombre: "Instagram",
      url: "https://instagram.com",
      icono: "instagram"
    },
    {
      nombre: "WhatsApp",
      url: "https://wa.me/593990000000",
      icono: "whatsapp"
    }
  ]
};

// Alias para garantizar compatibilidad con los requerimientos
export const taller = clinicaData;
export default clinicaData;
