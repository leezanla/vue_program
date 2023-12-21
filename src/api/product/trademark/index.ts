import request from "@/utils/request.ts";
import type {trademarkSelectType, trademarkResponseType} from "@/api/product/trademark/type.ts";

enum API {
    SELECT_TRADEMARK_URL = "/product/trademark",
}

export const trademarkSelect = (data: trademarkSelectType) => {
    return request.get<any, trademarkResponseType>(API.SELECT_TRADEMARK_URL + `/${data.page}` + `/${data.limit}`);
};

export const deleteTradeMarkById = (id: number) => {
    return request.delete<any, trademarkResponseType>(API.SELECT_TRADEMARK_URL + `/${id}`);
};