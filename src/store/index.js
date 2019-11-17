import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	stuList: [],
  	stu: null,
  	stuIndex: 0,
  	stuTotal: 0,
  	curPage: 1,
  	size: 10
  },
  mutations: {
  	setStuList(state, stuList) {
  		state.stuList = stuList;
  	},
  	setStu(state, { stu, index }) {
  		state.stu = stu;
  		state.stuIndex = index;
  		// console.log('setStu:', state.stu, state.stuIndex, state)
  	}

  },
  actions: {
  	setStuList_findByPage({commit}) {
  		Api.findByPage().then(res => {
  			// console.log(res, res.data.data.findByPage);
  			commit('setStuList', res.data.data.findByPage);
	  	}).catch(err => {
	  		alert(err);
	  	})
  	},
  	setStu_updateStu({commit, state}, stu) {
  		Api.updateStu(stu).then(res => {
  			console.log(res);
  			if(res.data.status == 'success') {
  				console.log(state);
  				state.stuList.splice(state.stuIndex, 1, stu);
  			}
  		}).catch(err => {
  			alert(err);
  		})
  	} 
  },
  modules: {
  }
})
