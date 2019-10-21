<template>
  <div :class="isTop == true ? 'blog' : 'blog-none'">
    <div class="blog-nav">
      <div class="content">
        <div class="menu"><i class="iconfont icon-caidan" @click="drawer = true"></i></div>
        <nuxt-link to="/" class="logo-info">
          <a title="刘伟坤博客-刘伟坤博客,分享网站seo优化教程，网站源码下载，网站搭建教程，专注互联网资讯，新手站长起点资源网站！" href="#">
            <img src="../assets/img/logo.jpg" alt="刘伟坤博客"/>
          </a>
        </nuxt-link>
        <div class="nav-u">
          <ul>
            <li>
              <i class="iconfont icon-shouye"></i>
              <nuxt-link to="/" class="toUrl">
                首页
              </nuxt-link>
            </li>

            <li>
              <i class="iconfont icon-gongju"></i>
              <nuxt-link to="/tools" class="toUrl">
                站长工具
              </nuxt-link>
            </li>

            <li>
              <i class="iconfont icon-biji"></i>
              <nuxt-link to="/note" class="toUrl">
                个人笔记
              </nuxt-link>
            </li>

            <li>
              <i class="iconfont icon-speak"></i>
              <nuxt-link to="/whisper" class="toUrl">
                微语
              </nuxt-link>
            </li>

            <li>
              <i class="iconfont icon-about"></i>
              <nuxt-link to="/about" class="toUrl">
                关于本站
              </nuxt-link>
            </li>

          </ul>
        </div>
        <div class="login">
          <div class="login-search" style="display: inline-block;">
            <el-input v-model="searchValue" clearable class="search" @keyup.enter.native="search"
                      placeholder="输入关键字 Enter键搜索..."></el-input>
          </div>

<!--          <div style="display: inline-block" v-if="userInfo == null || !userInfo">-->
<!--            <span style="margin-right: 20px"><nuxt-link to="/login">登录</nuxt-link></span>-->
<!--            <nuxt-link to="/login/register">-->
<!--              <el-button type="primary" round>我要注册</el-button>-->
<!--            </nuxt-link>-->
<!--          </div>-->
<!--          <div v-else style="display: inline-block">-->
<!--            <nuxt-link style="    color: #99a9bf;" to="/admin">会员中心</nuxt-link>-->
<!--            <img src="../assets/img/default.png" style="border-radius: 50%;margin-left: 20px" alt=""/>-->
<!--            <el-dropdown trigger="click">-->
<!--              <span class="el-dropdown-link" style="cursor: pointer">-->
<!--                {{ userInfo.realname }}-->
<!--                <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--              </span>-->
<!--              <el-dropdown-menu slot="dropdown">-->
<!--                &lt;!&ndash;      <el-dropdown-item v-show="isClose">-->
<!--                  <span @click="updateBg">换张背景图</span>-->
<!--                </el-dropdown-item>-->
<!--                <el-dropdown-item v-show="!isClose">-->
<!--                  <span @click="openBg">开启背景图</span>-->
<!--                </el-dropdown-item>-->
<!--                <el-dropdown-item v-show="isClose">-->
<!--                  <span @click="closeBg">关闭背景图</span>-->
<!--                </el-dropdown-item> &ndash;&gt;-->
<!--                <el-dropdown-item><span @click="loginOut">退出</span></el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </el-dropdown>-->
<!--          </div>-->
        </div>
        <div class="member-center">
          <div class="member-center-search" v-show="isShowSearch">
            <el-input v-model="searchValue" clearable class="search" @keyup.enter.native="search"
                      placeholder="输入关键字 Enter键搜索..."></el-input>
            <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
          </div>

<!--          <div style="display: inline-block" v-if="userInfo == null || !userInfo">-->
<!--            <i class="el-icon-search" style="cursor: pointer;margin-right: 15px;"-->
<!--               @click="isShowSearch = !isShowSearch"></i>-->
<!--            <span style="margin-right: 20px"><nuxt-link to="/login">登录</nuxt-link></span>-->
<!--            <nuxt-link to="/login/register">-->
<!--              <el-button type="primary" round>我要注册</el-button>-->
<!--            </nuxt-link>-->
<!--          </div>-->

<!--          <div v-else>-->
<!--            <i class="el-icon-search" style="cursor: pointer;" @click="isShowSearch = !isShowSearch"></i>-->

<!--            <el-dropdown trigger="click">-->
<!--              <span class="el-dropdown-link" style="cursor: pointer">-->
<!--                <img src="../assets/img/default.png" style="border-radius: 50%;margin-left: 20px" alt=""/>-->
<!--                {{ userInfo.realname }}-->
<!--                <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--              </span>-->
<!--              <el-dropdown-menu slot="dropdown">-->
<!--                <el-dropdown-item>-->
<!--                  <span><nuxt-link style="color: #99a9bf;" to="/admin">会员中心</nuxt-link></span>-->
<!--                </el-dropdown-item>-->

<!--                <el-dropdown-item><span @click="loginOut">退出</span></el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </el-dropdown>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div id="top-img"></div>

    <el-drawer :visible.sync="drawer" title="刘伟坤博客" :show-close="false" style="width: 200%;" direction="ltr">
      <div class="menu-s">
        <ul>
          <li>
            <i class="iconfont icon-shouye"></i>
            <nuxt-link to="/" class="toUrl">
              首页
            </nuxt-link>
          </li>

          <li>
            <i class="iconfont icon-gongju"></i>
            <nuxt-link to="/tools" class="toUrl">
              站长工具
            </nuxt-link>
          </li>

          <li>
            <i class="iconfont icon-biji"></i>
            <nuxt-link to="/note" class="toUrl">
              个人笔记
            </nuxt-link>
          </li>

          <li>
            <i class="iconfont icon-speak"></i>
            <nuxt-link to="/whisper" class="toUrl">
              微语
            </nuxt-link>
          </li>

          <li>
            <i class="iconfont icon-about"></i>
            <nuxt-link to="/about" class="toUrl">
              关于本站
            </nuxt-link>
          </li>

        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>


    export default {
        name: 'index',
        data() {
            return {
                searchValue: '',
                drawer: false,
                isClose: false,
                isShowSearch: false
            };
        },
        props: ['isTop'],
        mounted() {
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            }
        },
        watch: {
            userInfo(val) {
            },
            $route: {
                deep: true,
                handler(val) {
                    document.documentElement.scrollTop = 0;
                    this.drawer = false;
                    if (val.fullPath == '/admin') {
                        if (!this.userInfo && this.userInfo == null) {
                            if (!this.$store.state.isLogin) {
                                alert('你还没有登录，即将返回首页');

                                setTimeout(() => {
                                    this.$router.push('/');
                                }, 100);
                            }
                        }
                    }
                }
            }
        },
        methods: {
            loginOut() {
                alert('退出成功，即将返回首页');
                this.$router.push('/');
                setTimeout(() => {
                    localStorage.clear();
                    this.$store.commit('SET_USERINFO', null);
                }, 1500);
            },
            search() {
                this.$store.commit('SET_SEARCH', this.searchValue);
            },
            openBg() {
                this.$store.commit('SET_ISCLOSEBG', true);
                this.isClose = true;
            },
            closeBg() {
                this.$store.commit('SET_ISCLOSEBG', false);
                this.isClose = false;
            },
            updateBg() {
                this.$store.commit('SET_ISCLOSEBG', false);
                setTimeout(() => {
                    this.$store.commit('SET_ISCLOSEBG', true);
                }, 100);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .blog {
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    animation: upAndTranslateX 1.5s;
  }

  @keyframes upAndTranslateX {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  #top-img {
    background: url('../assets/img/top.png');
    height: 4px;
    top: 0px;
    width: 100%;
    z-index: 9999;
  }

  .blog-nav {
    background: #fff;
    box-shadow: 0 0 20px rgba(37, 45, 51, 0.5);

    .menu {
      display: none;
      line-height: 70px;
      font-size: 20px;
      cursor: pointer;
    }

    .content {
      position: relative;
      height: 70px;
      top: 0;
      box-sizing: border-box;
      max-width: 1400px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;

      img {
        height: 35px;
        display: inline-block;
        vertical-align: top;
        max-height: 32px;
        margin-bottom: 20px;
        margin-top: 17px;
      }

      .nav-u {
        display: inline-block;
        margin-left: 25px;
        line-height: 65px;
        height: 100%;

        ul {
          width: 100%;
          overflow: hidden;
          height: 100%;

          li {
            float: left;
            margin-right: 10px;
            cursor: pointer;
            font-size: 16px;
            color: #99a9bf;
            height: 100%;
            padding: 0 10px;
          }

          li:hover {
            color: #fff;
            background: #289ee2;
            animation: upOpacity 0.3s;
          }

          .toUrl {
            height: 100%;
            display: inline-block;
          }

          /deep/ li.nuxt-link-exact-active {
            color: #fff;
            background: #289ee2;
          }

          @keyframes upOpacity {
            0% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }

      .member-center {
        display: none;
        float: right;
        height: 100%;
        line-height: 65px;

        .member-center-search {
          padding: 10px;
          display: inline-block;
          position: fixed;
          top: 57px;
          z-index: 999;
          right: 0;
          width: 100vw;
          background: #fff;
          opacity: 0.9;
          text-align: center;

          .search {
            width: 60%;
          }
        }
      }

      .login {
        float: right;
        height: 100%;
        line-height: 65px;

        > span {
          margin-right: 20px;
          color: #188ae2;
          cursor: pointer;
        }

        .search {
          display: inline-block;
          width: 250px;
          margin-right: 20px;
        }

        /deep/ .el-input__inner {
          border-radius: 20px;
        }
      }
    }
  }

  /deep/ .el-drawer__container div {
    background: #373d41;
  }

  /deep/ #el-drawer__title {
    text-align: center;
  }

  .menu-s {
    ul {
      li {
        padding: 15px 15px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        i {
          font-size: 20px;
          padding-right: 15px;
        }
      }
    }
  }
</style>
