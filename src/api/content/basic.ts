import apis from 'api/apis'
import fly from 'common/fly.js'
const { basic } = apis
const { login, getPhoneNumber } = basic

interface getPhoneObj {
	iv: string,
	encryptedData: string,
	userData: string
}

interface code {
	code: string
}

export default {
	login(code: code) {
		return fly.post(login, code)
	},
	getPhoneNumber(obj: getPhoneObj) {
		return fly.post(getPhoneNumber, obj)
	}
}