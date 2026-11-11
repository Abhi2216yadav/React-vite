import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import Profile from './assets/components/Profile.jsx'
// import { Practice } from './Practice'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
    {/* <Profile /> */}
  </StrictMode>,
)
