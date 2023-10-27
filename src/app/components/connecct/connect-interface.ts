export interface login {
    UserLogin: string,
    UserPassword: string
}

export interface registration{
    newlogin: string,
    newpassword: string,
    newmail: string
}

export interface resetpassword{
    Mail:string
}
