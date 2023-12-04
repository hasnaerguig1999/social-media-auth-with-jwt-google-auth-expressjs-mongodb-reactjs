import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../Loading'
import Header from '../partials/Header'

function Layout() {
  return (
    <>
      <div className='w-5/6 h-screen mx-auto'>
        <Header />
        <main className='my-4'>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default Layout