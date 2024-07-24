import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <TaskForm/>
      <main className='app_main'>
        <section className='task_column'>section 1 </section>
        <section className='task_column'>section 2</section>
        <section className='task_column'>section 3</section>
      </main>
    </div>
  )
}

export default App
