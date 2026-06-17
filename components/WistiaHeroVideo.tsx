"use client";

import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

const WISTIA_MEDIA_ID = "ilasoa5wr3";
const WISTIA_ASPECT = 960 / 434;

export function WistiaHeroVideo() {
  const hasRequestedFullscreen = useRef(false);

  const handlePlay: NonNullable<React.ComponentProps<typeof WistiaPlayer>["onPlay"]> = (
    event,
  ) => {
    const player = event.target;

    if (hasRequestedFullscreen.current || player.inFullscreen) {
      return;
    }

    hasRequestedFullscreen.current = true;
    void player.requestFullscreen();
  };

  return (
    <div className="heroVideoBlock">
      <div className="productPreview productPreviewVideo" aria-label="Video demo de Smartock">
        <div className="wistiaPlayerShell">
          <WistiaPlayer
            aspect={WISTIA_ASPECT}
            mediaId={WISTIA_MEDIA_ID}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <div className="productPreviewBadge">
        <span>Demo en video</span>
        <strong>Mira Smartock en accion</strong>
      </div>
    </div>
  );
}
