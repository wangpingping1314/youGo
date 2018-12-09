<template>
  <div class="index">
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
    <div class="swiper">
      <swiper indicator-dots autoplay circular>
          <block v-for="(item, index) in swiperList" :key="index">
              <swiper-item>
                  <image mode="aspectFill" :src="item.image_src"></image>
              </swiper-item>
          </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import hxios from "../../utils/index";
export default {
  data () {
    return {
     swiperList:[]
    }
  },



  methods: {
    
  },

  created () {
    hxios.get("api/public/v1/home/swiperdata")
    .then(res=>{
      this.swiperList=res.data.message
    })
  }
}
</script>

<style lang="scss">
  $uRed:#ff2d4a;
  .nav{
    background-color:$uRed;
    padding: 20px 16px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    input{
      background-color: white;
      height: 60px;
      text-align: center;
      border-radius: 10px;
    }
    i.icon-sousuo{
      color: #bbb;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-220%,-50%)

      
    }
  }
  
  .index{
    margin-top: 100px;
  }
  .swiper{
    image{
       width: 100%;
    } 
   
  }

</style>
