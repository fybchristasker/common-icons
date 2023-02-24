import React from 'react'
import { createRoot } from 'react-dom/client'
import Icon from '../src/svg'
import * as source from '../src/data'

const Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
      }}
    >
      {Object.keys(source.default).map((v) => (
        <div style={{ margin: 24, textAlign: 'center' }} key={v}>
          <Icon name={v} />
          <div style={{ fontSize: 12 }}>{v}</div>
        </div>
      ))}
    </div>
  )
}

const container = document.getElementById('page')
const root = createRoot(container)
root.render(<Page />)
