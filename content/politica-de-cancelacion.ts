export type LegalSection = {
  id: number;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  items?: string[];
  trailingParagraphs?: string[];
};

export const cancellationTitle = `Política de Cancelación, Renovación y Devoluciones de Smartock`;

export const cancellationUpdated = `7 de julio de 2026`;

export const cancellationIntro = [
  `La presente Política de Cancelación, Renovación y Devoluciones regula las condiciones aplicables a bajas, no renovaciones, cancelaciones y solicitudes de devolución vinculadas a la contratación de Smartock.`,
  `Smartock es una plataforma digital desarrollada y operada por Ginkgo Devs, nombre comercial utilizado por el equipo responsable del producto.`,
  `A los efectos legales, administrativos y de contacto, el responsable actual de Smartock es Nicolás Alonso, CUIT 20-41950666-5.`,
  `Canales oficiales de contacto:`,
  `Correo electrónico: ginkgodevs@gmail.com
WhatsApp / teléfono: +54 9 381 566-7690`,
] as const;

export const cancellationSections: LegalSection[] = [
  {
    id: 1,
    title: `Contratación del servicio`,
    paragraphs: [
      `Smartock es un servicio digital de contratación periódica, orientado a comercios y empresas.`,
      `El pago del servicio se realiza por adelantado según el plan contratado, ya sea mensual, semestral, anual o bajo una condición comercial personalizada.`,
      `La activación del servicio podrá realizarse de forma manual y asistida, luego de una demo, validación comercial, configuración inicial o proceso de onboarding.`,
    ],
  },
  {
    id: 2,
    title: `Período inicial bonificado`,
    paragraphs: [
      `Smartock podrá ofrecer un período inicial bonificado de quince días corridos, según la promoción vigente.`,
      `Durante ese período, el cliente podrá probar o evaluar la plataforma bajo las condiciones informadas por Smartock.`,
      `Finalizado el período bonificado, la continuidad del servicio quedará sujeta a la contratación de un plan pago.`,
      `El período inicial bonificado no será canjeable por dinero, no generará saldo a favor y no implicará obligación de contratación posterior.`,
    ],
  },
  {
    id: 3,
    title: `Pagos mensuales`,
    paragraphs: [
      `Los planes mensuales de Smartock se abonan por adelantado.`,
      `El pago habilita el uso del servicio durante el período contratado, sujeto al cumplimiento de los Términos y Condiciones, la correcta acreditación del pago y el uso adecuado de la plataforma.`,
      `Una vez iniciado el período pago, no corresponderá devolución proporcional por falta de uso, baja anticipada, arrepentimiento posterior al plazo previsto o decisión comercial del cliente, salvo en los casos expresamente contemplados en esta política.`,
    ],
  },
  {
    id: 4,
    title: `Pagos semestrales y anuales`,
    paragraphs: [
      `Smartock podrá ofrecer planes semestrales y anuales con beneficios comerciales por pago anticipado.`,
      `Actualmente, el plan semestral podrá incluir un mes bonificado y el plan anual podrá incluir cuatro meses bonificados, según la promoción vigente.`,
      `Al tratarse de condiciones promocionales por contratación anticipada, los planes semestrales y anuales no tendrán devolución proporcional por baja anticipada.`,
      `En caso de que el cliente decida no continuar utilizando Smartock antes de finalizar el período abonado, podrá mantener el acceso hasta la finalización del período contratado, siempre que no exista incumplimiento de pago, uso indebido, intento de vulneración del sistema, infracción a los Términos y Condiciones o baja por causa justificada.`,
    ],
  },
  {
    id: 5,
    title: `Cancelación dentro de los primeros tres días hábiles`,
    paragraphs: [
      `En caso de contratación inicial de un plan pago, el cliente podrá solicitar la cancelación del servicio dentro de los tres días hábiles posteriores al inicio del plan pago.`,
      `En ese supuesto, Smartock evaluará la solicitud y podrá proceder a la devolución del importe abonado, siempre que no se hayan realizado configuraciones avanzadas, implementaciones especiales, integraciones, capacitaciones personalizadas, carga significativa de información, uso intensivo de la plataforma, trabajos específicos solicitados por el cliente o acciones que impliquen una prestación sustancial del servicio.`,
      `La solicitud deberá realizarse por escrito a través de los canales oficiales de contacto.`,
      `Pasado el plazo de tres días hábiles desde el inicio del plan pago, no corresponderá devolución, salvo en los casos extraordinarios previstos en esta política.`,
    ],
  },
  {
    id: 6,
    title: `Casos en los que podrá corresponder devolución`,
    paragraphs: [
    ],
    listIntro: `Smartock podrá realizar devoluciones únicamente en los siguientes casos:`,
    items: [
      `cobro duplicado`,
      `error administrativo atribuible a Smartock`,
      `imposibilidad técnica comprobada y atribuible directamente a Smartock que impida la prestación esencial del servicio contratado`,
      `cancelación solicitada dentro de los tres días hábiles posteriores al inicio del plan pago, siempre que se cumplan las condiciones indicadas en esta política`,
      `otro caso excepcional aceptado expresamente por Smartock`,
    ],
    trailingParagraphs: [
      `Toda devolución estará sujeta a revisión administrativa, validación del pago, análisis del caso y verificación de la causa invocada`,
    ],
  },
  {
    id: 7,
    title: `Casos en los que no corresponderá devolución`,
    paragraphs: [
    ],
    listIntro: `No corresponderá devolución cuando la cancelación, baja o reclamo se deba a:`,
    items: [
      `falta de uso por parte del cliente`,
      `arrepentimiento posterior al plazo de tres días hábiles`,
      `errores de carga realizados por el cliente`,
      `problemas internos del comercio`,
      `falta de capacitación del personal del cliente`,
      `cambios de decisión comercial`,
      `falta de pago`,
      `uso indebido del sistema`,
      `intento de vulneración de la plataforma`,
      `incumplimiento de los Términos y Condiciones`,
      `problemas de internet, dispositivos, navegadores o infraestructura del cliente`,
      `fallas de servicios externos no atribuibles directamente a Smartock`,
      `datos fiscales, comerciales o administrativos incorrectos provistos por el cliente`,
      `baja anticipada de planes semestrales o anuales`,
      `promociones, descuentos o bonificaciones ya aplicadas`,
    ],
  },
  {
    id: 8,
    title: `Solicitud de no renovación`,
    paragraphs: [
      `El cliente podrá solicitar la no renovación del servicio para períodos futuros.`,
      `La solicitud deberá realizarse antes del próximo vencimiento o renovación del período contratado, a través de los canales oficiales de contacto.`,
      `La baja o no renovación no generará derecho a devolución sobre períodos ya abonados.`,
      `En caso de que existan importes pendientes, Smartock podrá requerir su cancelación antes de procesar la baja definitiva, exportación de datos o cierre administrativo de la cuenta.`,
    ],
  },
  {
    id: 9,
    title: `Suspensión por falta de pago`,
    paragraphs: [
      `En caso de falta de pago, Smartock podrá otorgar un plazo de gracia de hasta cinco días corridos desde el vencimiento correspondiente.`,
      `Transcurrido dicho plazo sin registrarse la acreditación del pago, Smartock podrá suspender, limitar o bloquear total o parcialmente el acceso a la cuenta hasta que se regularice la situación.`,
      `La suspensión por falta de pago no implicará cancelación automática de la deuda ni renuncia de Smartock a reclamar importes pendientes.`,
    ],
  },
  {
    id: 10,
    title: `Reactivación del servicio`,
    paragraphs: [
      `Smartock no garantiza que una cuenta suspendida por períodos prolongados conserve indefinidamente toda su información, configuraciones, historial o disponibilidad operativa.`,
    ],
    listIntro: `La reactivación de una cuenta suspendida podrá quedar sujeta a:`,
    items: [
      `pago de importes pendientes`,
      `verificación de acreditación`,
      `condiciones comerciales vigentes`,
      `disponibilidad técnica`,
      `revisión del estado de la cuenta`,
      `aceptación de términos actualizados, si correspondiera`,
    ],
  },
  {
    id: 11,
    title: `Promociones y bonificaciones`,
    paragraphs: [
      `Las bonificaciones comerciales, períodos gratuitos, descuentos promocionales, meses bonificados o beneficios especiales no serán canjeables por dinero ni reembolsables.`,
      `Las promociones podrán modificarse, suspenderse o finalizarse para nuevas contrataciones, sin afectar períodos ya abonados por clientes activos.`,
      `Salvo indicación expresa, las promociones no serán acumulables entre sí.`,
    ],
  },
  {
    id: 12,
    title: `Procedimiento para solicitar devolución`,
    paragraphs: [
    ],
    listIntro: `Para solicitar una devolución, el cliente deberá comunicarse a través de los canales oficiales e informar:`,
    items: [
      `nombre del comercio o empresa`,
      `nombre de contacto`,
      `plan contratado`,
      `fecha de pago`,
      `comprobante de pago, si correspondiera`,
      `motivo de la solicitud`,
      `datos necesarios para procesar la devolución, si fuera aprobada`,
      `Smartock analizará la solicitud y podrá requerir información adicional`,
    ],
    trailingParagraphs: [
      `La aprobación o rechazo de la devolución será comunicada por los canales oficiales`,
    ],
  },
  {
    id: 13,
    title: `Forma y plazo de devolución`,
    paragraphs: [
      `En caso de aprobarse una devolución, Smartock procurará realizarla por el mismo medio de pago utilizado originalmente o por otro medio acordado con el cliente.`,
      `Los plazos de acreditación podrán depender del banco, plataforma de pago, entidad emisora, pasarela o proveedor financiero correspondiente.`,
      `Si existieran comisiones, cargos bancarios, retenciones o costos administrativos no recuperables, Smartock podrá descontarlos del importe a devolver cuando corresponda y sea informado al cliente.`,
    ],
  },
  {
    id: 14,
    title: `Baja por incumplimiento`,
    paragraphs: [
    ],
    listIntro: `Smartock podrá suspender o dar de baja una cuenta sin devolución cuando exista:`,
    items: [
      `uso fraudulento`,
      `intento de vulneración del sistema`,
      `acceso indebido`,
      `incumplimiento grave de los Términos y Condiciones`,
      `uso de la plataforma para fines ilegales`,
      `daño o intento de daño a la infraestructura, información o reputación de Smartock`,
      `reventa o sublicencia no autorizada`,
      `manipulación técnica no permitida`,
    ],
  },
  {
    id: 15,
    title: `Contacto`,
    paragraphs: [
      `Para solicitar cancelaciones, no renovaciones, revisiones administrativas o devoluciones, el cliente podrá comunicarse a:`,
      `Ginkgo Devs / Smartock
Responsable actual: Nicolás Alonso
CUIT: 20-41950666-5
Correo electrónico: ginkgodevs@gmail.com
WhatsApp / teléfono: +54 9 381 566-7690`,
    ],
  },
];
