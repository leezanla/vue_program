import {RouteRecordRaw} from "vue-router";

export interface UserState {
    token?: string | null;
    cookie?: string;
    username?: string;
    avatar?: string;
    menuRoutes?: RouteRecordRaw[];
}




