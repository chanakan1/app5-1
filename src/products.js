import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Products() {
    let nevigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign:"center"}}>This is My Product page.</h1>
        <h1 style={{textAlign:"center"}}>สินค้า</h1>
        <Link to="/">Back to homepage</Link>
        <button onClick={() => nevigate("/")}>Redirect</button>
    </div>
  )
}