import { createLazyFileRoute } from '@tanstack/react-router'
import Store from '@/src/Pages/store/Store'


export const Route = createLazyFileRoute('/_store/_hiddenHeader/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Store/>
}
