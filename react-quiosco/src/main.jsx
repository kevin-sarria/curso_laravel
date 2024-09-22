import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { QuioscoProvider } from './context'
import roter from './router'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuioscoProvider>
      <RouterProvider router={roter} />
    </QuioscoProvider>
  </StrictMode>,
)
