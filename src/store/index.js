import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	stuList: [],
  	stu: null,
  	stuIndex: 0,
  	stuTotal: 50,
  	curPage: 1,
  	size: 10,
    search: ''
  },
  mutations: {
  	setStuList(state, stuList) {
  		state.stuList = stuList;
  	},
  	setStu(state, { stu, index }) {
  		state.stu = stu;
  		state.stuIndex = index;
  		// console.log('setStu:', state.stu, state.stuIndex, state)
  	},
    setCurPage(state, curPage) {
      state.curPage = curPage;
    },
    setStuTotal(state, stuTotal) {
      state.stuTotal = stuTotal;
    },
    setSearch(state, search) {
      state.search = search;
    }

  },
  actions: {
  	setStuList_findByPage({commit, state}) {
  		Api.findByPage(state.curPage).then(res => {
  			console.log('findByPage', res, res.data.data.findByPage);
  			commit('setStuList', res.data.data.findByPage);
        commit('setStuTotal', res.data.data.cont);
        commit('setSearch', "");
	  	}).catch(err => {
	  		alert(err);
	  	})
  	},
    searchStudent({commit, state}) {
      return Api.searchStudent(state.search, state.curPage).then(res => {
        console.log('searchW', res);
        commit('setStuList', res.data.data.searchList)
        commit('setStuTotal', res.data.data.cont);
      }).catch(err => {
        console.log(err);
      })
    },
  	setStu_updateStu({commit, state}, stu) {
  		return Api.updateStu(stu).then(res => {
  			console.log(res);
  			if(res.data.status == 'success') {
  				// commit('setStu', stu);
  				// console.log(state);
  				state.stuList.splice(state.stuIndex, 1, stu);

  			}
  		}).catch(err => {
  			alert(err);
  		})
  	},
  	delBySno({state}, sNo) {
  		return Api.delBySno(sNo).then(res => {
  			console.log(res);
  			// alert(res.data.msg);
  		}).catch(err => {
  			alert(err);
  		})
  	}
  },
  modules: {
  }
})
