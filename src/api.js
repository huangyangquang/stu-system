import Axios from 'axios'
import urls from './URLs.js'

const size = 10;
const appkey = 'huanyangquan_1572677518443'


const myAjax = Axios.create({
	params: {
		appkey
	},
	method: 'get',
	baseURL: urls.baseURL
})

export default{
	findByPage (page = 1) {
		return myAjax.get(urls.findByPage, {
			params: {
				size,
				page
			}
		})
	},
	updateStu (data) {
		return myAjax.get(urls.updateStudent, {
			params: {
				...data
			}
		})
	},
	delBySno(sNo) {
		return myAjax.get(urls.delBySno, {
			params: {
				sNo
			}
		})
	},
	addStudent(data) {
		return myAjax.get(urls.addStudent, {
			params: {
				...data
			}
		})
	},
	searchStudent(search, page) {
		return myAjax.get(urls.searchStudent, {
			params: {
				sex: -1,
				size: 10,
				page,
				search
			}
		})
	}
}