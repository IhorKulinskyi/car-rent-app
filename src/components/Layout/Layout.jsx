import AppHeader from 'components/AppHeader/AppHeader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}