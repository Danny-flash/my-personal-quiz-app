import Frontpage from './components/Frontpage';
import './App.css';
import { useState, useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {

  const [loading, setLoading] = useState(false)
useEffect(() =>{
      setLoading(true)
      setTimeout(()=>{
            setLoading(false)
      }, 3000)
}, [])

  return (
    <div className="app">

      {
        loading ? 
<PacmanLoader color={"rgba(249, 211, 180, 1)"} loading={loading}  size={40} />
        :
        <Frontpage loading={loading} setLoading={setLoading}/>
      }
       
    </div>
  );
}

export default App;
