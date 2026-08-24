/** Placeholder analytics until Sentry / analytics provider is wired up. */
export type SentryErrorRow = {
  id: string;
  title: string;
  level: "error" | "warning" | "info";
  count: number;
  lastSeen: string;
  route: string;
};

export type VisitorDay = {
  date: string;
  label: string;
  pageviews: number;
  uniqueVisitors: number;
};

export type DashboardAnalytics = {
  errors: SentryErrorRow[];
  visitors: VisitorDay[];
};

export function getDashboardAnalytics(): DashboardAnalytics {
  return {
    errors: [
      {
        id: "err-1",
        title: "Failed to fetch gallery images from Cloudinary",
        level: "error",
        count: 12,
        lastSeen: "2026-08-12T14:22:00Z",
        route: "/api/dashboard/gallery",
      },
      {
        id: "err-2",
        title: "Hydration mismatch in Navbar mobile sheet",
        level: "warning",
        count: 4,
        lastSeen: "2026-08-11T09:05:00Z",
        route: "/",
      },
      {
        id: "err-3",
        title: "Post slug not found — 404",
        level: "info",
        count: 28,
        lastSeen: "2026-08-12T11:40:00Z",
        route: "/aktuality/[slug]",
      },
      {
        id: "err-4",
        title: "Database connection timeout on statistics route",
        level: "error",
        count: 2,
        lastSeen: "2026-08-10T18:15:00Z",
        route: "/api/dashboard/statistics",
      },
    ],
    visitors: [
      { date: "2026-08-01", label: "1. 8.", pageviews: 142, uniqueVisitors: 89 },
      { date: "2026-08-02", label: "2. 8.", pageviews: 118, uniqueVisitors: 76 },
      { date: "2026-08-03", label: "3. 8.", pageviews: 165, uniqueVisitors: 102 },
      { date: "2026-08-04", label: "4. 8.", pageviews: 201, uniqueVisitors: 128 },
      { date: "2026-08-05", label: "5. 8.", pageviews: 178, uniqueVisitors: 115 },
      { date: "2026-08-06", label: "6. 8.", pageviews: 234, uniqueVisitors: 149 },
      { date: "2026-08-07", label: "7. 8.", pageviews: 256, uniqueVisitors: 162 },
      { date: "2026-08-08", label: "8. 8.", pageviews: 189, uniqueVisitors: 121 },
      { date: "2026-08-09", label: "9. 8.", pageviews: 172, uniqueVisitors: 108 },
      { date: "2026-08-10", label: "10. 8.", pageviews: 198, uniqueVisitors: 124 },
      { date: "2026-08-11", label: "11. 8.", pageviews: 221, uniqueVisitors: 138 },
      { date: "2026-08-12", label: "12. 8.", pageviews: 147, uniqueVisitors: 94 },
    ],
  };
}
