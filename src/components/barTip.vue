<template>
  <div class="bar_tips" v-show="shoBarTip == 1">

  </div>
</template>

<script>
export default {
  data(){
    return {
      shoBarTip: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.bar_tips{
  width:100%;
  height:1.77rem;
  background: #ffa740;
  padding: 0 .11rem;
}
</style>
