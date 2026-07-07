import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocumentPage";
import {
  cancellationIntro,
  cancellationSections,
  cancellationTitle,
  cancellationUpdated,
} from "@/content/politica-de-cancelacion";

export const metadata: Metadata = {
  title: "Cancelación, Renovación y Devoluciones | Smartock",
  description:
    "Política de cancelación, renovación y devoluciones para la contratación de Smartock.",
};

export default function PoliticaDeCancelacionPage() {
  return (
    <LegalDocumentPage
      intro={cancellationIntro}
      sectionIdPrefix="cancelacion"
      sections={cancellationSections}
      title={cancellationTitle}
      tocLabel="Índice de cancelación y devoluciones"
      updated={cancellationUpdated}
    />
  );
}
