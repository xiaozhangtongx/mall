<template>
  <div>
    <!-- 头部第一行，用户注册-->
    <div class="top">
      <div class="container">
        <div class="container-left">
          <p>你好，欢迎来到***物流电商平台！</p>
          <!-- 未登录 -->
          <p v-if="!userName">
            <router-link to="/login" style="color: #ff7401; padding: 0 10px">请登录</router-link>
            <router-link to="/register" style="color: #0074d4">免费注册</router-link>
          </p>
          <!-- 已经登录 -->
          <p v-else>
            <a>{{ userName }}</a>
            <a class="logout" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="container-right">
          <router-link to="###">商家注册申请</router-link>
          <router-link to="###">关于我们</router-link>
          <router-link to="###">帮助中心</router-link>
        </div>
      </div>
    </div>
    <!-- 头部第二行，搜索框 -->
    <div class="middle">
      <router-link to="/home"><img src="https://www.jsiport.com/webresource/images/wjzx_logo.png" /> </router-link>
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" class="input-search" v-model="keyword" />
        <button class="btn-search" @click="goSearch">搜索</button>
      </div>
    </div>
    <!-- 头部第三行，导航栏 -->
    <Navbar class="bottom" />
    <!-- <el-button type="primary" @click="test">测试</el-button>
    <el-button type="danger" @click="logout">退出</el-button> -->
  </div>
</template>

<script>
  import { test } from '@/api/test'
  import Navbar from '@/components/Navbar'
  export default {
    name: '',
    data() {
      return {
        keyword: '',
      }
    },
    components: {
      Navbar,
    },
    methods: {
      // 测试
      async test() {
        let res = await test('/my/test')
        console.log(res)
      },
      // 退出登录
      async logout() {
        try {
          let res = await this.$store.dispatch('userLogout')
          if (res === 'success') {
            this.$router.replace('/login')
          }
        } catch (error) {
          console.error(error)
        }
      },
      // 用户搜索
      goSearch() {},
    },
    computed: {
      // 获取用户名
      userName() {
        return
      },
    },
  }
</script>

<style scoped lang="less">
  // 定义宽度
  @head-width: 1260px;
  .top {
    height: 43px;
    line-height: 43px;
    background-color: #f4f4f4;
    .container {
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: @head-width;
      margin: 0 auto;
      .container-left {
        display: flex;
        padding: 0 5px;
      }
      .container-right {
        a {
          padding: 0 10px;
          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }
  .middle {
    display: flex;
    justify-content: space-between;
    width: @head-width;
    // height: 110px;
    margin: 30px auto;
    .search {
      height: 36px;
      margin-top: 10px;
      background: #fff;
      .input-search {
        height: 100%;
        width: 380px;
        border: 2px solid #0074d4;
        &:focus {
          outline: none;
        }
      }
      .btn-search {
        float: right;
        height: 100%;
        width: 60px;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 800;
        background-color: #0074d4;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .bottom {
    margin: 0 auto;
    width: @head-width;
  }
</style>
