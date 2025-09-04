import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

function UrlResultCard({ data }) {
  const { originalUrl, shortUrl, createdAt, expiresAt } = data;

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle2" color="text.secondary">Original URL:</Typography>
          <Typography variant="body2" sx={{ wordBreak: "break-all" }}>{originalUrl}</Typography>
          <Typography variant="subtitle2" color="text.secondary">Short URL:</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">{shortUrl}</Typography>
            <Button size="small" onClick={handleCopy}>Copy</Button>
          </Stack>
          <Typography variant="caption" color="text.secondary">Created: {createdAt}</Typography>
          <Typography variant="caption" color="text.secondary">Expires: {expiresAt}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UrlResultCard;
