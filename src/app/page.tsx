import "server-only";
import { forwardRef } from "react";
import Link from "next/link";
import RSC from "@/components/RustComponent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LoginPage from "@/components/LoginPage";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // const RustComponent = forwardRef((props, ref) => (
  //   <RustServerComponent {...props} ref={ref} />
  // ));
  const number = parseInt(searchParams.number || "30");

  return (
    <LoginPage>
      <RSC number={number} />
    </LoginPage>
  );
}
