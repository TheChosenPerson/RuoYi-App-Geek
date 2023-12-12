
export interface UserState {
    token: string,
    name: string,
    avatar: string,
    roles: Array<string>
    permissions: Array<string>
}

export interface UserForm {
    username: string
    password: string
    code: string
    uuid: string
}

export type dictType = { key: string; value: string };
export type dictStateType = { dict: Array<dictType> };

