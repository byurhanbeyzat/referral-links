import React, { useState } from 'react'
import { extractHostname } from '../../utils'

import './styles.scss'

export const SubmitForm = () => {
  const [url, setUrl] = useState('')
  const [siteName, setSiteName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)

    if (url !== undefined && url !== '') {
      const host = extractHostname(url)
      console.log(host)
      setSiteName(host)
      console.log(siteName)
    }

    const result = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ url, siteName }),
    })

    setSubmitting(false)

    if (result.status === 200) {
      alert(result.statusText)
    } else {
      console.log(result)
    }
  }

  return (
    <form className="form" onSubmit={e => handleSubmit(e)}>
      <div className="form-fields">
        <input
          type="text"
          name="url"
          className="input"
          value={url}
          placeholder="Enter Site Url"
          onChange={e => setUrl(e.target.value)}
          onKeyPress={e => setUrl(e.target.value)}
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn btn--primary"
        >
          <svg
            className="icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" />
          </svg>
        </button>
      </div>
    </form>
  )
}
