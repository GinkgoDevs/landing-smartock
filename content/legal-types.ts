export type LegalSection = {
  id: number;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  items?: string[];
  trailingParagraphs?: string[];
};
