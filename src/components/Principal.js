import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { HolaContext } from '../context/HolaProvider'

const Principal = () => {
  const { theme } = useContext(ThemeContext)
  const { hola } = useContext(HolaContext)

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <h1>Contenido de sitio</h1>
      <p>{hola}</p>
    </div>
  )
}

export default Principal
