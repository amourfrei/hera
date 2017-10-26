<template>
  <div class="category">
    <ul class="cate_inner">
      <li @click="selectTab(index)" v-for="(item, key,index) in category" class="cate_item" :class="{active: active == index}" :key="key">
        <span class="cate_item_inner">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        category: {
          'all': {
            'name': '全部'
          },
          'shoujishuma': {
            'name':'手机数码'
          },
          'muying': {
            'name': '母婴'
          },
          'meizhuang': {
            'name': '美妆'
          },
          'ribai': {
            'name': '日百'
          }
        },
        active: 1
      }
    },
    methods: {
      selectTab(i){
        this.active = i;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category{
    position: relative;
    height: 1.77rem;
    border-bottom: 1px solid #e3e5e9;
    .cate_inner{
      height: 1.77rem;
      line-height: 1.77rem;
      .cate_item{
        width: 3.75rem;
        height: 100%;
        text-align: center;
        float:left;
        font-size: 0.8rem;
        &.active .cate_item_inner{
          border-bottom: 4px solid #333;
        }
        .cate_item_inner{
          font-size:.7rem;
          display: inline-block;
          height: 100%;
        }
      }
    }
  }
</style>
