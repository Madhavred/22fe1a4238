import { useState, useEffect } from "react";
import StatsTable from "../components/StatsTable";

const STORAGE_KEY = "shortenedUrlsHistory";

function StatisticsPage() {
  const [stats, setStats] = useState([]);

  // Helper to load current data from localStorage
  const loadStats = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // Add default clicks/clickDetails if missing
        const parsed = JSON.parse(stored).map(x => ({
          ...x,
          clicks: x.clicks ?? 0,
          clickDetails: x.clickDetails ?? [],
        }));
        setStats(parsed);
      } catch (err) {
        setStats([]);
      }
    } else {
      setStats([]);
    }
  };

  useEffect(() => {
    // On mount, and whenever the page/document is visible again - always load from localStorage
    loadStats();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        loadStats();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <StatsTable stats={stats} />;
}

export default StatisticsPage;
