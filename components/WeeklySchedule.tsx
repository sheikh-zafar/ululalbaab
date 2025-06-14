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
      <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8"> 
        <h2 className="text-dustygray xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl font-extrabold font-poppins">
        Weekly Schedule 
      </h2>
      <h6 className="text-black xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl pb-5 font-sans">(Friday - Thursday)</h6>
      <hr className="bg-bgcolor text-2xl" />

      <TableContainer
        component={Paper}
        sx={{
          p: 2,
          mt: 3,
          display: "flex",
          justifyContent: "center",
          border: "2px",
          borderStyle: "solid",
          borderRadius: "0px",
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
      </div>
      
    </ThemeProvider>
  )
}

export default CalendarEvents
