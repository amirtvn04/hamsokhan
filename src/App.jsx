import { useState } from "react"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

function App() {
  const [page, setPage] = useState("login")
  return (
    <>
      {page === "login" && (<Login gotoRegister={() => setPage("register")} />)}
      {page === "register" && (<Register />)}
    </>
  )
}

export default App
