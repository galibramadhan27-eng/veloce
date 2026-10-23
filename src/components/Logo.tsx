export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M2 4h10l8 20 8-20h10L24 36h-8L2 4Z" fill="#F5B800" />
      </svg>
      <span className="font-display text-2xl tracking-[0.3em] leading-none">
        VELOCE<span className="block text-[9px] tracking-[0.5em] text-gold">AUTOMOTIVE</span>
      </span>
    </span>
  );
}
