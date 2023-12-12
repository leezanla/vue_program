<script setup lang="ts">
let props = defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 接收使用的图标名字
  name: {
    type: String,
    default: "",
  },
  // 接受父组件传递颜色
  color: {
    type: String,
    default: "red",
  },
  //高度和宽度
  height: {
    type: String,
    default: "16px",
  },
  width: {
    type: String,
    default: "16px",
  },
});
</script>

<template>
  <!--svg标签：图标外层容器节点，内部需要与use标签结合使用-->
  <svg :style="{ height, width }">
    <!--
        xlink:href执行用哪一个图标，值必须以 #icon- 开头
        fill：代表的是颜色
    -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped lang="scss"></style>
