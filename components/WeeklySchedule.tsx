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
  Container,
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
      <Container sx={{mb: 20}}> 
        <h6 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-base xxs:text-2xl md:text-4xl font-extrabold font-sans">
        Weekly Schedule (Friday - Thursday)
      </h6>
      <hr className="bg-bgcolor text-2xl" />

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
            <TableRow sx={{ backgroundColor: "#ebe6d3" }}>
              <TableCell sx={{ color: "#6c6c6c" }}>
                Event
              </TableCell>
              <TableCell sx={{ color: "#6c6c6c" }} align='right'>
                Start Time
              </TableCell>
              <TableCell sx={{ color: "#6c6c6c" }} align='right'>
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
      </Container>
      
    </ThemeProvider>
  )
}

export default CalendarEvents
