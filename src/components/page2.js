import React, { useState } from 'react'
import { Navigate } from "react-router-dom"

function Page2() {
    const [toPage1, setToPage1] = useState(false)

    if (toPage1 === true) {
      return <Navigate to='/' />
    }
  
    return (
      <>
      <h1>Page Two</h1>
      <button onClick={() => setToPage1(() => !toPage1)}>Page One</button>
      </>
    )
}

export default Page2