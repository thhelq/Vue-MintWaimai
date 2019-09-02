<template>
    <section class="msite">
      <!--首页头部-->
      <HeaderTop title="天河区东圃领汇创展商务中心(汇彩路东)">
        <a href="#" class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a href="#" class="header_login" slot="right">
          <span class="header_login_text">
            登录|注册
          </span>
        </a>
      </HeaderTop>
      <!--首页导航轮播图-->
      <nav class="msite-nav">
            <!--swiper的容器div-->
            <div class="swiper-container">
                <!--swiper的包裹层civ-->
                <div class="swiper-wrapper">
                    <!--swiper的轮播div-->
                    <div class="swiper-slide">
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/download.png" alt="">
                            </div>
                            <span>川湘菜</span>
                        </a>
                    </div>
                </div>
                <!-- Add Pagination -->
                <!--swiper轮播图圆点-->
                <div class="swiper-pagination"></div>
            </div>
            <img src="./images/msite_back.svg" alt="back">
        </nav>
      <!--首页附近商家列表-->
      <ShopList></ShopList>
    </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
  import ShopList from '@/components/ShopList/ShopList.vue'

  export default {
        name: "Msite",
      components: {
        HeaderTop,
        ShopList
      },
      mounted() {
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  /*首页*/
    width: 100%
    .msite-nav
      bottom-border-1px(#e4e4e4)
      margin-top:45px
      height:200px;
      background: #fff
      /*暂时写着*/
      overflow: hidden
      .swiper-container
        width: 100%
        height:100%
        .swiper-wrapper
          width:100%
          height: 100%
          .swiper-slide
            display: flex
            flex-wrap: wrap
            justify-content: center
            align-items: flex-start
            .link_to_food
              width: 25%
              .food_container
                display: block
                width: 100%
                text-align: center
                padding-bottom: 10px
                font-size: 0
                img
                  display: inline-block
                  width:50px
                  height:50px
              span
                display: block
                width: 100%
                text-align: center
                font-size:13px
                color: #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
