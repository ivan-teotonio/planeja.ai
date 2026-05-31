import { Outlet } from 'react-router-dom'
import { Header } from '../shared/Header'

export function RootLayout() {
  return (
    <>
      <Header />
      {/* Outlet pega o conteúdo das rotas filhas e substitui este */}
      <Outlet />
    </>
  )
}
