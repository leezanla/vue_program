<script lang="ts">
export default {
    name: "trademark"
};
</script>
<script setup lang="ts">
import {onMounted, reactive, watch, watchEffect} from "vue";
import userTrademarkStore from "@/store/module/trademark.ts";
import {deleteTradeMarkById} from "@/api/product/trademark";
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";

let trademarkStore = userTrademarkStore();
let $router = useRouter();
let data = reactive({
    page: 1,
    limit: 3
});
onMounted(() => {
    trademarkStore.trademarkSelect(data);
});
const nextClickPage = () => {
    data.page++;
    trademarkStore.trademarkSelect(data);
};

const preClickPage = () => {
    data.page--;
    trademarkStore.trademarkSelect(data);
};

const deleteTradeMark = (id: number) => {

    ElMessageBox.confirm(
        "是否删除数据",
        {
            confirmButtonText: "是",
            cancelButtonText: "否",
            type: "warning"
        }
    )
        .then(async () => {
            let result = await deleteTradeMarkById(id);
            console.log(result);
            if (result.code == 200) {
                ElMessage({
                    type: "success",
                    message: "删除成功"
                });
                await trademarkStore.trademarkSelect(data);
            } else {
                ElMessage({
                    type: "error",
                    message: "服务器异常，删除失败"
                });
            }
        })
        .catch(() => {
            ElMessage({
                type: "info",
                message: "取消删除"
            });
        });
};
const currentPage = () => {
    trademarkStore.trademarkSelect({
        page: trademarkStore.page,
        limit: trademarkStore.limit
    });
};

watch(() => trademarkStore.limit, () => {
    data.limit = trademarkStore.limit;
    trademarkStore.trademarkSelect(data);
});
watch(() => trademarkStore.page, () => {
    data.page = trademarkStore.page;
});
</script>

<template>
    <el-card class="box-card">
        <el-button icon="Plus" type="primary" size="default">添加品牌</el-button>
        <!--    表格组件，用于展示已有的组件-->
        <el-table :data="trademarkStore.tradeMarkList" border style="width: 100%">
            <el-table-column prop="id" label="序号" width="80" align="center" type="index"/>
            <el-table-column prop="tmName" label="品牌名称" width="180" align="center"/>
            <el-table-column prop="logoUrl" label="品牌LOGO" align="center">
                <template v-slot="{row, $index}">
                    <img :src="row.logoUrl" alt="品牌LOGO" style="max-width: 100px; max-height: 100px;">
                </template>
            </el-table-column>
            <el-table-column prop="address" label="品牌操作" align="center">
                <template v-slot="{row, $index}">
                    <el-button type="primary" icon="Edit"></el-button>
                    <el-button type="primary" icon="Delete" @click="deleteTradeMark(row.id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--    分页器-->
        <el-pagination style="margin-top: 20px"
                       v-model:current-page="trademarkStore.page"
                       v-model:page-size="trademarkStore.limit"
                       :page-sizes="[3, 5, 7, 9]"
                       :small="false"
                       :disabled="false"
                       :background="true"
                       layout="prev, pager, next, jumper,->,total, sizes, "
                       :total="trademarkStore.totalPage"
                       @next-click="nextClickPage"
                       @prev-click="preClickPage"
                       @current-change="currentPage"
        />
    </el-card>
</template>

<style scoped lang="scss">

</style>