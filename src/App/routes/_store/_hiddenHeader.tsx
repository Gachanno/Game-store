import Header from '@/src/Widgets/Header/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/_hiddenHeader')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <Header/>
    <Outlet/>
  </>)
}
