import { BrowserRouter, Routes, Route } from 'react-router'
import { Game } from '@/components/Game'
import Home from '@/components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="gitclicker" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
