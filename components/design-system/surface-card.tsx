import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SurfaceCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  icon?: React.ReactNode;
};

export function SurfaceCard({
  className,
  children,
  title,
  icon,
  ...props
}: SurfaceCardProps) {
  return (
    <Card
      className={cn(
        "border-sky-100 bg-white shadow-spark-sm backdrop-blur",
        className,
      )}
      {...props}
    >
      {title || icon ? (
        <CardHeader>
          {icon ? <div className="text-primary">{icon}</div> : null}
          {title ? <CardTitle className="text-xl">{title}</CardTitle> : null}
        </CardHeader>
      ) : null}
      <CardContent className={cn(!title && !icon && "pt-6")}>{children}</CardContent>
    </Card>
  );
}
