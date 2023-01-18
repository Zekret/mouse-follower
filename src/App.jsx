import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({  x: clientX, y: clientY})

    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup:
    //
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } //Para asegurarse de limpiar la ejecucion o dependencia de los eventos
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
    </main>
  )
}

export default App
