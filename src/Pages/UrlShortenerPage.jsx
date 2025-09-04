import { useState, useEffect } from "react";
import UrlShortenerForm from "../components/UrlShortenerForm";
import UrlResultCard from "../components/UrlResultCard";
import { Grid } from "@mui/material";

const STORAGE_KEY = "shortenedUrlsHistory";

function UrlShortenerPage() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setShortenedUrls(JSON.parse(stored));
      } catch (e) {
        // Corrupted storage data fallback
        setShortenedUrls([]);
      }
    }
  }, []);

  // Update localStorage whenever shortenedUrls changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleShorten = (urlData) => {
    // Generate fake short URL
    const shortcode = urlData.customCode || Math.random().toString(36).substring(7);
    const shortUrl = `https://short.ly/${shortcode}`;
    const createdAt = new Date().toLocaleString();
    const expiresAt = urlData.validity
      ? new Date(Date.now() + urlData.validity * 60000).toLocaleString()
      : "Never";

    const newEntry = {
      originalUrl: urlData.url,
      shortUrl,
      createdAt,
      expiresAt,
    };

    setShortenedUrls([...shortenedUrls, newEntry]);
  };

  return (
    <>
      <UrlShortenerForm onShorten={handleShorten} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {shortenedUrls.length === 0 && (
          <Grid item xs={12}>
            No URLs have been shortened yet.
          </Grid>
        )}
        {shortenedUrls.slice().reverse().map((data, index) => (
          <Grid item xs={12} md={6} key={index}>
            <UrlResultCard data={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default UrlShortenerPage;
