import { useState, useEffect } from "react";
import StatsTable from "../components/StatsTable";

const STORAGE_KEY = "shortenedUrlsHistory";

function StatisticsPage() {
  const [stats, setStats] = useState([]);

  const loadStats = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
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
