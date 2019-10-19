export const state = () => ({
  userInfo: '',
  isLogin: false,
  search: '',
  isCloseBg: false,
  count: 0
});

export const mutations = {
  SET_USERINFO(state, params) {
    state.userInfo = params;
  },
  SET_ISLOGIN(state, params) {
    state.isLogin = params;
  },
  SET_SEARCH(state, params) {
    state.search = params;
  },
  SET_ISCLOSEBG(state, params) {
    state.isCloseBg = params;
  },
  SET_COUNT(state, params) {
    state.count = params;
  }
};
