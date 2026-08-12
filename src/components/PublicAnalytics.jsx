"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import DeferredGoogleAnalytics from "@/components/DeferredGoogleAnalytics";

const VercelAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((module) => module.Analytics),
  { ssr: false },
);
const VercelSpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/react").then(
      (module) => module.SpeedInsights,
    ),
  { ssr: false },
);

export default function PublicAnalytics({
  enableVercelAnalytics,
  googleAnalyticsId,
}) {
  const pathname = usePathname();
  const isExcludedFromGA = pathname.startsWith("/admin");

  return (
    <>
      {googleAnalyticsId && !isExcludedFromGA && (
        <DeferredGoogleAnalytics measurementId={googleAnalyticsId} />
      )}
      <VercelAnalytics />
      {enableVercelAnalytics && <VercelSpeedInsights />}
    </>
  );
}
