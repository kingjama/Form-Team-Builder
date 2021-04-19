import React, {useState} from "react"
import Teamform from "./Teamform"
import Data from "./Data"
function App(){

  const [forms, setForms] = useState(Data)
  return ( <div>


      <Teamform forms={forms} />
  </div>)
}

export default App




