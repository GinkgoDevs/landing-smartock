"use client";

import { WistiaPlayer } from "@wistia/wistia-player-react";

const WISTIA_MEDIA_ID = "ilasoa5wr3";

export function WistiaHeroVideo() {
  return (
    <div className="productPreview productPreviewVideo" aria-label="Video demo de Smartock">
      <div className="wistiaPlayerShell">
        <WistiaPlayer aspect={16 / 9} mediaId={WISTIA_MEDIA_ID} />
      </div>
      <div className="productPreviewBadge">
        <span>Demo en video</span>
        <strong>Mira Smartock en accion</strong>
      </div>
    </div>
  );
}
