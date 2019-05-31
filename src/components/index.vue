<template>
  <div class="indexConteiner">
    <!-- 头部 -->
    <header class="header">
      <cube-input v-model="value" :clearable="clearable" :placeholder="placeholder"></cube-input>
      <i class="cubeic-sreach"></i>
    </header>
    <cube-scroll ref="scroll" :options="options">
      <!-- 轮播图模块 -->
      <cube-slide
        :data="slides"
        :interval="3000"
        :speed="200"
        :threshold="0.4"
        :allow-vertical="true"
      >
        <cube-slide-item v-for="(item, index) in slides" :key="index">
          <a href="#">
            <img :src="item.image_src">
          </a>
        </cube-slide-item>
      </cube-slide>
      <!-- 菜单导航模块 -->
      <nav class="nav">
        <div v-for="(item, index) in navMenus" :key="index">
          <img :src="item.image_src" alt>
        </div>
      </nav>
      <section class="floor" v-for="(item, index) in floorData" :key="index">
        <div class="floor_title">
          <img :src="item.floor_title.image_src" alt>
        </div>
        <div class="floor_content">
          <div class="left">
            <img v-lazy="item.product_list[0].image_src" alt>
          </div>
          <div class="right">
            <img
              v-for="(items, i) in item.product_list"
              :key="i"
              v-lazy="items.image_src"
              v-if="i>0"
            >
          </div>
        </div>
      </section>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: null,
      navMenus: null,
      floorData: null,
      //滚动
      options: {
        startY: true
      },
      //搜索框
      value: "",
      clearable: { visible: true, blurHidden: true },
      placeholder: "输入搜素的商品"
    };
  },
  created() {
    this.getSwiperData();
    this.getNavMenuData();
    this.getFloorData();
  },
  methods: {
    //获取轮播图数据
    async getSwiperData() {
      const { data } = await this.$api.getSwiperData();
      this.slides = data.message;
    },
    //获取分类导航数据
    async getNavMenuData() {
      const { data } = await this.$api.getNavMenuData();
      this.navMenus = data.message;
    },
    //获取楼层数据
    async getFloorData() {
      const { data } = await this.$api.getFloorData();
      this.floorData = data.message;
      console.log(data);
    }
  }
};
</script>

<style lang='less'>
.indexConteiner {
  height: 100%;
  .header {
    position: fixed;
    z-index: 999;
    height: 0.5rem;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.05rem 0.3rem;
    .cube-input {
      width: 100%;
      height: 0.3rem;
      background-color: transparent;
      .cube-input-field {
        color: #ff2d4a;
        padding-left: 0.2rem;
      }
      &::after {
        border-radius: 2rem;
      }
    }
  }
  .cube-slide {
    width: 100%;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav {
    display: flex;
    div {
      height: 0.8rem;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }
  .floor {
    .floor_title {
      margin: 0.1rem 0;
      img {
        height: 0.4rem;
      }
    }
    .floor_content {
      display: flex;
      .left {
        width: 33%;
        img {
          width: 100%;
          height: 2.05rem;
        }
      }
      .right {
        width: 66%;
        img {
          width: 50%;
          height: 1.025rem;
        }
      }
    }
  }
}
</style>
