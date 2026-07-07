import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import {
  termsIntro,
  termsSections,
  termsTitle,
  termsUpdated,
} from "@/content/terminos-y-condiciones";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Smartock",
  description:
    "Términos y condiciones de uso, contratación y operación de la plataforma Smartock.",
};

export default function TerminosYCondicionesPage() {
  return (
    <LegalDocumentPage
      intro={termsIntro}
      sectionIdPrefix="termino"
      sections={termsSections}
      title={termsTitle}
      tocLabel="Índice de términos y condiciones"
      updated={termsUpdated}
    />
  );
}
