// 登录接口需要携带参数ts类型
import {RouteRecord, RouteRecordRaw} from "vue-router";

export interface LoginFormData {
    username?: string;
    password?: string;
}

export interface ResponseData {
    code?: number;
    message?: string;
    ok?: boolean;
}


export interface userInfoResponseData extends ResponseData {
    data: {
        routes: string[]
        buttons: string[]
        roles: string[]
        name: string
        avatar: string
    };
}

export interface userType {
    userId?: number;
    avatar?: string;
    username?: string;
    password?: string;
    desc?: string;
    roles?: string;
    buttons?: string;
    routes?: string;
    token?: string;
}

export interface LoginResponseData extends ResponseData {
    token: string;
    status: number;
    message: string;
    isSuccess: boolean;
    data: userType;
}
