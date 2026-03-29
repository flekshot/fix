import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const routeConfig: Record<string, { text: string; color: [number, number, number] }> = {
  "/":               { text: "REPUBLIC · АРМИЯ · ROTR · ВАР · ", color: [0, 212, 255] },
  "/charter":        { text: "УСТАВ · ПРАВИЛА · АРМИЯ · ПОРЯДОК · ", color: [0, 212, 255] },
  "/high-command":   { text: "КОМАНДОВАНИЕ · ГЕНЕРАЛ · ПРИКАЗ · ", color: [0, 212, 255] },
  "/piloting":       { text: "ПИЛОТ · НЕБО · ПОЛЁТ · КРЫЛО · ЗВЁЗДЫ · ", color: [56, 189, 248] },
  "/engineering":    { text: "ИНЖЕНЕР · ТЕХНИКА · МЕХАНИК · РЕМОНТ · ", color: [245, 158, 11] },
  "/medical":        { text: "МЕДИК · ЛЕЧЕНИЕ · ЗДОРОВЬЕ · ЖИЗНЬ · ", color: [34, 197, 94] },
  "/guard":          { text: "ГВАРДИЯ · КОРУСАНТ · ЗАЩИТА · ПОРЯДОК · ", color: [212, 168, 67] },
  "/ghost":          { text: "GHOST · ТЕНЬ · РАЗВЕДКА · МИССИЯ · ", color: [100, 116, 139] },
  "/shock-troopers": { text: "УДАРНЫЙ · ШТУРМ · АТАКА · КЛОН · ФРОНТ · ", color: [239, 68, 68] },
  "/mercenaries":    { text: "НАЁМНИК · МАНДАЛОР · КОНТРАКТ · САБРЕ · ", color: [148, 163, 184] },
  "/sob":            { text: "SOB · СПЕЦОПЕРАЦИЯ · ЭЛИТА · БРИГАДА · ", color: [168, 85, 247] },
  "/jedi-code":      { text: "СИЛА · МИР · ДЖЕДАЙ · КОДЕКС · ПОКОЙ · ", color: [123, 97, 255] },
  "/jedi-guardian":  { text: "ЗАЩИТНИК · МЕЧ · СИЛА · ДЖЕДАЙ · БИТВА · ", color: [123, 97, 255] },
  "/jedi-consular":  { text: "КОНСУЛ · МУДРОСТЬ · СИЛА · ОРДЕН · ", color: [123, 97, 255] },
  "/jedi-sentinel":  { text: "СТРАЖ · БАЛАНС · СИЛА · ОРДЕН · РАВНОВЕСИЕ · ", color: [123, 97, 255] },
};

const WAVE_COUNT = 14;

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pathname } = useLocation();
  const animRef = useRef<number>(0);
  const fadeRef = useRef(0);

  useEffect(() => {
    fadeRef.current = 0;
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cfg = routeConfig[pathname] ?? routeConfig["/"];
    const [r, g, b] = cfg.color;

    // Wave parameters — computed once
    const waves = Array.from({ length: WAVE_COUNT }, (_, i) => {
      const mid = WAVE_COUNT / 2;
      const distFromMid = Math.abs(i - mid) / mid; // 0=center, 1=edge
      return {
        baseYRatio: (i + 1) / (WAVE_COUNT + 1),
        amplitude: 18 + (1 - distFromMid) * 22 + Math.sin(i * 1.8) * 8,
        frequency: 0.005 + i * 0.0003,
        speed: 0.35 + i * 0.025,
        // center lines are brighter
        alpha: 0.018 + (1 - distFromMid) * 0.022,
        fontSize: 7 + (i % 3),
        phase: i * 0.9,
      };
    });

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.007;

      // Fade in on route change
      fadeRef.current = Math.min(1, fadeRef.current + 0.015);

      waves.forEach((wave) => {
        const baseY = canvas.height * wave.baseYRatio;
        const charW = wave.fontSize * 0.78;
        const scrollX = (time * wave.speed * 55) % (cfg.text.length * charW);

        ctx.save();
        ctx.globalAlpha = wave.alpha * fadeRef.current;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.font = `600 ${wave.fontSize}px Orbitron, monospace`;
        ctx.textBaseline = "middle";

        let ci = 0;
        let x = -scrollX;
        while (x < canvas.width + 80) {
          if (x > -40) {
            const char = cfg.text[ci % cfg.text.length];
            const y = baseY + wave.amplitude * Math.sin(wave.frequency * (x + scrollX) + wave.phase);
            const slope = wave.amplitude * wave.frequency * Math.cos(wave.frequency * (x + scrollX) + wave.phase);

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.atan(slope));
            ctx.fillText(char, 0, 0);
            ctx.restore();
          }
          x += charW;
          ci++;
        }
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
