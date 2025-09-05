"use client";

import { useParams } from "next/navigation";
import { Box, Typography, Chip, Paper, Stack } from "@mui/material";
import Image from "next/image";
import restroData from "../../data/restroData";
import Headers from "../../components/header";
import StarIcon from "@mui/icons-material/Star";

export default function RestaurantDetails() {
  const params = useParams();
  const restaurant = restroData.find((r) => r.id === Number(params.id));

  if (!restaurant) {
    return <Typography variant="h6">Restaurant not found!</Typography>;
  }

  return (
    <Box>
      {/* Header */}
      <Headers />

      {/* Centered Content */}
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <Box sx={{ width: "80%" }}>
          {/* Image Banner */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 300,
              mb: 3,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              style={{ objectFit: "cover" }}
            />

            {/* Restaurant Name */}
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                bottom: 50,
                left: 20,
                color: "white",
                fontWeight: 700,
                textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
              }}
            >
              {restaurant.name}
            </Typography>

            {/* Rating with Star */}
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                 left: 20,
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
              }}
            >
              <StarIcon sx={{ color: "#f59e0b", mr: 0.5 }} fontSize="small" />
              <Typography variant="body2" fontWeight={700} color="white">
                {restaurant.rating}
              </Typography>
            </Box>
          </Box>

          {/* About Section */}
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {restaurant.description}
            </Typography>

            <Typography variant="h6">📍 Location</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {restaurant.location}
            </Typography>

            <Typography variant="h6">🍴 Popular Cuisines</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {restaurant.cuisines.map((cuisine, i) => (
                <Chip key={i} label={cuisine} color="primary" />
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
