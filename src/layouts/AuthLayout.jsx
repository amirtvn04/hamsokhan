import { Outlet } from "react-router-dom"
import Testimonial from "../components/Testimonial"

function AuthLayout() {
  return (
    <div className='flex items-center min-h-dvh'>
      <Outlet />

      <Testimonial />
    </div>
  )
}

export default AuthLayout