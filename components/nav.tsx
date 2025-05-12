"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navItems = ["Home", "Courses", "About", "Contact", "Schedule"]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: "#ebe6d3" }}>
        <Toolbar>
          {/* Logo / Brand Name */}
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, fontWeight: 700, color: "#6c6c6c" }}
          >
            فضيلة الشيخ ظفر الحسن مدني حفظه اللّه
          </Typography>

          {/* Desktop Navigation */}
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component={Link}
                  href={`/${item.toLowerCase()}`}
                  sx={{ color: "#6c6c6c" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Mobile Menu Icon */}
          <IconButton
            color='inherit'
            edge='end'
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor='right' open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250, backgroundColor: "#6c6c6c", height: "100%" }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={Link}
                href={`/${item.toLowerCase()}`}
                sx={{ color: "#ffffff" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
