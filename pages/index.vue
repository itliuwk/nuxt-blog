<template>
  <div>
    <!--    <div class="carousel">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in items" :key="index"><img :src="item.src" alt="" /></el-carousel-item>
          </el-carousel>
        </div> -->

    <div class="home">
      <div class="left"><BlogList></BlogList></div>
      <div class="right"><Right></Right></div>
    </div>
  </div>
</template>

<script>

    import Right from '~/components/right.vue'
    import BlogList from '~/components/blogList.vue'

    export default {
        components: {
            BlogList,
            Right
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~/assets/style/home.scss';

</style>
