"use client";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();

  // ✅ Show back button only if not on home page ("/")
  const showBackButton = pathname.startsWith("/restaurants/");

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "#181942ff", color: "white", paddingY: 1 }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 7,
            paddingRight: 7,
            width: "100%",
            gap:1,
          }}
        >
          {/* Logo + Title */}
          <FastfoodIcon color="primary" />
          <Typography variant="h6" fontWeight="bold">
            FoodieHub
          </Typography>

          {/* Back Button */}
          {showBackButton && (
            <Box sx={{ ml: "auto" }}>
              <Link href="/" passHref>
                <Button variant="contained" color="primary">
                  ← Back to Restaurants
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
