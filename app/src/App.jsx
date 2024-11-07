import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"
import Home from "@/pages/home"

function App() {
  const [count, setCount] = useState(0)

  return (
		<Home />
  )
}

export default App
