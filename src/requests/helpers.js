export function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

export function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}
