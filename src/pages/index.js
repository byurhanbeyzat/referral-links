import React from 'react'

import { SubmitForm, GetForm } from '../components/form'

const Home = () => {
  return (
    <div className="container">
      <div className="form-container">
        <SubmitForm />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <GetForm />
      </div>
    </div>
  )
}
export default Home
