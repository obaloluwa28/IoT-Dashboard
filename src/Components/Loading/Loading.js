import React, {useState} from 'react'
import './Loading.css'

const Loading = ({loadingstatus, loadingresp}) => {
  console.log(`Obas Loading: ${loadingstatus}`)
  console.log(`Server Response: ${loadingresp}`)
  const [loginsuccess, setLoginsuccess] = useState(false);
  const [registersuccess, setRegistersuccess] = useState(false)

  return (
    <div className="Loading-Contain">
      {loadingresp === "error" ? <span>Error</span> : <span>Loading...</span>}
    </div>
  )
}

export default Loading