import React, { useState } from 'react'

import './styles.scss'

export const GetForm = () => {
  const [data, setData] = useState(null)
  const [siteName, setSiteName] = useState('Github')

  const handleSubmit = async e => {
    e.preventDefault()

    const result = await fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ siteName }),
    })

    if (result.status === 200) {
      const { link } = await result.json()
      alert(link)
      setData(link)
    } else {
      console.log(result)
    }
  }

  return (
    <form className="form" onSubmit={e => handleSubmit(e)}>
      <div className="form-fields">
        <input
          type="text"
          name="siteName"
          className="input"
          value={siteName}
          onKeyPress={e => setSiteName(e.target.value)}
          onChange={e => setSiteName(e.target.value)}
          placeholder="Enter Site Name"
        />
        <button type="submit" className="btn btn--primary">
          <img src="../../assets/copy.svg" alt="copy" />
        </button>
      </div>
    </form>
  )
}
