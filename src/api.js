import Axios from 'axios'
import urls from './URLs.js'

const size = 10;
const appkey = '13169614911_1553445443290'


const myAjax = Axios.create({
	params: {
		// temp: '我怎么没有出现呀？'
		appkey
	},
	method: 'get',
	baseURL: urls.baseURL,
})

export default{

	findByPage (page = 1) {
		return myAjax.get(urls.findByPage, {
			params: {
				// 暂时这样写
				// appkey,
				size,
				page
			}
		})
	},

}