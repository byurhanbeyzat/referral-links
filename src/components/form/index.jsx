import React from 'react'

import './styles.scss'

export const SubmitForm = () => (
  <form className="form">
    <div className="form-fields">
      <input
        type="text"
        name="site-url"
        className="input"
        placeholder="Enter Site Url"
      />
      <button type="submit" className="btn btn--primary btn--block">
        Submit Link
      </button>
    </div>
  </form>
)

export const GetForm = () => (
  <form className="form">
    <div className="form-fields">
      <input
        type="text"
        name="site-name"
        className="input"
        placeholder="Enter Site Name"
      />
      <button type="submit" className="btn btn--primary btn--block">
        Copy Link
      </button>
    </div>
  </form>
)
