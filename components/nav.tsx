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
import Image from "next/image"


const navItems = [{
  name: "Home", link: "/home"
},
{
  name: "Duroos", link: "/duroos"
},
{
  name: "About", link: "/about"
},
{
  name: "Schedule", link: "/lecture-schedule"
}
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBar position='static' sx={{
        background: `#facc15`, boxShadow: "none",
      }}>
        <Toolbar>
          {/* Logo / Brand Name */}
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, fontWeight: 700, color: "#6c6c6c" }}
          >
            <Image src="/icons/icon-black.png" alt="urdu bayan" width={48} height={48} />
          </Typography>

          {/* Desktop Navigation */}
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.link}
                  sx={{ color: "#000000" }}
                >
                  <ListItemText primary={item.name} />
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
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                href={item.link}
                sx={{ color: "#000000" }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
