export interface login {
    UserLogin: string,
    UserPassword: string
}

export interface registration{
    telegram: string,
    email: string,
    phone: string,
    password: string
}

export interface resetpassword{
    Mail:string
}
