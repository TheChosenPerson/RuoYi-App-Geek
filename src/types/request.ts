interface BaseRequestConfig {
    headers?: {
        isToken: boolean
    },
    header?: any,
    url: string,
    params?: any,
    timeout?: number | undefined,
}

export interface RequestConfig extends BaseRequestConfig {
    method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
    baseUrl?: string,
    data?: any
}

export interface RequestUploadConfig extends BaseRequestConfig {
    filePath: string,
    name?: string,
    formData: any
}

export interface ResponseData {
    code: number,
    data: any,
    msg: string
}
