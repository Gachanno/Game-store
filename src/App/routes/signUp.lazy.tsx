import SignUp from '@/src/Pages/signUp'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signUp')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignUp/>
}
