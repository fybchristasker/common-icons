import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Icon from '../src/svg'
import * as source from '../src/data'
import './app.css'

const Page = () => {
  const [value, setValue] = useState('')
  const count = Object.values(source.default).length
  const [selected, setSelected] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState('')

  const copyIcon = (id) => {
    navigator.clipboard.writeText(`<Icon name='${id}' />`)
    setSelected(true)
    setSelectedIcon(id)
    setTimeout(() => {
      setSelected(false)
      setSelectedIcon('')
    }, 2000)
  }

  return (
    <div className="container">
      <h1 className="package-name">react-common-icons</h1>
      <div className="icons-margin">
        <input
          onChange={(e) => setValue(e.target.value)}
          className="search-input"
          autoFocus
          placeholder={`Find your icon in ${count} svg icons`}
        />
      </div>
      <div className="icons-container">
        {Object.keys(source.default)
          .filter((s) => s.includes(value))
          .map((v) => (
            <div className="icon" key={v} id={v} onClick={() => copyIcon(v)}>
              {selected && selectedIcon === v ? (
                <div className="copy-icon">Copied</div>
              ) : (
                <>
                  <Icon name={v} />
                  <div>{v}</div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

const container = document.getElementById('page')
const root = createRoot(container)
root.render(<Page />)
