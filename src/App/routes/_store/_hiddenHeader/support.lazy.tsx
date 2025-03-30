import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_store/_hiddenHeader/support')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/support"!</div>
}
