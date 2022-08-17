import React from 'react'

// creating no match component if the url is wrong or doesn't match than this component will throw an error.
const NoMatch = () => {
  return (
    <div>
      <h2>Error 404!!! Page not found</h2>

      Enter Correct URL
    </div>
  )
}

// exporting no match to navigationRoute
export default NoMatch
