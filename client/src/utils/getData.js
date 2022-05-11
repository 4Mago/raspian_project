import axios from 'axios'

export const getData = async () => {
	try {
		const { data } = await axios.get('http://localhost:8080/sl-data')
		return data
	} catch (e) {
		console.log(e)
	}
}
