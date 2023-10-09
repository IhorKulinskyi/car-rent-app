import AppHeader from "components/AppHeader/AppHeader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

export default function Layout() {
  return (
    <>
      <AppHeader />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
