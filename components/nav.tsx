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
  ListSubheader,
  Collapse,
  Box,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface NavItem {
  name: string;
  link: string;
  cat: string;
}


const navItems = [{
  name: "Home", link: "/"
},
{
  name: "Duroos", link: "/duroos"
},
{
  name: "Schedule", link: "/lecture-schedule"
},
{
  name: "About", link: "/about"
},
]

const navItemMob: NavItem[] = [
  {
    name: "Home Page", link: "/", cat: "Home"
  },
  {
    name: "Duroos", link: "/duroos", cat: "Home"
  },
  {
    name: "Schedule", link: "/lecture-schedule", cat: "Home"
  },
  {
    name: "About", link: "/about", cat: "Home"
  },
  {
    name: "Araboona Nawawiyah", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/al-arbaoona-nawawiyyah", cat: "Taweel Duroos"
  },
  {
    name: "Sharh As Sunnah", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/sharh-as-sunnah", cat: "Taweel Duroos"
  },
  {
    name: "Bulugh Al Maram", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/bulugh-al-maram", cat: "Taweel Duroos"
  },
  {
    name: "Usool Ath Thalathah", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/usool-al-thalatha", cat: "Taweel Duroos"
  },
  {
    name: "Kitab At Tawheed", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/kitab-at-tawheed", cat: "Taweel Duroos"
  },
  {
    name: "Targeeb wat Tarheeb", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/at-targeeb-wat-tarheeb-muzari", cat: "Taweel Duroos"
  },
  {
    name: "Shamail Muhammadiyah", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/shamail-al-muhammadiyah", cat: "Taweel Duroos"
  },
  {
    name: "Riyad us Saliheen", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/riyad-us-saliheen", cat: "Taweel Duroos"
  },
  {
    name: "Raf'ul Malam", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/raful-malam", cat: "Mukhtasar Duroos"
  },
  {
    name: "Tadween as Sunnah", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/tadween-as-sunnah", cat: "Mukhtasar Duroos"
  },
  {
    name: "Arbaona An Nawawi", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/al-arbaoona-an-nawawi", cat: "Mukhtasar Duroos"
  },
  {
    name: "Juz 28", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/juz-28", cat: "Quran Tafseer"
  },
  {
    name: "Juz 27", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/juz-27", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Fatiha", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-fathiha", cat: "Quran Tafseer"
  },
  {
    name: "Juz Tabarak", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/juz-tabarak", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Baqarah", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-baqarah", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Anaam", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-anaam", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Araf", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-araf", cat: "Quran Tafseer"
  },
  {
    name: "Surah Ibrahim", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-ibrahim", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Hijr", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-hijr", cat: "Quran Tafseer"
  },
  {
    name: "Surah Al Ahzab", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-ahzab", cat: "Quran Tafseer"
  },
  {
    name: "Surah Saba", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-saba", cat: "Quran Tafseer"
  },
  {
    name: "Surah Hujurat", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran/surah-al-hujurat", cat: "Quran Tafseer"
  },
  {
    name: "Isteqamat", link: "https://www.zafarulhasan.com/duroos/aam-duroos/isteqamat", cat: "Aam Duroos"
  },
  {
    name: "Amal al quloob", link: "https://www.zafarulhasan.com/duroos/aam-duroos/dil-ke-amaal", cat: "Aam Duroos"
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const groupedNavItems: Record<string, NavItem[]> = navItemMob.reduce(
    (acc, item) => {
      if (!acc[item.cat]) acc[item.cat] = [];
      acc[item.cat].push(item);
      return acc;
    },
    {} as Record<string, NavItem[]>
  );

  const categories = Object.keys(groupedNavItems);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((cat) => [cat, true])) // all open by default
  );

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <>
      <AppBar position="static" sx={{ background: `#facc15`, boxShadow: "none" }}>
        <Toolbar>
          {/* Left side: Desktop Nav + Mobile Menu Icon */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
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
              color="inherit"
              edge="start"
              sx={{ display: { md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo / Brand Name — now on the right */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, color: "#6c6c6c" }}
          >
            <Image src="/icons/icon-black.png" alt="urdu bayan" width={48} height={48} />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250, height: "100%" }} subheader={<li />}>
          {categories.map((cat) => (
            <li key={cat}>
              <ul style={{ padding: 0 }}>
                <ListItemButton onClick={() => toggleCategory(cat)} sx={{ color: "#000000" }}>
                  <ListItemText
                    primary={cat}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  {openCategories[cat] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openCategories[cat]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {groupedNavItems[cat].map((item) => (
                      <ListItem key={item.name} disablePadding sx={{ pl: 2 }}>
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
                </Collapse>
              </ul>
            </li>
          ))}
        </List>
      </Drawer>
    </>
  )
}
