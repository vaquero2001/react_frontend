import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header1} from './components/Header1'
import { ArticuleComponent } from './components/ArticuleComponent'
import { NewContainer } from './components/NewContainer'
import { ArticuleImageContainer } from './components/ArticuleImageContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='px-6 pt-8'>
        <Header1/>
        <div className='lg:flex lg:gap-8'>
          <ArticuleComponent/>
          <NewContainer/>
        </div>
        <ArticuleImageContainer/>
      </main>  
    </>
  )
}

export default App
