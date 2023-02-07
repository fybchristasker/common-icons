import React from 'react'
import * as source from '../src/data'

const Mask: React.FC<{ name: string; size?: number }> = ({
  name,
  size = 48,
}) => {
  const data: any = source.default
  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size}>
      {data[name].map((v: { path: string; fill: string }) => (
        <path d={v.path} fill={v.fill} key={v.path}></path>
      ))}
    </svg>
  )
}

export default Mask
