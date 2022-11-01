import NextAuth from "next-auth"

declare module "next-auth" {
  type Role = "admin" | "user" | "anonymous"

  interface Session {
    user: {
      role: Role
      name: string
      login: string
      image: string
      teams: string[]
    }
  }

  interface User {
    role: Role
    teams: string[]
    name: string | unknown
    login: string | unknown
    image: string | unknown
    email: string | unknown
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role
    teams: string[]
    idToken?: string
  }
}
