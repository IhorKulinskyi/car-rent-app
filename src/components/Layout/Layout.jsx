import AppHeader from "components/AppHeader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const Layout = () => {
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
};

export default Layout;
