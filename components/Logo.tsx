import Image from "next/image"

type LogoProps = {
  inverted?: boolean
  className?: string
  compact?: boolean
}

export function OctopusMark({
  className = "",
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Image
      src="/logo-octopus.png"
      alt=""
      draggable={false}
      width={44}
      height={44}
      className={`object-contain ${inverted ? "brightness-0 invert" : ""} ${className}`}
    />
  )
}

export function Logo({ inverted = false, className = "", compact = false }: LogoProps) {
  const color = inverted ? "#ffffff" : "#520088"

  return (
    <a
      href="#inicio"
      className={`inline-flex items-center ${compact ? "gap-1.5 md:gap-2.5" : "gap-2.5"} ${className}`}
      aria-label="Smartock"
    >
      <OctopusMark
        inverted={inverted}
        className={compact ? "h-[18px] w-[18px] md:h-11 md:w-11" : "h-11 w-11"}
      />
      <span
        className={`font-black leading-none tracking-tight ${
          compact ? "text-[11px] md:text-[22px] md:tracking-[-0.03em]" : "text-[22px] tracking-[-0.03em]"
        }`}
        style={{ color }}
      >
        Smartock
      </span>
    </a>
  )
}
