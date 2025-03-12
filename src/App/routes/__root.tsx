import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../../Widgets/Header/Header'
import Error from '../../Pages/error'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header/>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <Error/>
})