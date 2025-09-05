// components/RestaurantCard.jsx
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

export default function RestaurantCard({ image, name, rating, cuisines = [], location }) {
  return (
    <Card sx={{ width: 320, borderRadius: 2, boxShadow: 3, overflow: "hidden" }}>
      {/* image container - next/image fill needs parent position relative */}
      <Box sx={{ position: "relative", width: "100%", height: 180 }}>
       {image ? (
        <Image src={image } alt={name} fill style={{ objectFit: "cover" }} />
       ) : null}
      </Box>

      <CardContent>
        <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
          {name}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <StarIcon sx={{ color: "#f59e0b" }} fontSize="small" />
          <Typography variant="body2" fontWeight={700}>
            {rating}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
          {cuisines.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ textTransform: "capitalize" }} />
          ))}
        </Stack>

        <Box display="flex" alignItems="center" mt={1}>
          <LocationOnIcon sx={{ fontSize: 18, color: "#ef4444", mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
