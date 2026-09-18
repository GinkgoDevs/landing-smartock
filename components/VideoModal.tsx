'use client'
import { useEffect } from "react"
import { WistiaPlayer } from "@wistia/wistia-player-react"

const WISTIA_MEDIA_ID = "yhm77mt598"

type VideoModalProps = {
  open: boolean
  onClose: () => void
}

export function VideoModal({ open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.setTimeout(
      () => (document.querySelector(".modal-panel button") as HTMLElement | null)?.focus(),
      0,
    )
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-overlay fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Video: mirá cómo funciona Smartock"
      onClick={onClose}
    >
      <div
        className="modal-panel w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <p className="text-base font-bold text-ink md:text-lg">
            Mirá cómo funciona Smartock
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar video"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors hover:bg-zinc-100 hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="aspect-video w-full bg-ink">
          <WistiaPlayer aspect={16 / 9} mediaId={WISTIA_MEDIA_ID} />
        </div>
      </div>
    </div>
  )
}
