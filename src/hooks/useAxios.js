import axios from "axios";
import {v4 as uuid} from "uuid";
import { useState } from 'react'

const useAxios = (baseUrl) => {
	const [resps, setResps] = useState([])

	const addResp = async (endpoint="") => {
		const res = await axios.get(`${baseUrl}${endpoint}`);
		setResps(resps => [...resps, {...res.data, id: uuid()}])
	}

	return [resps, addResp]
}

export default useAxios;
