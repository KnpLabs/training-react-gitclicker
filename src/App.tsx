import { BrowserRouter, Routes, Route } from 'react-router'
import { Game } from '@/components/Game'
import Home from '@/components/pages/Home'
import { Navbar } from '@/components/layout/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="gitclicker" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
