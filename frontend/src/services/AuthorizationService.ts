import {Auth, AuthResponse} from "../types/Auth";

export function signIn(auth: Auth): Promise<AuthResponse> {
    return fetch("http://localhost:8080/auth/sign-in", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(auth)
    })
        .then(handleErrorResponseStatus)
        .then(response => response.json())
        .then(response => response as AuthResponse);
}

export function signUp(auth: Auth): Promise<AuthResponse> {
    return fetch("http://localhost:8080/auth/sign-up", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(auth)
    })
        .then(handleErrorResponseStatus)
        .then(response => response.json())
        .then(response => response as AuthResponse)
}

function handleErrorResponseStatus(response: Response) {
    if (!response.ok) {
        throw new Error("Sorry, encountered errors during request processing!")
    }
    return response
}