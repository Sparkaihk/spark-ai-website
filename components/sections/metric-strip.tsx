import { Section } from "@/components/design-system/section";
import { cn } from "@/lib/utils";

export type MetricItem = {
  value: string;
  label: string;
};

export function MetricStrip({
  metrics,
  className,
}: {
  metrics: MetricItem[];
  className?: string;
}) {
  return (
    <Section tone="inset" className={cn("py-10 sm:py-12", className)}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-spark-surface-1 p-6">
            <p className="text-3xl font-semibold tracking-normal text-foreground">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
