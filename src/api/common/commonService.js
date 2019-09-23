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
    getHistory : (data) => {
        axios.post('/importer-api/querykey', data)
             .then( res => {
                 result = res.status == 200 ? true : false;
                 console.log(res)
             })
        return result;
    }
}


export default service;