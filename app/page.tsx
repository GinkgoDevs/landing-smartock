import Image from "next/image";
import type { CSSProperties } from "react";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { WistiaHeroVideo } from "@/components/WistiaHeroVideo";
import { PricingSection } from "@/components/PricingSection";
import { StockySection } from "@/components/StockySection";
import type { SimpleIcon } from "simple-icons";
import {
  siGooglesheets,
  siMercadopago,
  siOpenapiinitiative,
  siWhatsapp,
  siWoocommerce,
} from "simple-icons";

const industries = [
  { name: "Ferreterias", icon: "🔩", text: "Herramientas, bulones y materiales siempre ordenados." },
  { name: "Carnicerias", icon: "🥩", text: "Control por rubro, caja y movimientos diarios." },
  { name: "Kioscos", icon: "🍫", text: "Golosinas, bebidas, cigarrillos y reposicion diaria." },
  { name: "Minimarkets", icon: "🛒", text: "Stock, proveedores y precios en un solo panel." },
  { name: "Indumentaria", icon: "👕", text: "Talles, variantes y sucursales sincronizadas." },
  { name: "Farmacias", icon: "💊", text: "Alertas de reposicion y seguimiento de margenes." },
  { name: "Verdulerias", icon: "🥬", text: "Mercaderia fresca, rotacion rapida y control de merma." },
  { name: "Panaderias", icon: "🥐", text: "Produccion diaria, mostrador y ventas por horario pico." },
  { name: "Librerias", icon: "📚", text: "Utiles, papeleria y temporada escolar bajo control." },
  { name: "Jugueterias", icon: "🧸", text: "Gestion simple para temporadas de alta demanda." },
];

const features = [
  {
    title: "Control de Stock en Tiempo Real",
    text: "Movimientos precisos, alertas automaticas y auditorias de deposito simplificadas.",
  },
  {
    title: "Facturacion y POS",
    text: "Integracion directa con ARCA/AFIP. Factura A, B y C sin complicaciones.",
  },
  {
    title: "Lectura de Facturas con IA",
    text: "Escanea o subi fotos de facturas de proveedores y cargalas al stock automaticamente.",
  },
  {
    title: "Analisis de Ventas con IA",
    text: "Visualiza picos de venta y deja que la IA detecte tus productos mas rentables.",
  },
  {
    title: "Analisis de Proveedores",
    text: "Controla aumentos de precios, compara compras y protege tus margenes.",
  },
  {
    title: "PDF a Excel con IA",
    text: "Converti listas de precios y remitos PDF a Excel editable de forma instantanea.",
  },
  {
    title: "WhatsApp AutoInbox",
    text: "Gestion centralizada de pedidos por WhatsApp con IA para tomar ordenes automaticamente.",
    badge: "Proximamente",
  },
  {
    title: "Multi-sucursal",
    text: "Controla multiples locales y depositos desde una sola cuenta maestra.",
  },
];

const chaosItems = [
  "Perdidas por quiebres de stock no detectados.",
  "Carga manual de facturas lenta y con errores.",
  "Diferencias de caja imposibles de rastrear.",
  "Desconocimiento de la rentabilidad real diaria.",
];

const solutionItems = [
  "Alertas predictivas para reposicion de mercaderia.",
  "IA que lee y carga facturas en segundos.",
  "Control total de caja y medios de pago integrados.",
  "Reportes en tiempo real sobre el margen de ganancia.",
];

const heroProof = ["Stock sin planillas", "Facturas con IA", "Margen en tiempo real", "Punto de venta"];

const integrations = [
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "TiendaNube", image: "/integrations/tiendanube.svg", wide: true },
  { name: "WooCommerce", icon: siWoocommerce },
  { name: "Google Sheets", icon: siGooglesheets },
  { name: "API Rest", icon: siOpenapiinitiative },
  { name: "ARCA / AFIP", image: "/integrations/arca.png", wide: true },
  { name: "Mercado Pago", icon: siMercadopago },
  { name: "Excel", image: "/integrations/excel.svg" },
];

const stats = [
  ["90%", "menos carga manual al leer facturas con IA"],
  ["24/7", "control online de stock, caja y ventas"],
  ["3", "pasos para empezar a ordenar tu comercio"],
];

const steps = [
  {
    number: "1",
    title: "Cargas o importas tu negocio",
    text: "Productos, proveedores, precios y sucursales quedan centralizados en Smartock.",
  },
  {
    number: "2",
    title: "Conectas ventas y facturacion",
    text: "POS, caja, medios de pago y facturacion trabajan con la misma informacion.",
  },
  {
    number: "3",
    title: "La IA empieza a ayudarte",
    text: "Lee facturas, detecta alertas, analiza proveedores y te muestra donde se va el margen.",
  },
];

const faqs = [
  {
    question: "¿Smartock reemplaza mi Excel o sistema viejo?",
    answer:
      "Si. La idea es centralizar stock, ventas, caja, facturacion y reportes para que no dependas de planillas separadas ni cargas repetidas.",
  },
  {
    question: "¿Necesito saber de tecnologia para usarlo?",
    answer:
      "No. Smartock esta pensado para comercios: pantallas simples, datos claros y automatizaciones que reducen trabajo manual.",
  },
  {
    question: "¿La IA puede leer facturas reales de proveedores?",
    answer:
      "Si. Puede asistir en la carga de facturas, listas y documentos para acelerar el alta de productos, costos y movimientos.",
  },
  {
    question: "¿Sirve para mas de una sucursal?",
    answer:
      "Si. Los planes avanzados permiten trabajar con multiples depositos, locales y usuarios desde una sola cuenta.",
  },
];

function Logo({
  variant = "violet",
  iconOnly = false,
}: {
  variant?: "violet" | "white";
  iconOnly?: boolean;
}) {
  const isWhite = variant === "white";

  return (
    <a
      className={`logo ${isWhite ? "logoWhite" : ""} ${iconOnly ? "logoOnly" : ""}`}
      href="#inicio"
      aria-label="Smartock"
    >
      <span className="logoMark">
        <Image
          alt=""
          aria-hidden="true"
          height={500}
          priority={!isWhite}
          src={iconOnly ? "/brand/smartock-isotype-violet.png" : `/brand/smartock-logo-${variant}.png`}
          width={500}
        />
      </span>
    </a>
  );
}

function IntegrationLogo({
  integration,
}: {
  integration: {
    name: string;
    icon?: SimpleIcon;
    image?: string;
    wide?: boolean;
  };
}) {
  return (
    <span className={`integrationLogo ${integration.wide ? "wideLogo" : ""}`}>
      <span
        className="integrationMark"
        style={
          integration.icon
            ? ({ "--brand-color": `#${integration.icon.hex}` } as CSSProperties)
            : undefined
        }
      >
        {integration.icon ? (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d={integration.icon.path} />
          </svg>
        ) : (
          <Image alt="" aria-hidden="true" height={64} src={integration.image ?? ""} width={160} />
        )}
      </span>
      <em>{integration.name}</em>
    </span>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <nav className="nav">
        <div className="container navInner">
          <Logo />
          <div className="navLinks" aria-label="Navegacion principal">
            <a href="#funciones">Funciones</a>
            <a href="#integraciones">Integraciones</a>
            <a href="#planes">Planes</a>
            <a href="#agenda">Contacto</a>
          </div>
          <a className="navCta" href="#agenda">
            Comenzar
          </a>
        </div>
      </nav>

      <section className="hero section">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow heroEyebrow">Gestion inteligente para PyMEs argentinas</p>
            <h1>
              Deja de adivinar.
              <br />
              Controla stock, caja y <span>rentabilidad.</span>
            </h1>
            <p className="heroLead">
              Centraliza operaciones, reduce errores manuales y toma decisiones con datos reales en
              un solo panel.
            </p>
          </div>
          <div className="heroProof" aria-label="Beneficios principales">
            {heroProof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="heroVisual">
            <WistiaHeroVideo />
          </div>
          <div className="heroBottom">
            <a className="heroMegaCta" href="#agenda">
              <span className="heroMegaCtaGlow" aria-hidden="true" />
              <span className="heroMegaCtaContent">
                <span className="heroMegaCtaLabel">Sí, quiero probar Smartock gratis</span>
                <span className="heroMegaCtaSub">Demo personalizada · Sin tarjeta · Respuesta en 24hs</span>
              </span>
              <span className="heroMegaCtaArrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="integrationStrip" id="integraciones" aria-label="Integraciones">
        <div className="integrationInner">
          <div className="marquee">
            <div className="marqueeTrack">
              {[...integrations, ...integrations].map((item, index) => (
                <IntegrationLogo integration={item} key={`${item.name}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container aboutGrid">
          <div>
            <p className="eyebrow">La inteligencia al servicio de tu PyME</p>
            <h2>¿Que es Smartock?</h2>
            <p>
              Smartock no es solo un sistema de gestion; es el cerebro operativo de tu empresa.
              Combina una interfaz intuitiva con motores de inteligencia artificial para eliminar
              tareas manuales propensas a errores.
            </p>
            <p>
              Desde la carga automatica de facturas hasta la prediccion de quiebres de stock,
              Smartock aprende de tu negocio para que vos puedas enfocarte en vender mas.
            </p>
          </div>
          <div className="aboutCards">
            <article>
              <span className="cardIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9.2 4.2A3.6 3.6 0 0 0 5.7 8a3.4 3.4 0 0 0-1.2 6.3A3.5 3.5 0 0 0 8 19.4h1.1V4.2Z" />
                  <path d="M14.8 4.2A3.6 3.6 0 0 1 18.3 8a3.4 3.4 0 0 1 1.2 6.3 3.5 3.5 0 0 1-3.5 5.1h-1.1V4.2Z" />
                  <path d="M9.1 8.2H7.8a1.8 1.8 0 0 0-1.7 1.2" />
                  <path d="M14.9 8.2h1.3a1.8 1.8 0 0 1 1.7 1.2" />
                  <path d="M9.1 14.9H7.6a1.8 1.8 0 0 1-1.8-1.8" />
                  <path d="M14.9 14.9h1.5a1.8 1.8 0 0 0 1.8-1.8" />
                </svg>
              </span>
              <h3>IA Nativa</h3>
              <p>Algoritmos que procesan documentos y predicen tendencias.</p>
            </article>
            <article>
              <span className="cardIcon secondary" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <ellipse cx="12" cy="5" rx="7" ry="3" />
                  <path d="M5 5v5c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                  <path d="M5 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
                  <path d="M5 15v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
                </svg>
              </span>
              <h3>100% Cloud</h3>
              <p>Accede a tu informacion desde cualquier lugar y dispositivo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section metrics">
        <div className="container metricsGrid">
          <div className="statGrid">
            {stats.map(([value, text]) => (
              <article className="statCard" key={value}>
                <strong>{value}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
          <div>
            <p className="eyebrow darkEyebrow">Validacion y control operativo</p>
            <h2>Menos tareas repetidas. Mas decisiones con datos.</h2>
          </div>
        </div>
      </section>

      <StockySection />

      <section className="section industries">
        <div className="container">
          <h2>Impulsamos todo tipo de comercios</h2>
          <div className="industryGrid">
            {industries.map((industry) => (
              <article className="industryCard" key={industry.name}>
                <span>{industry.icon}</span>
                <h3>{industry.name}</h3>
                <p>{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison">
        <div className="container comparisonGrid">
          <article className="problemCard">
            <p className="label danger">Sin Smartock: el caos</p>
            <ul>
              {chaosItems.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="solutionCard">
            <p className="label success">Con Smartock: la solucion</p>
            <ul>
              {solutionItems.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow centeredEyebrow">Implementacion simple</p>
            <h2>Smartock empieza a trabajar en 3 pasos</h2>
            <p>No vendemos solo un software: dejamos tu operacion lista para controlar, medir y crecer.</p>
          </div>
          <div className="stepGrid">
            {steps.map((step) => (
              <article className="stepCard" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section features" id="funciones">
        <div className="container">
          <div className="sectionHeader">
            <h2>Todo lo que necesitas en un solo lugar</h2>
            <p>Funcionalidades potentes diseñadas para la realidad del comercio argentino.</p>
          </div>
          <div className="featureGrid">
            {features.map((feature, index) => (
              <article className="featureCard" key={feature.title}>
                {feature.badge ? <span className="badge">{feature.badge}</span> : null}
                <span className="featureIcon">{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="section faq">
        <div className="container faqGrid">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>¿Seguis teniendo dudas?</h2>
            <p>
              Estas son las preguntas que suelen aparecer antes de ordenar la gestion de un comercio
              con Smartock.
            </p>
          </div>
          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section calendlySection" id="agenda" aria-label="Agendar demo">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow centeredEyebrow">Agendá tu demo</p>
            <h2>Elegí el horario que mejor te quede</h2>
            <p>Reservá una llamada con nuestro equipo y te mostramos Smartock en acción.</p>
          </div>
          <div className="calendlyCard">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <Logo variant="white" />
            <p>Revolucionando la gestion de PyMEs en Argentina mediante inteligencia aplicada.</p>
          </div>
          <div>
            <h3>Empresa</h3>
            <a href="#funciones">Funciones</a>
            <a href="#planes">Planes</a>
            <a href="#agenda">Contacto</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#">Privacidad</a>
            <a href="#">Terminos</a>
          </div>
          <div>
            <h3>Newsletter</h3>
            <form className="newsletterForm">
              <input aria-label="Email newsletter" placeholder="Tu email" type="email" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <p className="copyright">© 2026 Smartock. Gestion inteligente para PyMEs argentinas.</p>
      </footer>
    </main>
  );
}
