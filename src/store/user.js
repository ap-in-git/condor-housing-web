const userState = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    dialog: false,
    saved_housing:[],
    userDetail: {
      name:''
    },
  },
  actions: {},
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setSavedHousing(state, payload) {
      state.saved_housing = payload;
    },
    setUserDetails(state, payload) {
      state.userDetail = payload;
    },
    setLoginDialog(state, payload) {
      state.dialog = payload;
    },
    toggleSavedListing(state,payload){
      let savedHousing = state.saved_housing
      const findIndex = savedHousing.findIndex( i => i === payload)
      console.log(findIndex)
      if (findIndex > -1){
        savedHousing = savedHousing.filter( i => i !== payload)
      }else{
        savedHousing.push(payload)
      }
      state.saved_housing = savedHousing
    }
  },
};

export default userState;
