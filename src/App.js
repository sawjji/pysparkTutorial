import Navbar from "./Navbar"
import Functionality from "./pages/Functionality"
import Homepage from "./pages/Homepage"
import PySparkTutorial from "./pages/PySparkTutorial"
import NoSQLSpark from "./pages/NoSQLSpark"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Functionality />} />
          <Route path="/about" element={<PySparkTutorial />} />
          <Route path="/Spark" element={<NoSQLSpark />} />
        </Routes>
      </div>
    </>
  )
}

export default App