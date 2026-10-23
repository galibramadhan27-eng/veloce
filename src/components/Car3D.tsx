export function Car3D({ className = "" }: { className?: string }) {
  return (
    <video
      className={className}
      src="/car-hero.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}

export default Car3D;
