<template>
    <div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">정보 상세보기</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                
                <div v-if="rowData.v11">
                    <section>
                        <b-message title="유통업자 [ 책임자 : 김홍준 ]" :closable="false">

                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>원두 수입날짜</td>
                                        <td>{{rowData.v11}}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>원두 품종</td>
                                        <td>{{rowData.v12}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 산지</td>
                                        <td>{{rowData.v13}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 수확일</td>
                                        <td>{{rowData.v14}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 수량</td>
                                        <td>{{rowData.v15}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 생두 등급 </td>
                                        <td>{{rowData.v16}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 재배고도 </td>
                                        <td>{{rowData.v17}}</td>
                                    </tr>

                                    <tr>
                                        <td>원두 배송지 </td>
                                        <td>{{rowData.v18}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div> 

                <div v-if="rowData.v19">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>
                    <section>
                        <b-message title="창고 관리자 [ 책임자 : 설동민 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>원두 출고 날짜</td>
                                        <td>{{rowData.v19}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v20">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="창고 관리자 [ 책임자 : 설동민 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>원두 도착 날짜</td>
                                        <td>{{rowData.v20}}</td>
                                    </tr>

                                    <tr>
                                        <td>보관 온도</td>
                                        <td>{{rowData.v21}}°C</td>
                                    </tr>

                                    <tr>
                                        <td>보관 습도 (상대습도)</td>
                                        <td>{{rowData.v22}}∅ </td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v23">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="창고 관리자 [ 책임자 : 설동민 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>창고 관리 업체 원두 출고 날짜</td>
                                        <td>{{rowData.v23}}</td>
                                    </tr>

                                    <tr>
                                        <td>창고 관리 업체 배송지</td>
                                        <td>{{rowData.v24}}</td>
                                    </tr>

                                    <tr>
                                        <td>유통 업체로부터 도착 날짜</td>
                                        <td>{{rowData.v25}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v26">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="로스팅 업체 [ 책임자 : 김의진 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>원두 수취 시간</td>
                                        <td>{{rowData.v26}}</td>
                                    </tr>

                                    <tr>
                                        <td>로스팅 단계</td>
                                        <td>{{rowData.v27}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 향</td>
                                        <td>{{rowData.v28}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 비율</td>
                                        <td>{{rowData.v29}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 신랄</td>
                                        <td>{{rowData.v30}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 달콤</td>
                                        <td>{{rowData.v31}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 뒷맛</td>
                                        <td>{{rowData.v32}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 무게감</td>
                                        <td>{{rowData.v33}}</td>
                                    </tr>

                                    <tr>
                                        <td>플레버 신맛</td>
                                        <td>{{rowData.v34}}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>플레버 아로마</td>
                                        <td>{{rowData.v35}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v36">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="로스팅 업체 [ 책임자 : 김의진 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>로스팅업체 출고 날짜</td>
                                        <td>{{rowData.v36}}</td>
                                    </tr>
                                     <tr>
                                        <td>로스팅업체 배송지</td>
                                        <td>{{rowData.v37}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v38">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="정기 배송센터 [ 블록 커피 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>상품 도착 날짜</td>
                                        <td>{{rowData.v38}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v39">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="정기 배송센터 [ 블록 커피 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>상품 패키징 날짜</td>
                                        <td>{{rowData.v39}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>

                <div v-if="rowData.v40">
                    <br>
                    <div class="container has-text-centered">
                        <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                    </div>
                    <br>

                    <section>
                        <b-message title="정기 배송센터 [ 블록 커피 ]" :closable="false">
                            <table class="table is-bordered is-striped is-hoverable is-fullwidth ">
                                <tbody>
                                    <tr>
                                        <td>상품 출고 날짜</td>
                                        <td>{{rowData.v40}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-message>
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: { 
        rowData : { type : Object , required: true, default (){ return {} } },
    },
    data() {
        return {}
    },
}
</script>
<style scoped>
.modal-card-head, .modal-card-foot { justify-content: flex-end;}
</style>