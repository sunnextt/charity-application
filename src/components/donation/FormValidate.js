const validate = values => {
  const errors = {}
  if(!values.name) {
    errors.clubName = 'Required'
  }
  if (!values.members || !values.members.length) {
    errors.members = { _error: 'At least one member must be entered' }

  }
  return errors
}

export default validate
