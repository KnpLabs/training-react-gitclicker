// import ParentComponent from '@/ParentComponent'
import { Game } from '@/components/Game'
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* 💡 Uncomment comments to enable the ParentComponent, just an example  */}
    {/* <ParentComponent /> */}
    <Game />
  </React.StrictMode>,
)
