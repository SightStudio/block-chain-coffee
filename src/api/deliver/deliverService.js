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
        return axios.post(`${PATH}/createkey4`, data)
                    .then( res => {
                        return res.status == 200 ? true : false;
                    })
    },

    /**
     * 정기 배송 센터 - 상품 패키징 날짜 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsPackage : (data) => {
        return axios.post(`${PATH}/createkey3`, data)
                    .then( res => {
                        return res.status == 200 ? true : false;
                    })
    },
    /**
     * 정기 배송 센터 - 상품 도착 날짜 등록
     * 
     * @author Dong-Min Seol
     * @since  2019.09.22
     */
    registerGoodsArrive : (data) => {
        return axios.post(`${PATH}/createkey2`, data)
                    .then( res => {
                        return res.status == 200 ? true : false;
                    });
    }

}

export default service;