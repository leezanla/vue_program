import {useCookies} from "vue3-cookies";

let cookies = useCookies();
// 存储cookie
export const SET_COOKIE = (cookie?: string) => {
    cookies.cookies.set("COOKIE", cookie);
};

export const GET_COOKIE = () => {
    return cookies.cookies.get("COOKIE");
};