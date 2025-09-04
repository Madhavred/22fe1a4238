import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Collapse,
  IconButton,
  Box
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

function Row({ row }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.shortUrl}</TableCell>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell>{row.expiresAt}</TableCell>
        <TableCell>{row.clicks}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle2" gutterBottom>Click Details</Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.clickDetails && row.clickDetails.length ? row.clickDetails.map((rel, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{rel.time}</TableCell>
                      <TableCell>{rel.source}</TableCell>
                      <TableCell>{rel.location}</TableCell>
                    </TableRow>
                  )) : <TableRow><TableCell colSpan={3}>No details</TableCell></TableRow>}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function StatsTable({ stats }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Short URL</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Expires</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((row, idx) => <Row key={idx} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StatsTable;
