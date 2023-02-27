<p align="center">
  <img src="images/logo.png" align="center" width="150px" />
</p>

<p align="center" style="font-size: 24px">
  <a href="https://react-common-icons.vercel.app" title="React Common Icons">
    React Common Icons
  </a>
</p>

<p align="center">
  <a href="https://github.com/fybchristasker/react-common-icons/actions" title="Build Status">
    <img src="https://therealsujitk-vercel-badge.vercel.app/?app=react-common-icons" />
  </a>
  <a href="https://www.npmjs.com/package/react-common-icons" title="Npm Version">
    <img src="https://img.shields.io/npm/v/react-common-icons.svg?style=flat-square" />
  </a>
</p>

## Installation

```
npm install react-common-icons
```

or

```
yarn add react-common-icons
```

## Usage

```js
import React from 'react'
import { createRoot } from 'react-dom/client'
import Icon from "react-common-icons";

function App() {
  return (
    <div id="app">
      <Icon name="youtube" size={30} />
    </div>
  );
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
```

## Demo

```bash
yarn dev:demo
```
open [http://localhost:1234](http://localhost:1234)


## Welcome PR

If you need some icons, welcome PR
## License

[MIT](https://github.com/ruilisi/react-common-icons/blob/master/LICENSE.md)
