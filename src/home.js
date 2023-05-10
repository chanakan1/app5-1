import React, { useContext } from 'react'

export default function Home() {
  let user = React.useContext(useContext)
  return (
    <div>

        <h1>Welcome React Store</h1>
        <p>Hello :{user}.</p>
    </div>
  )
}