import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Header from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Header />
      <Outlet />
      {/* footer */}
    </div>
  )
}

export default App
