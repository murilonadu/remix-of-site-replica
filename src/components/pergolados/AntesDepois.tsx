import { useRef, useState, useCallback } from "react";
import antes from "@/assets/pergolados/antes-pergolado.webp";
import depois from "@/assets/pergolados/depois-pergolado.webp";
import antesSm from "@/assets/pergolados/antes-pergolado-760.webp";
import depoisSm from "@/assets/pergolados/depois-pergolado-760.webp";
const SIZES = "(min-width: 768px) 672px, 92vw";

const AntesDepois = () => {
  const [pos, setPos] = useState(50);
  const boxRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const box = boxRef.current;
    if (!box) return;
    const r = box.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-[#5A3416]">Antes e depois</h3>
        <p className="text-sm md:text-base text-foreground/70 mt-1">Arraste a barra e veja a diferença que um pergolado faz</p>
      </div>
      <div
        ref={boxRef}
        className="relative w-full overflow-hidden rounded-xl shadow-lg select-none touch-pan-y cursor-ew-resize"
        style={{ aspectRatio: "1200 / 675" }}
        onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); moveTo(e.clientX); }}
        onPointerMove={(e) => { if (dragging.current) moveTo(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerCancel={() => { dragging.current = false; }}
      >
        <img src={depois} srcSet={`${depoisSm} 760w, ${depois} 1200w`} sizes={SIZES} alt="Depois: área com pergolado e o casal reunido à mesa" width={1200} height={675} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" draggable={false} />
        <img src={antes} srcSet={`${antesSm} 760w, ${antes} 1200w`} sizes={SIZES} alt="Antes: quintal sem pergolado" width={1200} height={675} className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} loading="lazy" decoding="async" draggable={false} />
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-md">ANTES</span>
        <span className="absolute top-2 right-2 bg-[#E07A1F] text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded-md">DEPOIS</span>
        <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_6px_rgba(0,0,0,.4)] pointer-events-none" style={{ left: `calc(${pos}% - 2px)` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#5A3416] font-bold text-sm">⇆</div>
        </div>
        <input
          type="range" min={0} max={100} value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Arraste para comparar antes e depois"
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default AntesDepois;
