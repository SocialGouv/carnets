import React from "react"
import { PongSpinner } from "react-spinners-kit"

const Loader = ({ loading }) => (
  <div className="loader">
    <PongSpinner size={200} color="darkblue" loading={loading} />
    <p>Publication en cours, veuillez patienter...</p>
  </div>
)

export default Loader
