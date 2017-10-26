<template>
  <div class="products_list">
    <ul class="products_list_inner">
      <li class="item clearfix" v-for="(item, key, index) in products" :key="key">
        <a href="javascript:;">
          <div class="item_pic">
            <img width="100%" height="100%" :src="item.img" alt="">
          </div>
          <div class="item_infos br_bt">
            <p class="item_name">
              {{ item.name }}
            </p>
            <p class="item_price">折后优惠价: <em class="currency">￥</em><span class="amount">{{ item.discountPrice }}</span></p>
            <a class="btn quick_buy" href="#">一键购</a>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data(){
    return {
      products: [
        {
          img: '//m.360buyimg.com/mobilecms/s220x220_jfs/t3037/222/804734728/696265/5aa06beb/57b51b4aN65a906cc.jpg!q70.jpg',
          name: '三利 长绒棉A类标准素色良品毛巾4条装 34×76cm 平布接缝 100g/条 随心裁剪多规格巾类',
          discountPrice: 180,
          discountStar: 3
        },
        {
          img: '//m.360buyimg.com/mobilecms/s220x220_jfs/t3037/222/804734728/696265/5aa06beb/57b51b4aN65a906cc.jpg!q70.jpg',
          name: '三利 长绒棉A类标准素色良品毛巾4条装 34×76cm 平布接缝 100g/条 随心裁剪多规格巾类',
          discountPrice: 240,
          discountStar: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .products_list_inner{
    .item{
      position: relative;
      .item_pic{
        width: 5.75rem;
        height: 5.75rem;
        float:left;
      }
      .item_infos{
        position: relative;
        float:right;
        width:12.5rem;
        height:6rem;
        padding: .4rem .4rem .4rem 0;
      }
      .item_name{
        height: 2.13rem;
        line-height: 1.07rem;
        font-size:0.75rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .quick_buy{
        width: 3.68rem;
        height: 1.52rem;
        line-height: 1.52rem;
        font-size:0.75rem;
        background: #f02b2b;
        color:#fff;
        text-align: center;
        border-radius: .1rem;
        position: absolute;
        right:.4rem;
        bottom:.4rem;
      }
      .item_price{
        position: absolute;
        font-size:.5rem;
        left: 0;
        bottom:.4rem;
        .currency{
          color:rgb(240, 43, 43);
          font-size:.75rem;
          font-style: normal;
        }
        .amount{
          color:rgb(240, 43, 43);
          font-size:1.05rem;
        }
      }
    }
  }
  a.btn{
    display: inline-block;
  }
</style>
