import React, { useState } from 'react'
import { Navigate } from "react-router-dom"

function Page1() {
  const [toPage2, setToPage2] = useState(false)

  if (toPage2 === true) {
    return <Navigate to='/page2' />
  }

  return (
    <>
    <h1>Page One</h1>
    <button onClick={() => setToPage2(() => !toPage2)}>Page Two</button>
    </>
  )
}

export default Page1