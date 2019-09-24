import axios   from 'axios'
import { API } from '../../util/constant/constant';
// const PATH = API.test;
const PATH = API.importer;
const service = {
    
    /**
     * 수입 업자 - 원두 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    getHistory : () => {
        return axios.get(`/importer-api/query`)
                    .then( res => {
		               console.log(res)
                       return res.status == 200 ? res.data : [];
                    })
        //return result;
    }
}


export default service;
