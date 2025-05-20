import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Error from '../../Pages/error'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {
        import.meta.env.DEV &&
        <TanStackRouterDevtools />}
    </>
  ),
  notFoundComponent: () => <Error/>
})