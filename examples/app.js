import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Icon from '../src/svg'
import * as source from '../src/data'

const Page = () => {
  const [value, setValue] = useState('')
  return (
    <div
      style={{
        width: 800,
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: 30 }}>react-common-icons</h1>
      <div style={{ margin: 26 }}>
        <input
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: '100%',
            height: 40,
            paddingLeft: 6,
            outline: 0,
          }}
          autoFocus
          placeholder="Find your icon here"
        />
      </div>
      <div
        style={{
          flexWrap: 'wrap',
          display: 'flex',
        }}
      >
        {Object.keys(source.default)
          .filter((s) => s.includes(value))
          .map((v) => (
            <div
              style={{
                width: 100,
                maxWidth: '25%',
                marginTop: 24,
                marginBottom: 24,
                textAlign: 'center',
              }}
              key={v}
            >
              <Icon name={v} />
              <div style={{ fontSize: 12 }}>{v}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

const container = document.getElementById('page')
const root = createRoot(container)
root.render(<Page />)
