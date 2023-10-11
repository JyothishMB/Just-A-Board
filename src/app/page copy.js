"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Board from './Board'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Features from './Features'
import Pricing from './Pricing'
import NoPage from './NoPage'
import NavigationBar from './NavigationBar'

export default function Home() {
  return (
    <main>
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Board />}>
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
    </main>
  )
}
