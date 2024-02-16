
export interface ISession {
    access_token: string
    expires_at: number | undefined
    expires_in: number | undefined
    refresh_token: string
    token_type: string
}


export interface IUser {
    id: string
    aud: string | undefined
    role: string | undefined
    email: string | undefined
    phone: string | undefined
}


export interface IUserX {
    id: string
    email: string 
} 

export interface IUserInfo {
    user_id: string
    inserted_at: string
    updated_at : string
    first_name : string
    last_name : string
    phone_number : string
}

export interface ILoginForm {
    email: string
    password: string
}

export interface IUpdateUser {
    email: string
    password: string
}


