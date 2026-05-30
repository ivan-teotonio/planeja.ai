import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import { Header } from '../shared/Header'

export function RootLayout() {
  return (
    <>
      <Header />
      {/* Outlet pega o conteúdo das rotas filhas e substitui este */}
      <Outlet />
      <Footer />
    </>
  )
}
