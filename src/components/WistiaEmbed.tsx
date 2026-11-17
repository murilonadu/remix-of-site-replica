import { useEffect, memo } from "react";

/** Player padrão da Wistia, igual ao código de incorporação (com a configuração feita na Wistia, ex.: autoplay). */
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
    add("https://fast.wistia.com/player.js");
    add(`https://fast.wistia.com/embed/${mediaId}.js`, true);
  }, [mediaId]);

  const pad = (100 / parseFloat(aspect)).toFixed(2);
  const html =
    `<style>wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:${pad}%; }</style>` +
    `<wistia-player media-id="${mediaId}" aspect="${aspect}"></wistia-player>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
});

WistiaEmbed.displayName = "WistiaEmbed";
export default WistiaEmbed;
