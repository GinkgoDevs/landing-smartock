"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/ginkgodevs/smartock?hide_gdpr_banner=1";

export function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget calendlyWidget"
        data-url={CALENDLY_URL}
        data-resize="true"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
