export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="sectionLabelRow">
      <span aria-hidden="true" className="sectionLabelLine" />
      <span className="sectionLabelPill">{children}</span>
      <span aria-hidden="true" className="sectionLabelLine sectionLabelLineReverse" />
    </div>
  );
}
