import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'

function MainLayout() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
// container mx-auto px-4 lg:px-2.5
export default MainLayout