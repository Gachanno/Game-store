import { createFileRoute } from '@tanstack/react-router'
import Store from '../../Pages/store/Store'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Store/>
}
