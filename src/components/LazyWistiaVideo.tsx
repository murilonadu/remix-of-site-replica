import { useEffect, useRef, useState, memo } from "react";

interface LazyWistiaVideoProps {
  mediaId: string;
  aspect?: string;
  cta?: string;
  ctaSub?: string;
}

// Default aspect ratio percentage for padding-top fallback
const DEFAULT_ASPECT_PADDING = 55.21;

/**
 * Vídeo leve: mostra a capa do vídeo com botão de play e só baixa o player
 * da Wistia (≈1 MB) quando a pessoa toca. Assim a página abre bem mais rápido.
 */
const LazyWistiaVideo = memo(({ mediaId, aspect = "1.8113207547169812", cta = "TOQUE PARA ASSISTIR", ctaSub }: LazyWistiaVideoProps) => {
  const aspectNum = parseFloat(aspect);
  const paddingTop = aspectNum > 0 ? (1 / aspectNum) * 100 : DEFAULT_ASPECT_PADDING;
  const cssAspectRatio = aspectNum > 0 ? `${aspectNum}` : "16/9";
  const [isNear, setIsNear] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Só busca a capa quando o vídeo está perto de aparecer na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Capa nítida do vídeo (oEmbed da Wistia, ~1 KB) com reserva na miniatura padrão
  useEffect(() => {
    if (!isNear || thumb) return;
    let alive = true;
    fetch(`https://fast.wistia.com/oembed?url=https://home.wistia.com/medias/${mediaId}&embedType=async&width=720`)
      .then((r) => r.json())
      .then((d) => {
        if (alive && d?.thumbnail_url) setThumb(String(d.thumbnail_url).replace(/\?.*$/, "") + "?image_resize=720");
      })
      .catch(() => alive && setThumb(`https://fast.wistia.com/embed/medias/${mediaId}/swatch`));
    return () => {
      alive = false;
    };
  }, [isNear, mediaId, thumb]);

  // Ao tocar: carrega o player da Wistia e começa a tocar
  useEffect(() => {
    if (!playing) return;
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const playerScript = document.createElement("script");
      playerScript.src = "https://fast.wistia.com/player.js";
      playerScript.async = true;
      document.head.appendChild(playerScript);
    }
    if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
      const embedScript = document.createElement("script");
      embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      embedScript.async = true;
      embedScript.type = "module";
      document.head.appendChild(embedScript);
    }
  }, [playing, mediaId]);

  // Aquece a conexão com a Wistia quando a pessoa encosta/passa o dedo no vídeo
  const warmUp = () => {
    if (document.querySelector('link[data-wistia-preconnect]')) return;
    ["https://fast.wistia.com", "https://embed-ssl.wistia.com"].forEach((href) => {
      const l = document.createElement("link");
      l.rel = "preconnect";
      l.href = href;
      l.setAttribute("data-wistia-preconnect", "1");
      document.head.appendChild(l);
    });
  };

  return (
    <div
      ref={containerRef}
      className="rounded-lg overflow-hidden mb-2"
      style={{ aspectRatio: cssAspectRatio, minHeight: "180px" }}
    >
      {playing ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                wistia-player[media-id='${mediaId}']:not(:defined) {
                  background: center / cover no-repeat url('${thumb || `https://fast.wistia.com/embed/medias/${mediaId}/swatch`}');
                  display: block;
                  padding-top: ${paddingTop}%;
                }
              </style>
              <wistia-player media-id="${mediaId}" aspect="${aspect}" autoplay></wistia-player>
            `,
          }}
        />
      ) : (
        <button
          type="button"
          aria-label="Assistir ao vídeo"
          onClick={() => setPlaying(true)}
          onPointerEnter={warmUp}
          onTouchStart={warmUp}
          className="group relative block w-full h-full bg-muted"
          style={{ paddingTop: `${paddingTop}%` }}
        >
          {thumb && (
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <span className="absolute inset-0 bg-black/25" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex w-20 h-20 rounded-2xl bg-primary/60 animate-ping" />
              <span className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-primary shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="rounded-full bg-black/70 px-5 py-2 text-white text-base md:text-lg font-extrabold tracking-wide shadow-lg">
              ▶ {cta}
            </span>
            {ctaSub && <span className="text-white text-sm font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,.8)]">{ctaSub}</span>}
          </span>
        </button>
      )}
    </div>
  );
});

LazyWistiaVideo.displayName = "LazyWistiaVideo";

export default LazyWistiaVideo;
