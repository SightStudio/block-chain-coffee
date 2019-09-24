import axios   from 'axios'
import { API } from '../../util/constant/constant';
//const PATH = API.test;
const PATH = API.cafe;
const service = {
    /**
     * 카페 관리 - 로스팅 단계 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerRoastHistory : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    },

    /**
     * 카페 관리 - 상품 출고 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsRelease : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey2`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    },
    /**
     * 카페 관리 - 도착 날자 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerDeliverDate : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey3`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    }

}

export default service;