type AnimatedFlowPathProps = {
  id: string;
  d: string;
  duration: number;
  begin: number;
  direction?: "forward" | "reverse";
};

export function AnimatedFlowPath({ id, d, duration, begin, direction = "forward" }: AnimatedFlowPathProps) {
  const motionPath = direction === "reverse" ? d.split(" ").reverse().join(" ") : d;

  return (
    <g className="flow-path-group">
      <path id={id} d={d} className="flow-path-base" />
      <path d={d} className="flow-path-highlight" />
      <circle r="3" className="flow-path-dot">
        <animateMotion dur={`${duration}s`} begin={`${begin}s`} repeatCount="indefinite" path={motionPath} />
      </circle>
    </g>
  );
}
