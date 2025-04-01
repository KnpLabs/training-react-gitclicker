import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@/pages/Home'
import { Navbar } from '@/components/layout/Navbar'
import GitClicker from '@/pages/GitClicker'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="gitclicker" element={<GitClicker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
