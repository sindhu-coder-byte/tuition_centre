export function friendlyAuthError(error) {
  return error?.message || 'Something went wrong. Please try again.'
}
