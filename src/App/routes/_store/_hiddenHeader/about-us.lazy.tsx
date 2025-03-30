import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_store/_hiddenHeader/about-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about-us"!</div>
}
