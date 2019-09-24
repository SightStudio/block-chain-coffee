import axios   from 'axios'
import { API } from '../../util/constant/constant';
//const PATH = API.test;
const PATH = API.store;
const service = {
    /**
     * 창고 관리 - 보관 이력 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerStoreHistory : (data) => {
        return axios.post(`${PATH}/createkey`, data)
                    .then( res => {
                        return res.status == 200 ? true : false;
                    })
    },

    /**
     * 수입 업자 - 상품 출고
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    releaseGoods : (data) => {
        return axios.post(`${PATH}/createkey2`, data)
                    .then( res => {
                        return res.status == 200 ? true : false;
                    })
    }
}

export default service;