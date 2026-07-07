export type LegalSection = {
  id: number;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  items?: string[];
  trailingParagraphs?: string[];
};

export const privacyTitle = `Política de Privacidad de Smartock`;

export const privacyUpdated = `7 de julio de 2026`;

export const privacyIntro = [
  `La presente Política de Privacidad describe cómo Smartock recopila, utiliza, almacena, protege y trata datos personales e información vinculada al uso de la plataforma.`,
  `Smartock es una plataforma desarrollada y operada por Ginkgo Devs, nombre comercial utilizado por el equipo responsable del producto.`,
  `A los efectos legales, administrativos y de contacto, el responsable actual de Smartock es Nicolás Alonso, CUIT 20-41950666-5.`,
  `Canales oficiales de contacto:`,
  `Correo electrónico: ginkgodevs@gmail.com
WhatsApp / teléfono: +54 9 381 566-7690`,
] as const;

export const privacySections: LegalSection[] = [
  {
    id: 1,
    title: `Alcance de esta política`,
    paragraphs: [
      `Esta Política de Privacidad aplica al uso de Smartock, su sitio web, formularios, demos, comunicaciones comerciales, panel de administración, funcionalidades internas, integraciones, herramientas de inteligencia artificial, Stocky y cualquier otro canal vinculado al servicio.`,
      `Al utilizar Smartock, el cliente declara conocer y aceptar esta Política de Privacidad.`,
    ],
  },
  {
    id: 2,
    title: `Tipo de información que podemos recopilar`,
    paragraphs: [
      `Smartock podrá recopilar y tratar información necesaria para prestar, administrar, mejorar y proteger el servicio.`,
    ],
    listIntro: `La información podrá incluir:`,
    items: [
      `nombre y apellido`,
      `correo electrónico`,
      `número de teléfono o WhatsApp`,
      `nombre del comercio o empresa`,
      `rubro del negocio`,
      `cantidad de sucursales`,
      `cantidad aproximada de productos`,
      `sistema actual utilizado por el comercio`,
      `datos fiscales o administrativos necesarios para la relación comercial`,
      `datos de usuarios internos`,
      `roles, permisos y accesos dentro de la plataforma`,
      `información sobre planes contratados, pagos, vencimientos y facturación`,
      `consultas comerciales, mensajes de soporte o comunicaciones enviadas al equipo de Smartock`,
    ],
  },
  {
    id: 3,
    title: `Información operativa cargada en Smartock`,
    paragraphs: [
      `El cliente podrá cargar o gestionar dentro de Smartock información vinculada a la operación de su comercio o empresa.`,
      `El cliente será responsable de contar con autorización o base legal suficiente para cargar, administrar y tratar datos personales de terceros dentro de Smartock, incluyendo datos de clientes finales, proveedores, empleados, contactos comerciales u otras personas.`,
    ],
    listIntro: `Esta información puede incluir, entre otros datos:`,
    items: [
      `productos`,
      `precios`,
      `listas de precios`,
      `stock`,
      `sucursales`,
      `depósitos`,
      `ventas`,
      `caja`,
      `movimientos`,
      `clientes`,
      `cuentas corrientes`,
      `proveedores`,
      `compras`,
      `gastos`,
      `pedidos`,
      `facturas`,
      `comprobantes`,
      `reportes`,
      `archivos`,
      `documentos comerciales`,
      `información enviada o consultada mediante Stocky`,
    ],
  },
  {
    id: 4,
    title: `Datos de uso, seguridad y actividad`,
    paragraphs: [
      `Smartock podrá recopilar información técnica y de uso para fines de seguridad, auditoría, soporte, mejora del producto y prevención de abuso.`,
    ],
    listIntro: `Esta información podrá incluir:`,
    items: [
      `fecha y hora de acceso`,
      `dirección IP`,
      `navegador`,
      `dispositivo`,
      `sistema operativo`,
      `acciones realizadas dentro de la plataforma`,
      `registros de errores`,
      `logs técnicos`,
      `historial de actividad`,
      `cambios realizados por usuarios`,
      `intentos de inicio de sesión`,
      `información necesaria para detectar usos indebidos o incidentes de seguridad`,
    ],
  },
  {
    id: 5,
    title: `Finalidades del tratamiento`,
    paragraphs: [
    ],
    listIntro: `Smartock podrá utilizar la información recopilada para:`,
    items: [
      `crear y administrar cuentas`,
      `activar el servicio`,
      `preparar demos`,
      `configurar sucursales, usuarios y permisos`,
      `prestar funcionalidades de gestión comercial`,
      `procesar ventas, stock, caja, clientes, proveedores, cuentas corrientes y facturación`,
      `brindar soporte técnico y comercial`,
      `responder consultas`,
      `enviar comunicaciones operativas`,
      `informar vencimientos, pagos, cambios de planes o novedades del servicio`,
      `mejorar la plataforma`,
      `desarrollar nuevas funcionalidades`,
      `prevenir fraude, abuso o accesos no autorizados`,
      `mantener la seguridad y estabilidad del sistema`,
      `cumplir obligaciones legales, fiscales, administrativas o contractuales`,
      `analizar el uso del producto de forma interna y agregada`,
      `procesar información mediante herramientas de inteligencia artificial cuando el cliente utilice funcionalidades que lo requieran`,
    ],
  },
  {
    id: 6,
    title: `Inteligencia artificial y procesamiento de documentos`,
    paragraphs: [
      `Smartock podrá utilizar herramientas de inteligencia artificial para procesar facturas, listas de precios, documentos, mensajes, consultas, archivos o información cargada por el cliente.`,
      `Estas funcionalidades tienen como finalidad reducir carga manual, facilitar la carga de información, asistir en consultas y mejorar la operación del comercio.`,
      `El cliente reconoce que la información procesada mediante IA puede requerir revisión y validación humana.`,
      `Smartock procurará aplicar medidas razonables para proteger la información procesada, pero el cliente será responsable de verificar los resultados antes de utilizarlos para actualizar stock, modificar precios, cargar movimientos, emitir comprobantes o tomar decisiones comerciales.`,
    ],
  },
  {
    id: 7,
    title: `Stocky y conversaciones por WhatsApp`,
    paragraphs: [
      `Stocky es el asistente inteligente de Smartock por WhatsApp.`,
      `Según el plan contratado, Stocky podrá responder consultas, generar resúmenes, acceder a información del negocio o iniciar procesos operativos dentro de Smartock.`,
      `Las conversaciones, mensajes, archivos o consultas enviadas a través de Stocky podrán almacenarse con fines de funcionamiento del servicio, trazabilidad, soporte, seguridad, auditoría y mejora de la experiencia.`,
      `El cliente reconoce que WhatsApp y otros servicios de mensajería son operados por terceros, por lo que también podrán aplicar sus propias políticas, condiciones y reglas técnicas.`,
    ],
  },
  {
    id: 8,
    title: `Cookies, analítica y herramientas de marketing`,
    paragraphs: [
      `El sitio web de Smartock podrá utilizar cookies, tecnologías similares o herramientas de análisis para mejorar la experiencia del usuario, medir visitas, analizar conversiones, mejorar campañas comerciales o comprender el comportamiento de navegación.`,
      `Smartock podrá utilizar herramientas como Google Analytics, Google Tag Manager, Meta Pixel u otras tecnologías similares, en caso de encontrarse configuradas.`,
      `El usuario podrá configurar o bloquear cookies desde su navegador, aunque esto podría afectar algunas funcionalidades del sitio.`,
    ],
  },
  {
    id: 9,
    title: `Proveedores tecnológicos y terceros`,
    paragraphs: [
      `Estos proveedores podrán acceder o procesar información únicamente en la medida necesaria para prestar sus servicios a Smartock o al cliente.`,
      `Smartock no venderá datos personales de clientes a terceros.`,
    ],
    listIntro: `Para prestar el servicio, Smartock podrá utilizar proveedores tecnológicos externos, tales como:`,
    items: [
      `infraestructura cloud`,
      `servidores`,
      `bases de datos`,
      `almacenamiento de archivos`,
      `servicios de correo electrónico`,
      `servicios de mensajería`,
      `pasarelas de pago`,
      `herramientas de analítica`,
      `proveedores de inteligencia artificial`,
      `servicios de facturación o integraciones externas`,
      `sistemas de soporte o comunicación`,
    ],
  },
  {
    id: 10,
    title: `Uso de datos para mejora del producto`,
    paragraphs: [
      `Smartock podrá utilizar información de uso, métricas, errores, patrones operativos y datos agregados o anonimizados para mejorar la plataforma, detectar problemas, desarrollar nuevas funcionalidades y optimizar la experiencia del usuario.`,
      `Cuando se utilicen datos con fines estadísticos, de mejora o análisis interno, Smartock procurará evitar la identificación directa de personas o comercios, salvo que ello sea necesario para brindar soporte, resolver incidentes o cumplir obligaciones contractuales.`,
    ],
  },
  {
    id: 11,
    title: `Conservación de la información`,
    paragraphs: [
      `Smartock conservará la información durante el tiempo necesario para prestar el servicio, cumplir obligaciones contractuales, legales, fiscales, administrativas, de soporte, seguridad o auditoría.`,
      `Luego de la baja del servicio, Smartock podrá conservar datos por un plazo razonable para permitir recuperación de cuenta, exportación de información, cumplimiento de obligaciones legales, resolución de reclamos o resguardo técnico.`,
      `El cliente podrá solicitar la exportación o eliminación de sus datos, sujeto a condiciones técnicas, legales, fiscales, administrativas o contractuales aplicables.`,
    ],
  },
  {
    id: 12,
    title: `Exportación y eliminación de datos`,
    paragraphs: [
      `El cliente podrá solicitar la exportación de la información asociada a su cuenta a través de los canales oficiales de contacto.`,
      `Smartock procurará brindar mecanismos razonables de exportación, según disponibilidad técnica, volumen de datos, formato y estado de la cuenta.`,
      `El cliente también podrá solicitar la eliminación de datos, siempre que no exista obligación legal, fiscal, administrativa, técnica o contractual de conservarlos.`,
      `La eliminación definitiva de datos podrá implicar la pérdida irreversible de información, reportes, historial, archivos, comprobantes, movimientos y configuraciones.`,
    ],
  },
  {
    id: 13,
    title: `Seguridad`,
    paragraphs: [
      `Smartock aplicará medidas técnicas y organizativas razonables para proteger la información contra accesos no autorizados, pérdida, uso indebido, alteración o divulgación no autorizada.`,
      `Estas medidas podrán incluir controles de acceso, roles y permisos, registros de actividad, resguardo de credenciales, infraestructura segura, copias de seguridad y prácticas internas de protección de información.`,
      `Sin embargo, ningún sistema informático puede garantizar seguridad absoluta. El cliente también deberá adoptar medidas de seguridad adecuadas, tales como proteger sus credenciales, limitar accesos internos, asignar permisos correctamente y evitar compartir contraseñas.`,
    ],
  },
  {
    id: 14,
    title: `Backups y recuperación`,
    paragraphs: [
      `Smartock podrá realizar copias de seguridad o mecanismos de respaldo de información como parte de sus medidas técnicas de continuidad y seguridad.`,
      `La existencia de backups no garantiza la recuperación total o inmediata de información eliminada, modificada o afectada por errores de uso, fallas externas o acciones del cliente.`,
      `Las solicitudes de recuperación de información serán evaluadas según disponibilidad técnica, antigüedad de los datos, volumen, causa del incidente y condiciones del servicio contratado.`,
    ],
  },
  {
    id: 15,
    title: `Confidencialidad`,
    paragraphs: [
      `Smartock tratará con confidencialidad la información comercial, operativa y administrativa del cliente a la que acceda con motivo de la prestación del servicio.`,
      `El personal, colaboradores o proveedores que intervengan en la operación de Smartock deberán tratar la información conforme a criterios razonables de confidencialidad y seguridad.`,
    ],
  },
  {
    id: 16,
    title: `Derechos de los titulares de datos`,
    paragraphs: [
      `Las personas titulares de datos personales podrán solicitar, según corresponda, acceso, rectificación, actualización o supresión de sus datos personales.`,
      `Para ejercer estos derechos, podrán comunicarse a:`,
      `Correo electrónico: ginkgodevs@gmail.com
WhatsApp / teléfono: +54 9 381 566-7690`,
      `Smartock podrá requerir información adicional para verificar la identidad del solicitante y la procedencia del pedido.`,
      `Cuando los datos personales pertenezcan a clientes finales, empleados, proveedores o contactos cargados por un comercio dentro de Smartock, el pedido podrá requerir intervención o validación del cliente responsable de dicha carga.`,
    ],
  },
  {
    id: 17,
    title: `Datos de menores de edad`,
    paragraphs: [
      `Smartock no está dirigido a menores de edad ni busca recopilar datos personales de menores.`,
      `El cliente se compromete a no cargar información de menores de edad salvo que cuente con autorización, fundamento legal suficiente o necesidad operativa legítima vinculada a su actividad.`,
    ],
  },
  {
    id: 18,
    title: `Transferencias internacionales`,
    paragraphs: [
      `En caso de utilizar proveedores tecnológicos ubicados fuera de Argentina o con infraestructura internacional, la información podrá ser almacenada o procesada en otros países.`,
      `Smartock procurará utilizar proveedores que apliquen medidas razonables de seguridad y protección de información.`,
    ],
  },
  {
    id: 19,
    title: `Incidentes de seguridad`,
    paragraphs: [
      `En caso de detectar un incidente de seguridad que pueda comprometer información relevante del cliente, Smartock procurará adoptar medidas razonables para contenerlo, investigarlo y comunicarlo cuando corresponda.`,
      `La comunicación se realizará a través de los canales de contacto disponibles y en función de la gravedad, alcance y naturaleza del incidente.`,
    ],
  },
  {
    id: 20,
    title: `Cambios en esta Política de Privacidad`,
    paragraphs: [
      `Smartock podrá modificar esta Política de Privacidad para reflejar cambios legales, técnicos, comerciales, operativos o de producto.`,
      `Las modificaciones relevantes serán comunicadas a través de los canales oficiales, sitio web, correo electrónico, WhatsApp, panel de administración o cualquier otro medio razonable.`,
      `La continuidad en el uso del servicio luego de comunicadas las modificaciones implicará la aceptación de la política actualizada.`,
    ],
  },
  {
    id: 21,
    title: `Contacto`,
    paragraphs: [
      `Para consultas sobre privacidad, tratamiento de datos, seguridad o ejercicio de derechos, el usuario podrá comunicarse a:`,
      `Ginkgo Devs / Smartock
Responsable actual: Nicolás Alonso
CUIT: 20-41950666-5
Correo electrónico: ginkgodevs@gmail.com
WhatsApp / teléfono: +54 9 381 566-7690`,
    ],
  },
];
