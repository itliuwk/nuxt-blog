<template>
  <div>
    <!--    <div class="carousel">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in items" :key="index"><img :src="item.src" alt="" /></el-carousel-item>
          </el-carousel>
        </div> -->

    <div class="home">
      <div class="left">
        <div class="blogList">
          <div v-loading="isLoading">
            <div v-if="blogList.length">
              <div class="item" v-for="(item, index) in blogList" :key="index">
                <img v-if="item.url" :src="item.url" alt=""/>
                <img v-else src="../assets/images/8.jpg" alt=""/>
                <div>
                  <div class="header">
                    <h3 @click="toDetail(item.id)">
                      <nuxt-link :to="`/detail?id=${item.id}`"> {{ item.title }}</nuxt-link>
                    </h3>
                    <span style="cursor: pointer" @click="toClassDetail(item.value, item.label)">{{ item.label }}</span>
                  </div>
                  <div class="view">{{ item.subtitle }}</div>
                  <div class="info">
              <span style="color: #188AE2;cursor: pointer;vertical-align: top;" @click="authorDetail(item.author)">
                <i class="iconfont icon-ren" style="vertical-align: top;font-size: 14px;">{{ item.author }}</i>
              </span>
                    <span style="margin-left: 10px;font-size: 14px;">
                <i class="iconfont icon-shijian" style="vertical-align: top;font-size: 14px;">{{ item.createtime }}</i>
              </span>

                    <span style="margin-left: 10px;">
                <i class="iconfont icon-yanjing" style="vertical-align: top;font-size: 14px;">阅读({{ item.count }})</i>
              </span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else v-show="!isLoading" style="text-align: center">抱歉，没有符合您查询条件的结果</div>
          </div>

          <div class="pageCount" v-show="!isLoading" style="text-align: center">
            <el-pagination background @current-change="currentChange" layout="total, prev, pager, next"
                           :page-size="params.total" :total="count"></el-pagination>
          </div>
        </div>
      </div>
      <div class="right">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
    import {random_photo, random_bg_photo} from '~/utils/index';
    import {YYYYMMDD} from '~/utils/date';
    import {list, listCount, detailHtml} from '~/api/blog';

    import Right from '~/components/right.vue'
    import BlogList from '~/components/blogList.vue'

    export default {
        name: 'blogList',
        data() {
            return {
                // blogList: [],
                isLoading: true,
                params: {
                    page: 0,
                    total: 10,
                    keyword: ''
                },
                count: 0
            };
        },
        async asyncData() {
            let params = {
                page: 0,
                total: 1000,
                keyword: ''
            };
            let {data} = await list(params);
            data.map((item, index) => {
                item.createtime = YYYYMMDD(item.createtime);
                item.content = item.content.toString();
                item.url = random_bg_photo();
                return item;
            });
            return {blogList: data}
        },
        computed: {
            search() {
                return this.$store.state.search;
            }
        },
        components: {
            BlogList,
            Right
        },
        watch: {
            search(val) {
                this.params = {
                    page: 0,
                    total: 10,
                    keyword: val
                };
                this.isLoading = true;
                this.getList();
                this.getCount();
            }
        },

        mounted() {
            this.getList();
            this.getCount();
        },
        methods: {
            toDetail(id) {
                // this.$router.push('./detail?id=' + id);
            },
            toClassDetail(value, label) {
                this.$router.push('./classifyDetail?value=' + value + '&label=' + label);
            },
            authorDetail(value) {
                this.$router.push('./author?author=' + value);
            },
            getList() {
                list(this.params).then(res => {
                    res.data.map((item, index) => {
                        item.createtime = YYYYMMDD(item.createtime);
                        item.content = item.content.toString();
                        item.url = random_bg_photo();
                        return item;
                    });

                    setTimeout(() => {
                        this.blogList = res.data;
                        this.isLoading = false;
                    }, 100);
                });

                listCount().then(res => {
                    this.$store.commit('SET_COUNT', res.data['count(id)']);
                });
            },
            getCount() {
                listCount(this.params).then(res => {
                    this.count = res.data['count(id)'];
                    this.$store.commit('');
                });
            },
            currentChange(page) {
                this.params = {
                    page: (page - 1) * this.params.total,
                    total: this.params.total
                };
                this.isLoading = true;
                this.getList();
                document.documentElement.scrollTop = 0;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~/assets/style/home.scss';
  @import '~/assets/style/blogList.scss';

  .pageCount {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
  }

</style>
