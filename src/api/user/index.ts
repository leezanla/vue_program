import type {LoginFormData, LoginResponseData} from "@/api/user/type.ts";
import request from "@/utils/request.ts";
import useUserStore from "@/store/module/user.ts";
// import pinia from "@/store";
//
// let userStore = useUserStore(pinia);

enum API {
    LOGIN_URL = "/login",
    SELECT_USER_BY_USERNAME = "/user/selectUserByUsername"
}

export const reqLogin = (data: LoginFormData) => {
    return request.post<any, LoginResponseData>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
    return request.post(API.SELECT_USER_BY_USERNAME, {
        username: "admin"
    });
};