import SignIn from '@/src/Pages/signIn'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signIn')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignIn/>
}
