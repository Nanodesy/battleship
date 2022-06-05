export type Auth = {
    firstName?: string
    lastName?: string
    email: string
    password: string
}

export type AuthResponse = {
    user: User
    token: string
}

export type User = {
    firstName: string
    lastName: string
    email: string
}