import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import {
  privacyIntro,
  privacySections,
  privacyTitle,
  privacyUpdated,
} from "@/content/politica-de-privacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad | Smartock",
  description:
    "Política de privacidad y tratamiento de datos personales de la plataforma Smartock.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalDocumentPage
      intro={privacyIntro}
      sectionIdPrefix="privacidad"
      sections={privacySections}
      title={privacyTitle}
      tocLabel="Índice de política de privacidad"
      updated={privacyUpdated}
    />
  );
}
