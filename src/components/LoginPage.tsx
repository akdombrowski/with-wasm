"use client";
import "client-only";
import type { ReactNode } from "react";

import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth={false}>
      <Grid container justifyContent="center" alignItems="stretch">
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1">Login</Typography>
        </Grid>
        <Grid xs={12}>
          {children}
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
