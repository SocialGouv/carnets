import { createContext, useContext } from "react"

export const AdminsContext = createContext()
export const useAdmins = () => useContext(AdminsContext)
