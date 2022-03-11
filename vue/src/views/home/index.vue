<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="4000" indicator-position="outside" height="400px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <h3 class="medium"><img :src="item" alt="" /></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        imgs: [],
      }
    },
    methods: {
      // 获取images文件夹下面的图片
      getImgs() {
        let res = require.context('./images/', false, /.jpg$/).keys()
        this.imgs = res.map((item) => {
          let img = './images/' + item.replace('./', '')
          console.log(img)
          return require(img + '')
        })
      },
    },
    created() {
      this.getImgs()
    },
  }
</script>

<style scoped lang="less">
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .medium {
    > img {
      width: 100%;
      cursor: pointer;
      transition: all 0.6s;
      &:hover {
        transform: scale(1.4);
      }
    }
  }
</style>
