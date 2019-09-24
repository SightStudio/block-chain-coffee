import axios   from 'axios'
import { API } from '../../util/constant/constant';
const PATH = API.deliver;
const service = {
    /**
     * 정기 배송 센터 - 상품 출고 날짜 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsRelease : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey4`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    },

    /**
     * 정기 배송 센터 - 상품 패키징 날짜 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsPackage : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey3`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    },
    /**
     * 정기 배송 센터 - 상품 도착 날짜 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsArrive : (data) => {
        let result = false;        
        axios.post(`${PATH}/createkey2`, data)
             .then( res => {
                 result = res.status == 200 ? true : false;
             })
        return result;
    }

}

export default service;