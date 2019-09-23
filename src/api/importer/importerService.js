import axios   from 'axios'
import { API } from '../../util/constant/constant';
//const PATH = API.test;
const PATH = API.importer;
const service = {
    /**
     * 수입 업자 - 원두 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGood : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    },

    /**
     * 수입 업자 - 상품 출고
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    releaseGood : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey2`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    }
}

export default service;