import React from 'react'
import ReactDOM from 'react-dom'
import Mask from '../src/File'
import * as source from '../src/data'

function Page() {
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
          <Mask name={v} />
          <div style={{ fontSize: 12 }}>{v}</div>
        </div>
      ))}
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('page'))
