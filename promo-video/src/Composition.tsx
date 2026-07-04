import React from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { flip } from "@remotion/transitions/flip";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

export const WIDTH = 1920;
export const HEIGHT = 1080;
export const FPS = 30;

const introDuration = 170;
const cssDuration = 250;
const htmlDuration = 250;
const fusionDuration = 260;
const ctaDuration = 210;
const transitionDuration = 24;

export const DURATION_IN_FRAMES =
  introDuration +
  cssDuration +
  htmlDuration +
  fusionDuration +
  ctaDuration -
  transitionDuration * 4;

const palette = {
  bg: "#070908",
  panel: "#101410",
  ink: "#f7f2e8",
  muted: "#b9b3a5",
  dim: "#69665d",
  css: "#4fd6c7",
  cssDeep: "#126e68",
  html: "#60a5fa",
  htmlDeep: "#2563eb",
  warm: "#ff8b61",
  gold: "#e0b24f",
  line: "rgba(247, 242, 232, 0.14)",
};

const featureSets = {
  css: [
    "@container",
    ":has()",
    "oklch()",
    "@scope",
    "view-transition",
    "subgrid",
    "anchor-position",
    "scroll-driven",
  ],
  html: [
    "popover",
    "<dialog>",
    "<search>",
    "inert",
    "showPicker()",
    "import maps",
    "speculation rules",
    "hidden=until-found",
  ],
};

const cssCode = [
  "@container card (inline-size > 40rem) {",
  "  .feature-card {",
  "    grid-template-columns: 160px 1fr;",
  "    color: oklch(78% 0.15 190);",
  "  }",
  "}",
  "",
  ".item:has(input:checked) {",
  "  view-transition-name: selected-capability;",
  "}",
];

const htmlCode = [
  '<button popovertarget="quick-actions">',
  "  Actions",
  "</button>",
  '<div id="quick-actions" popover>',
  "  <search>...</search>",
  "</div>",
  "",
  '<dialog id="confirm">',
  '  <form method="dialog">...</form>',
  "</dialog>",
];

const sharedHighlights = [
  "Bilingual docs",
  "Generated from structured data",
  "Practical demos",
  "MDN + Can I Use links",
  "Maturity and support notes",
  "GitHub Pages ready",
];

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
const easeIn = Easing.bezier(0.7, 0, 0.84, 0);
const easeInOut = Easing.bezier(0.45, 0, 0.55, 1);
const popEase = Easing.bezier(0.34, 1.56, 0.64, 1);

const fillCenter: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
};

const textShadow = "0 18px 60px rgba(0, 0, 0, 0.34)";

function seconds(value: number, fps: number) {
  return Math.round(value * fps);
}

function smoothProgress(frame: number, start: number, duration: number, easing = easeOut) {
  return interpolate(frame, [start, start + duration], [0, 1], {
    ...clamp,
    easing,
  });
}

function windowProgress(frame: number, start: number, end: number) {
  const inProgress = smoothProgress(frame, start, 18);
  const outProgress = smoothProgress(frame, end - 18, 18, easeIn);
  return Math.max(0, inProgress - outProgress);
}

const panelBase: CSSProperties = {
  border: `1px solid ${palette.line}`,
  background: "rgba(13, 16, 14, 0.78)",
  boxShadow: "0 34px 90px rgba(0, 0, 0, 0.36)",
  backdropFilter: "blur(18px)",
};

function SceneShell({
  children,
  tone,
  label,
}: {
  children: ReactNode;
  tone: "css" | "html" | "fusion";
  label: string;
}) {
  const frame = useCurrentFrame();
  const accent = tone === "html" ? palette.html : tone === "css" ? palette.css : palette.gold;
  const secondAccent = tone === "html" ? palette.htmlDeep : tone === "css" ? palette.warm : palette.css;
  const drift = interpolate(frame % 180, [0, 180], [0, 1]);
  const scan = interpolate(frame % 120, [0, 120], [-120, 1160]);

  return (
    <AbsoluteFill style={{ overflow: "hidden", background: palette.bg, color: palette.ink }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            `radial-gradient(circle at ${22 + drift * 8}% ${18 + drift * 10}%, ${accent}2b, transparent 28%),` +
            `radial-gradient(circle at ${78 - drift * 10}% ${72 - drift * 8}%, ${secondAccent}26, transparent 32%),` +
            "linear-gradient(145deg, #070908 0%, #0d1112 52%, #080908 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.24,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          transform: `translate(${interpolate(frame, [0, 300], [-28, 28])}px, ${interpolate(
            frame,
            [0, 300],
            [-18, 18],
          )}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scan,
          height: 180,
          background: `linear-gradient(180deg, transparent, ${accent}20, transparent)`,
          mixBlendMode: "screen",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 48,
          top: 34,
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: palette.muted,
          fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
          fontSize: 22,
          letterSpacing: 0,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            background: accent,
            boxShadow: `0 0 24px ${accent}`,
          }}
        />
        <span>{label}</span>
      </div>
      {children}
    </AbsoluteFill>
  );
}

function KineticWord({
  children,
  color,
  delay,
  size = 124,
}: {
  children: ReactNode;
  color: string;
  delay: number;
  size?: number;
}) {
  const frame = useCurrentFrame();
  const enter = smoothProgress(frame, delay, 24, popEase);
  const shimmer = interpolate(frame % 80, [0, 80], [-70, 170]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        color,
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [70, 0])}px) scale(${interpolate(
          enter,
          [0, 1],
          [0.88, 1],
        )})`,
        textShadow,
        fontSize: size,
        lineHeight: 0.88,
        fontWeight: 900,
        letterSpacing: 0,
      }}
    >
      {children}
      <span
        style={{
          position: "absolute",
          inset: 0,
          color: "transparent",
          background: `linear-gradient(105deg, transparent ${shimmer - 28}%, rgba(255,255,255,0.78) ${shimmer}%, transparent ${
            shimmer + 28
          }%)`,
          WebkitBackgroundClip: "text",
          mixBlendMode: "screen",
        }}
      >
        {children}
      </span>
    </span>
  );
}

function Pill({ children, tone = palette.css }: { children: ReactNode; tone?: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 44,
        padding: "0 18px",
        border: `1px solid ${tone}66`,
        background: `${tone}1d`,
        color: tone,
        fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
        fontSize: 19,
        fontWeight: 800,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function BrowserFrame({
  title,
  subtitle,
  accent,
  children,
  style,
}: {
  title: string;
  subtitle: string;
  accent: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        ...panelBase,
        width: 720,
        borderRadius: 24,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
          padding: "0 24px",
          borderBottom: `1px solid ${palette.line}`,
          background: "rgba(255, 255, 255, 0.035)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {[palette.warm, palette.gold, accent].map((item) => (
            <span
              key={item}
              style={{
                width: 13,
                height: 13,
                borderRadius: 999,
                background: item,
                boxShadow: `0 0 18px ${item}66`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            color: palette.muted,
            fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
            fontSize: 17,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div style={{ padding: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 22,
          }}
        >
          <strong style={{ fontSize: 38, letterSpacing: 0 }}>{title}</strong>
          <Pill tone={accent}>live guide</Pill>
        </div>
        {children}
      </div>
    </div>
  );
}

function Metric({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  const frame = useCurrentFrame();
  const reveal = smoothProgress(frame, delay, 18, popEase);

  return (
    <div
      style={{
        ...panelBase,
        minWidth: 190,
        padding: "22px 24px",
        opacity: reveal,
        transform: `translateY(${interpolate(reveal, [0, 1], [30, 0])}px)`,
      }}
    >
      <div
        style={{
          color,
          fontSize: 56,
          lineHeight: 1,
          fontWeight: 900,
          letterSpacing: 0,
          textShadow: `0 0 32px ${color}55`,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 10,
          color: palette.muted,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 0,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CodePanel({
  lines,
  accent,
  delay = 0,
}: {
  lines: string[];
  accent: string;
  delay?: number;
}) {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        ...panelBase,
        padding: 24,
        width: 680,
        fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
        fontSize: 24,
        lineHeight: 1.55,
      }}
    >
      {lines.map((line, index) => {
        const progress = smoothProgress(frame, delay + index * 4, 12);
        const isKeyword = line.includes("@") || line.includes("<") || line.includes("popover") || line.includes("dialog");
        return (
          <div
            key={`${line}-${index}`}
            style={{
              display: "flex",
              gap: 18,
              opacity: progress,
              transform: `translateX(${interpolate(progress, [0, 1], [-28, 0])}px)`,
              whiteSpace: "pre",
            }}
          >
            <span style={{ color: palette.dim, width: 32, textAlign: "right" }}>{index + 1}</span>
            <span style={{ color: isKeyword ? accent : palette.ink }}>{line}</span>
          </div>
        );
      })}
    </div>
  );
}

function FeatureConstellation({
  items,
  accent,
  start = 0,
  radius = 260,
}: {
  items: string[];
  accent: string;
  start?: number;
  radius?: number;
}) {
  const frame = useCurrentFrame();
  const spin = interpolate(frame, [0, 300], [0, Math.PI * 1.4]);

  return (
    <div style={{ position: "relative", width: radius * 2 + 240, height: radius * 2 + 160 }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: radius * 1.42,
          height: radius * 1.42,
          border: `1px solid ${accent}33`,
          transform: "translate(-50%, -50%) rotate(45deg)",
          boxShadow: `0 0 80px ${accent}18 inset`,
        }}
      />
      {items.map((item, index) => {
        const angle = (Math.PI * 2 * index) / items.length + spin * 0.08;
        const reveal = smoothProgress(frame, start + index * 5, 16, popEase);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.66);
        return (
          <div
            key={item}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              opacity: reveal,
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${interpolate(
                reveal,
                [0, 1],
                [0.6, 1],
              )})`,
            }}
          >
            <Pill tone={accent}>{item}</Pill>
          </div>
        );
      })}
    </div>
  );
}

function BrowserCapabilityList({
  accent,
  rows,
}: {
  accent: string;
  rows: { title: string; meta: string }[];
}) {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "grid", gap: 14 }}>
      {rows.map((row, index) => {
        const reveal = smoothProgress(frame, 24 + index * 6, 18);
        return (
          <div
            key={row.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 18,
              minHeight: 66,
              padding: "0 18px",
              border: `1px solid ${palette.line}`,
              background: `linear-gradient(90deg, ${accent}1b, rgba(255,255,255,0.025))`,
              opacity: reveal,
              transform: `translateX(${interpolate(reveal, [0, 1], [38, 0])}px)`,
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 850 }}>{row.title}</span>
            <span
              style={{
                color: accent,
                fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              {row.meta}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function IntroScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleShift = interpolate(frame, [seconds(0, fps), seconds(4.4, fps)], [0, -28], {
    ...clamp,
    easing: easeInOut,
  });
  const subtitle = smoothProgress(frame, 42, 22);
  const split = smoothProgress(frame, 76, 30);
  const pulse = interpolate(frame % 90, [0, 45, 90], [0.3, 1, 0.3]);

  return (
    <SceneShell tone="fusion" label="MODERN WEB PLATFORM FIELD GUIDE">
      <div style={fillCenter}>
        <div style={{ width: 1500, transform: `translateY(${titleShift}px)` }}>
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
              <KineticWord color={palette.css} delay={6} size={156}>
                After CSS3
              </KineticWord>
              <span
                style={{
                  color: palette.dim,
                  fontSize: 94,
                  fontWeight: 300,
                  opacity: smoothProgress(frame, 24, 14),
                }}
              >
                +
              </span>
              <KineticWord color={palette.html} delay={34} size={156}>
                After HTML5
              </KineticWord>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                opacity: subtitle,
                transform: `translateY(${interpolate(subtitle, [0, 1], [34, 0])}px)`,
              }}
            >
              <Pill tone={palette.gold}>现代 Web 能力导航</Pill>
              <span style={{ color: palette.muted, fontSize: 34, fontWeight: 700 }}>
                Practical maps for the platform after the branding eras.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 180,
          bottom: 148,
          width: 520,
          height: 230,
          ...panelBase,
          opacity: split,
          transform: `translateX(${interpolate(split, [0, 1], [-90, 0])}px) rotate(${interpolate(
            split,
            [0, 1],
            [-6, -2],
          )}deg)`,
        }}
      >
        <div style={{ padding: 26, color: palette.css, fontSize: 30, fontWeight: 900 }}>CSS capability graph</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, padding: "0 26px" }}>
          {featureSets.css.slice(0, 4).map((item) => (
            <Pill key={item} tone={palette.css}>
              {item}
            </Pill>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 180,
          bottom: 142,
          width: 520,
          height: 230,
          ...panelBase,
          opacity: split,
          transform: `translateX(${interpolate(split, [0, 1], [90, 0])}px) rotate(${interpolate(
            split,
            [0, 1],
            [6, 2],
          )}deg)`,
        }}
      >
        <div style={{ padding: 26, color: palette.html, fontSize: 30, fontWeight: 900 }}>HTML feature specimens</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, padding: "0 26px" }}>
          {featureSets.html.slice(0, 3).map((item) => (
            <Pill key={item} tone={palette.html}>
              {item}
            </Pill>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 760,
          height: 760,
          border: `2px solid rgba(224, 178, 79, ${0.08 + pulse * 0.1})`,
          transform: "translate(-50%, -50%) rotate(45deg)",
          boxShadow: `0 0 ${120 + pulse * 80}px rgba(224, 178, 79, 0.16)`,
        }}
      />
    </SceneShell>
  );
}

function CssScene() {
  const frame = useCurrentFrame();
  const hero = smoothProgress(frame, 8, 28);
  const constellation = smoothProgress(frame, 92, 34);

  return (
    <SceneShell tone="css" label="AFTER CSS3 / CSS CAPABILITIES">
      <div
        style={{
          position: "absolute",
          left: 92,
          top: 150,
          width: 760,
          opacity: hero,
          transform: `translateX(${interpolate(hero, [0, 1], [-70, 0])}px)`,
        }}
      >
        <div style={{ color: palette.css, fontSize: 34, fontWeight: 900, marginBottom: 18 }}>After CSS3</div>
        <h1
          style={{
            margin: 0,
            color: palette.ink,
            fontSize: 104,
            lineHeight: 0.95,
            letterSpacing: 0,
            textShadow,
          }}
        >
          CSS is now
          <br />
          a capability map.
        </h1>
        <p style={{ margin: "30px 0 0", color: palette.muted, fontSize: 32, lineHeight: 1.42, fontWeight: 650 }}>
          从模块化演进里整理现代 CSS：说明、Demo、MDN、Can I Use 和成熟度判断集中到一个入口。
        </p>
        <div style={{ display: "flex", gap: 18, marginTop: 38 }}>
          <Metric value="14" label="capability areas" color={palette.css} delay={28} />
          <Metric value="186" label="feature pages" color={palette.gold} delay={38} />
          <Metric value="2" label="languages" color={palette.warm} delay={48} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 90,
          top: 128,
          opacity: smoothProgress(frame, 30, 28),
          transform: `perspective(1200px) rotateY(${interpolate(hero, [0, 1], [-20, -7])}deg) rotateX(5deg)`,
        }}
      >
        <BrowserFrame
          title="Modern CSS Guide"
          subtitle="afterCss3"
          accent={palette.css}
          style={{ width: 760 }}
        >
          <BrowserCapabilityList
            accent={palette.css}
            rows={[
              { title: "Container queries", meta: "@container" },
              { title: "Relational selectors", meta: ":has()" },
              { title: "Color systems", meta: "oklch()" },
              { title: "View transitions", meta: "API + CSS" },
              { title: "Anchor positioning", meta: "floating UI" },
            ]}
          />
        </BrowserFrame>
      </div>
      <div
        style={{
          position: "absolute",
          left: 110,
          bottom: 84,
          opacity: smoothProgress(frame, 78, 22),
        }}
      >
        <CodePanel lines={cssCode} accent={palette.css} delay={80} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 106,
          bottom: 42,
          opacity: constellation,
          transform: `scale(${interpolate(constellation, [0, 1], [0.82, 1])})`,
        }}
      >
        <FeatureConstellation items={featureSets.css} accent={palette.css} start={110} radius={230} />
      </div>
    </SceneShell>
  );
}

function HtmlScene() {
  const frame = useCurrentFrame();
  const hero = smoothProgress(frame, 8, 30);
  const tagProgress = smoothProgress(frame, 108, 24);

  return (
    <SceneShell tone="html" label="AFTER HTML5 / HTML CAPABILITIES">
      <div
        style={{
          position: "absolute",
          right: 92,
          top: 146,
          width: 770,
          opacity: hero,
          transform: `translateX(${interpolate(hero, [0, 1], [70, 0])}px)`,
        }}
      >
        <div style={{ color: palette.html, fontSize: 34, fontWeight: 900, marginBottom: 18 }}>After HTML5</div>
        <h1
          style={{
            margin: 0,
            color: palette.ink,
            fontSize: 102,
            lineHeight: 0.95,
            letterSpacing: 0,
            textShadow,
          }}
        >
          Native HTML
          <br />
          deserves better demos.
        </h1>
        <p style={{ margin: "30px 0 0", color: palette.muted, fontSize: 32, lineHeight: 1.42, fontWeight: 650 }}>
          Not an MDN mirror. It answers what the feature solves, how it behaves, and when it is production-ready.
        </p>
        <div style={{ display: "flex", gap: 18, marginTop: 38 }}>
          <Metric value="30" label="feature specimens" color={palette.html} delay={30} />
          <Metric value="10+" label="domains" color={palette.gold} delay={40} />
          <Metric value="2" label="routes" color={palette.css} delay={50} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 88,
          top: 126,
          opacity: smoothProgress(frame, 24, 28),
          transform: `perspective(1200px) rotateY(${interpolate(hero, [0, 1], [18, 6])}deg) rotateX(5deg)`,
        }}
      >
        <BrowserFrame title="HTML Feature Specimens" subtitle="afterHtml5" accent={palette.html} style={{ width: 760 }}>
          <BrowserCapabilityList
            accent={palette.html}
            rows={[
              { title: "Popover command tray", meta: "top layer" },
              { title: "Dialog requestClose", meta: "modal flow" },
              { title: "Exclusive details", meta: "no JS" },
              { title: "Search element", meta: "landmark" },
              { title: "Import maps", meta: "browser-owned" },
            ]}
          />
        </BrowserFrame>
      </div>
      <div
        style={{
          position: "absolute",
          right: 118,
          bottom: 82,
          opacity: smoothProgress(frame, 76, 24),
        }}
      >
        <CodePanel lines={htmlCode} accent={palette.html} delay={78} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 116,
          bottom: 62,
          opacity: tagProgress,
          transform: `translateY(${interpolate(tagProgress, [0, 1], [48, 0])}px)`,
        }}
      >
        <FeatureConstellation items={featureSets.html} accent={palette.html} start={118} radius={230} />
      </div>
    </SceneShell>
  );
}

function DataRail({
  title,
  color,
  side,
  items,
}: {
  title: string;
  color: string;
  side: "left" | "right";
  items: string[];
}) {
  const frame = useCurrentFrame();
  const reveal = smoothProgress(frame, side === "left" ? 10 : 28, 28);
  const x = side === "left" ? interpolate(reveal, [0, 1], [-110, 0]) : interpolate(reveal, [0, 1], [110, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 184,
        [side]: 90,
        width: 720,
        opacity: reveal,
        transform: `translateX(${x}px)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <strong style={{ color, fontSize: 42 }}>{title}</strong>
        <Pill tone={color}>structured source</Pill>
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {items.map((item, index) => {
          const row = smoothProgress(frame, 44 + index * 6, 18);
          return (
            <div
              key={item}
              style={{
                minHeight: 72,
                padding: "0 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ...panelBase,
                opacity: row,
                transform: `translateY(${interpolate(row, [0, 1], [26, 0])}px)`,
              }}
            >
              <span style={{ fontSize: 25, fontWeight: 800 }}>{item}</span>
              <span
                style={{
                  width: 42,
                  height: 3,
                  background: color,
                  boxShadow: `0 0 24px ${color}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FusionScene() {
  const frame = useCurrentFrame();
  const merge = smoothProgress(frame, 110, 48, easeInOut);
  const headline = smoothProgress(frame, 152, 34);
  const card = smoothProgress(frame, 184, 26, popEase);

  return (
    <SceneShell tone="fusion" label="TWO GUIDES / ONE PLATFORM STORY">
      <DataRail
        title="CSS side"
        color={palette.css}
        side="left"
        items={["layout and positioning", "selectors and states", "color and typography", "animation and scroll"]}
      />
      <DataRail
        title="HTML side"
        color={palette.html}
        side="right"
        items={["native interaction", "forms and validation", "semantics and editing", "media and loading"]}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 150,
          bottom: 160,
          width: 4,
          background: `linear-gradient(${palette.css}, ${palette.gold}, ${palette.html})`,
          opacity: merge,
          transform: `translateX(-50%) scaleY(${merge})`,
          boxShadow: "0 0 64px rgba(224, 178, 79, 0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 526,
          width: interpolate(merge, [0, 1], [0, 940]),
          height: 4,
          background: `linear-gradient(90deg, ${palette.css}, ${palette.gold}, ${palette.html})`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 68px rgba(224, 178, 79, 0.46)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 690,
          width: 1360,
          opacity: headline,
          transform: `translate(-50%, ${interpolate(headline, [0, 1], [54, 0])}px)`,
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 80, lineHeight: 1, letterSpacing: 0, textShadow }}>
          One map for styling. One map for structure.
        </h2>
        <p style={{ margin: "22px 0 0", color: palette.muted, fontSize: 34, fontWeight: 700 }}>
          Together: a practical field guide for modern Web Platform capabilities.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 46,
          width: 1510,
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 14,
          opacity: card,
          transform: `translateX(-50%) translateY(${interpolate(card, [0, 1], [42, 0])}px)`,
        }}
      >
        {sharedHighlights.map((item, index) => (
          <div
            key={item}
            style={{
              ...panelBase,
              minHeight: 118,
              padding: "20px 16px",
              display: "grid",
              alignContent: "center",
              textAlign: "center",
              borderColor: index % 2 === 0 ? `${palette.css}55` : `${palette.html}55`,
            }}
          >
            <span style={{ color: index % 2 === 0 ? palette.css : palette.html, fontSize: 19, fontWeight: 900 }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong style={{ marginTop: 8, fontSize: 20, lineHeight: 1.2 }}>{item}</strong>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}

function UrlCard({
  title,
  url,
  color,
  delay,
}: {
  title: string;
  url: string;
  color: string;
  delay: number;
}) {
  const frame = useCurrentFrame();
  const reveal = smoothProgress(frame, delay, 26, popEase);

  return (
    <div
      style={{
        ...panelBase,
        minHeight: 178,
        padding: "30px 34px",
        opacity: reveal,
        transform: `translateY(${interpolate(reveal, [0, 1], [54, 0])}px) scale(${interpolate(
          reveal,
          [0, 1],
          [0.92, 1],
        )})`,
      }}
    >
      <div style={{ color, fontSize: 38, fontWeight: 950, letterSpacing: 0 }}>{title}</div>
      <div
        style={{
          marginTop: 18,
          color: palette.ink,
          fontFamily: "SFMono-Regular, ui-monospace, Menlo, monospace",
          fontSize: 25,
        }}
      >
        {url}
      </div>
    </div>
  );
}

function CtaScene() {
  const frame = useCurrentFrame();
  const headline = smoothProgress(frame, 6, 34, popEase);
  const urls = smoothProgress(frame, 72, 28);
  const flare = interpolate(frame % 90, [0, 45, 90], [0.35, 1, 0.35]);
  const stamp = windowProgress(frame, 132, 198);

  return (
    <SceneShell tone="fusion" label="EXPLORE / MODERN WEB CAPABILITIES">
      <div style={fillCenter}>
        <div style={{ width: 1440, textAlign: "center", transform: `translateY(${interpolate(urls, [0, 1], [-74, -150])}px)` }}>
          <h2
            style={{
              margin: 0,
              fontSize: 118,
              lineHeight: 0.92,
              letterSpacing: 0,
              opacity: headline,
              transform: `scale(${interpolate(headline, [0, 1], [0.88, 1])})`,
              textShadow,
            }}
          >
            Explore the platform
            <br />
            after the buzzwords.
          </h2>
          <p
            style={{
              margin: "32px auto 0",
              maxWidth: 1040,
              color: palette.muted,
              fontSize: 34,
              lineHeight: 1.38,
              fontWeight: 720,
              opacity: smoothProgress(frame, 36, 24),
            }}
          >
            Two lightweight knowledge bases for teams deciding what the browser can do now.
          </p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 210,
          width: 1360,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 26,
          opacity: urls,
          transform: "translateX(-50%)",
        }}
      >
        <UrlCard title="After CSS3" url="cheshirejcat.github.io/afterCss3" color={palette.css} delay={82} />
        <UrlCard title="After HTML5" url="cheshirejcat.github.io/afterHtml5" color={palette.html} delay={92} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 74,
          width: 860,
          height: 76,
          display: "grid",
          placeItems: "center",
          border: `1px solid rgba(224,178,79,${0.25 + flare * 0.25})`,
          background: "rgba(224,178,79,0.08)",
          color: palette.gold,
          fontSize: 24,
          fontWeight: 900,
          letterSpacing: 0,
          opacity: stamp,
          transform: `translateX(-50%) scale(${interpolate(stamp, [0, 1], [0.86, 1])})`,
          boxShadow: `0 0 ${38 + flare * 44}px rgba(224,178,79,0.22)`,
        }}
      >
        Practical docs. Real demos. Official references.
      </div>
    </SceneShell>
  );
}

function TransitionFlash({ color }: { color: string }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, seconds(0.28, fps), seconds(0.7, fps)], [0, 0.62, 0], clamp);
  const x = interpolate(frame, [0, seconds(0.7, fps)], [-420, WIDTH + 420], {
    ...clamp,
    easing: easeInOut,
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none", opacity }}>
      <div
        style={{
          position: "absolute",
          top: -220,
          left: x,
          width: 360,
          height: HEIGHT + 440,
          background: `linear-gradient(90deg, transparent, ${color}, white, ${color}, transparent)`,
          transform: "skewX(-18deg)",
          filter: "blur(12px)",
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
}

export const AfterWebPlatformPromo: React.FC = () => {
  const { fps } = useVideoConfig();
  const fast = linearTiming({ durationInFrames: transitionDuration });
  const soft = springTiming({
    config: { damping: 190, stiffness: 140, mass: 0.8 },
    durationInFrames: transitionDuration,
  });

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={introDuration}>
        <IntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Overlay durationInFrames={seconds(0.7, fps)} offset={-4}>
        <TransitionFlash color={palette.gold} />
      </TransitionSeries.Overlay>
      <TransitionSeries.Sequence durationInFrames={cssDuration}>
        <CssScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={fast} />
      <TransitionSeries.Sequence durationInFrames={htmlDuration}>
        <HtmlScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={flip()} timing={soft} />
      <TransitionSeries.Sequence durationInFrames={fusionDuration}>
        <FusionScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={fast} />
      <TransitionSeries.Sequence durationInFrames={ctaDuration}>
        <CtaScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 12 })} />
      <TransitionSeries.Sequence durationInFrames={12}>
        <AbsoluteFill style={{ background: palette.bg }} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
