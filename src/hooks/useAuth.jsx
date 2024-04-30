import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

 

const useAuth = () => {
 const authUtills= useContext(AuthContext)

 return authUtills
}

export default useAuth