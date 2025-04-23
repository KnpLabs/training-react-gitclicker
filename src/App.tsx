import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@/pages/Home'
import { Navbar } from '@/components/layout/Navbar'
import GitClicker from '@/pages/GitClicker'
import Rules from '@/pages/Rules'
import { ItemsList } from '@/components/rules/ItemsList'
import { CreateItemForm } from '@/components/rules/CreateItemForm'
import { EditItemForm } from '@/components/rules/EditItemForm'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="gitclicker" element={<GitClicker />} />
          <Route path="rules" element={<Rules />}>
            <Route index element={<ItemsList />} />
            <Route path="add" element={<CreateItemForm />} />
            <Route path="edit/:id" element={<EditItemForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
