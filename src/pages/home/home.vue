<template>
<div class="">
  <category></category>
  <bar-tip></bar-tip>
  <product-list></product-list>
</div>
</template>

<script>
import category from '@/components/category'
import barTip from '@/components/barTip'
import productList from '@/components/productList'
export default {
  components:{
    category,
    barTip,
    productList
  }
}
</script>

<style lang="scss" scoped>
</style>
