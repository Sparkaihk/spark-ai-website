import { AnimatedFlowPath } from "@/components/home/animated-flow-path";

const inputPaths = [
  "M188 118 C270 118 292 220 390 238",
  "M188 168 C275 168 300 232 390 250",
  "M188 218 C285 218 305 244 390 262",
  "M188 268 C280 268 310 270 390 274",
  "M188 318 C280 318 310 296 390 286",
  "M188 368 C275 368 302 320 390 298",
  "M188 418 C270 418 295 340 390 310",
  "M188 468 C265 468 292 360 390 322",
];

const outputPaths = [
  "M610 238 C700 220 724 118 812 118",
  "M610 250 C704 232 730 168 812 168",
  "M610 262 C700 244 728 218 812 218",
  "M610 274 C700 270 730 268 812 268",
  "M610 286 C700 296 730 318 812 318",
  "M610 298 C700 320 730 368 812 368",
  "M610 310 C700 340 730 418 812 418",
  "M610 322 C700 360 730 468 812 468",
];

export function DataFlowDiagram() {
  return (
    <svg viewBox="0 0 1000 560" preserveAspectRatio="none" className="data-flow-diagram" aria-hidden="true">
      {inputPaths.map((path, index) => (
        <AnimatedFlowPath key={`input-${index}`} id={`input-flow-${index}`} d={path} duration={4.7 + index * 0.31} begin={index * -0.42} />
      ))}
      {outputPaths.map((path, index) => (
        <AnimatedFlowPath key={`output-${index}`} id={`output-flow-${index}`} d={path} duration={5.1 + index * 0.27} begin={index * -0.36 - 1.2} />
      ))}
    </svg>
  );
}
