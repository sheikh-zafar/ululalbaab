"use client"
import { useEffect, useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material"
import { format } from "date-fns"
import theme from "../src/styles/theme"

interface CalendarEvent {
  id: string
  summary?: string
  start: { dateTime?: string; date?: string }
  end: { dateTime?: string; date?: string }
}

const CalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/Events")
      const data = await response.json()
      setEvents(data.events)
    }

    fetchEvents()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant='h4'
        fontWeight='bold'
        gutterBottom
        sx={{ textAlign: "center", mt: 5, overflow: "hidden" }}
      >
        Weekly Schedule (Friday - Thursday)
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          p: 2,
          mt: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "primary.contrastText" }}>
                Event
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align='right'>
                Start Time
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align='right'>
                End Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.length > 0 ? (
              events.map((event: CalendarEvent) => (
                <TableRow key={event.id}>
                  <TableCell component='th' scope='row'>
                    {event.summary || "No Title"}
                  </TableCell>
                  <TableCell align='right'>
                    {format(
                      new Date(event.start.dateTime || event.start.date || ""),
                      "PPpp"
                    )}
                  </TableCell>
                  <TableCell align='right'>
                    {format(
                      new Date(event.end.dateTime || event.end.date || ""),
                      "PPpp"
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align='center'>
                  No events found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default CalendarEvents
