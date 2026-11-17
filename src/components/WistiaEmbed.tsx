import { useEffect, memo } from "react";

/**
 * Player padrão da Wistia (mesmo código de incorporação, com a configuração feita na Wistia, ex.: autoplay).
 * O espaço do vídeo é reservado desde o início (sem a página "pular"), e os scripts da Wistia
 * só são carregados logo depois que a página termina de abrir, para não atrasar a primeira tela.
 */
const WistiaEmbed = memo(({ mediaId, aspect = "0.5625" }: { mediaId: string; aspect?: string }) => {
  useEffect(() => {
    const add = (src: string, module = false) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      if (module) s.type = "module";
      document.head.appendChild(s);
    };
    const load = () => {
      add("https://fast.wistia.com/player.js");
      add(`https://fast.wistia.com/embed/${mediaId}.js`, true);
    };
    const start = () => {
      const ric = (window as any).requestIdleCallback as ((cb: () => void, o?: { timeout: number }) => number) | undefined;
      if (ric) ric(load, { timeout: 1200 });
      else setTimeout(load, 300);
    };
    if (document.readyState === "complete") start();
    else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, [mediaId]);

  const a = parseFloat(aspect);
  const html =
    `<style>wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:${(100 / a).toFixed(2)}%; }</style>` +
    `<wistia-player media-id="${mediaId}" aspect="${aspect}" style="position:absolute;inset:0;width:100%;height:100%"></wistia-player>`;
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: `${a}` }}>
      <div style={{ position: "absolute", inset: 0 }} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
});

WistiaEmbed.displayName = "WistiaEmbed";
export default WistiaEmbed;
