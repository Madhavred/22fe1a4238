import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function UrlShortenerForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onShorten({
        url,
        customCode: customCode.trim() || undefined,
        validity: validity ? Number(validity) : undefined,
      });
      setUrl("");
      setCustomCode("");
      setValidity("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} flexWrap="wrap">
      <TextField
        label="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        sx={{ flex: 2, minWidth: "250px" }}
      />
      <TextField
        label="Custom Code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        sx={{ flex: 1, minWidth: "150px" }}
      />
      <TextField
        label="Validity (minutes, optional)"
        value={validity}
        onChange={(e) => setValidity(e.target.value.replace(/[^0-9]/g, ""))}
        sx={{ flex: 1, minWidth: "180px" }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ flex: 1, minWidth: "100px" }}>
        Shorten
      </Button>
    </Box>
  );
}

export default UrlShortenerForm;
