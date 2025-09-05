import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";
import { Box, Grid, Typography ,Link} from "@mui/material";
import restroData from "./data/restroData";


export default function Home() {
  return (
    <Box
      sx={{ backgroundColor: "#d9e0c4ff", borderRadius: 2, minHeight: "100vh" }}
    >
      <Box sx={{ backgroundColor: "red" }}>
        <Header />
      </Box>
      <Box height="200%" sx={{ py: 6 }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          paddingBottom={2}
        >
          Discover Amazing Restaurants
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          gap={6}
          sx={{ mt: 2 }}
        >
          {restroData.map((r, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              display="flex"
              justifyContent="center"
            >
              <Link
                href={`/restaurants/${r.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card {...r} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
