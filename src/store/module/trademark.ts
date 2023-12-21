import {defineStore} from "pinia";
import {trademarkSelect} from "@/api/product/trademark";
import type {trademarkSelectType} from "@/api/product/trademark/type.ts";
import type {trademarkResponseType} from "@/api/product/trademark/type.ts";

const userTrademarkStore = defineStore("trademark", {
    state: () => {
        return {
            page: 0,
            limit: 0,
            totalPage: 0,
            count: 0,
            tradeMarkList: []
        };
    },
    actions: {
        async trademarkSelect(data: trademarkSelectType) {
            const result: trademarkResponseType = await trademarkSelect(data);
            if (result.code === 200) {
                console.log(result);
                this.page = result.data.page;
                this.limit = result.data.limit;
                this.totalPage = result.data.totalPage;
                this.count = result.data.count;
                this.tradeMarkList = result.data.tradeMarkList;
                console.log(result.data.tradeMarkList);
            }
        },
        async nextClick() {

        }
    },
    getters: {}

});
export default userTrademarkStore;