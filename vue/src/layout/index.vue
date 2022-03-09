<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <router-view />
    <!-- Footer组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    name: 'home',
    components: {
      Header,
      Footer,
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less"></style>
