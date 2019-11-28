import React, { useState } from 'react'

import { SubmitForm, GetForm } from '../form'

import './styles.scss'

export const App = () => {
  const [state, setState] = useState('submit')

  return (
    <div className="form-container">
      <div className="form-headings">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => setState('submit')}
        >
          Submit Link
        </button>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => setState('get')}
        >
          Get Link
        </button>
      </div>

      {state === 'submit' ? <SubmitForm /> : <GetForm />}
    </div>
  )
}
