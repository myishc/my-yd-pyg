<template>
  <div class="conteiner">
    <!-- 中心 -->
    <main class="main">
      <router-view></router-view>
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <div>
        <router-link to="/">
          <img src="./assets/img/icon_home@3x.png">
        </router-link>
      </div>
      <div>
        <router-link to="/category">
          <img src="./assets/img/icon_category@3x.png">
        </router-link>
      </div>
      <div>
        <router-link to="/cart">
          <img src="./assets/img/icon_cart@3x.png">
        </router-link>
      </div>
      <div>
        <router-link to="/me">
          <img src="./assets/img/icon_me@3x.png">
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {},
  mounted() {},
  computed: {}
};
</script>

<style lang='less'>
// 定义主题颜色
@main-color: #ff2d4a;

//定义弹性布局垂直居中方法
.dfcc() {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 26.666667vw;
}
body {
  font-size: 0.14rem;
}

.conteiner {
  display: flex;
  flex-direction: column;
  height: 100vh;
 
  .main {
    background-color: #f2f2f2;
    flex: 1;
    overflow: hidden;
  }
  .footer {
    background-color: #fff;
    height: 0.5rem;
    width: 100%;
    display: flex;
    div {
      width: 25%;
      .dfcc();
      img {
        width: 0.4rem;
      }
    }
  }
}
</style>
