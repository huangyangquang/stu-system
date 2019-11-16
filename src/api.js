import Axios from 'axios'
import urls from './URLs.js'

const size = 10;
const appkey = '13169614911_1553445443290'


const myAjax = Axios.create({
	method: 'get',
	baseURL: urls.baseURL,
	params: {
	    appkey
	},
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

}