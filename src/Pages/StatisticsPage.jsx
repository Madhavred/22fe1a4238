import StatsTable from "../components/StatsTable";

function StatisticsPage() {
  // Mock data for now
  const stats = [
    {
      shortUrl: "https://short.ly/abc123",
      createdAt: "2025-09-04 10:00",
      expiresAt: "2025-09-04 11:00",
      clicks: 3,
      clickDetails: [
        { time: "2025-09-04 10:05", source: "Google", location: "India" },
        { time: "2025-09-04 10:15", source: "Twitter", location: "USA" },
      ],
    },
  ];

  return <StatsTable stats={stats} />;
}

export default StatisticsPage;
