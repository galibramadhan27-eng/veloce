import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ n, s }: { n: number; s: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, n, { duration: 2, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, n]);
  return <span ref={ref}>{v}{s}</span>;
}
