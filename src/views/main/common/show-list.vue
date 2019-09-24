<template>
    <section class="show-list">
        <div class="level">
            <h3 class="title">
                이력 조회
                <b-button size="is-medium"
                    icon-right="refresh" @click="refresh">
                    새로고침
                </b-button>
            </h3>
            <span class="has-text-danger has-text-weight-bold is-size-6"> * 패키징 되지 않은 원두는 QR코드가 제공되지 않습니다.</span>
        </div>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th class="has-text-centered" style="width: 10%;">커피 ID</th>  
                    <th class="has-text-centered" style="width: 15%;">품종목록</th>
                    <th class="has-text-centered" style="width: 15%;">산지</th>
                    <th class="has-text-centered" style="width: 20%;">등록일자</th>
                    <th class="has-text-centered" style="width: 20%;">QR코드</th>
                </tr>     
            </thead>
            <tbody>

                <tr v-for="(row, index) in data" :key="row.key" @click="openModal(row)">
                    <td>{{row.key}}</td>
                    <td>{{row.v12}}</td>
                    <td>{{row.v13}}</td>
                    <td>{{row.v11}}</td>
                    <td class="qr-code" :row-idx="parseInt(index/4)">
                        <b-button icon-left="qrcode-scan" @click.prevent="openQRCodeinJquery($event,index)">보기</b-button>
                    </td>
                </tr>
            </tbody>
            
        </table>

        <!-- <b-table
            :data="data"
            :striped="true"
            :hoverable="true"
            :mobile-cards="true"
            @click="openModal">

            <template slot-scope="props">
                <b-table-column field="key" label="커피 ID" width="200">
                    {{ props.row.key }}
                </b-table-column>

                <b-table-column field="v12" label="품종목록">
                    {{ props.row.v12 }}
                </b-table-column>

                <b-table-column field="v13" label="산지">
                    {{ props.row.v13 }}
                </b-table-column>

                <b-table-column field="v11" label="등록일자" centered>
                    <span class="tag is-success">
                        {{ props.row.v11 }}
                    </span>
                </b-table-column>
                
                <b-table-column label="QR 코드" class="qr-code" :data-row-idx-by-4="parseInt(props.index/4)">
                    <span @click.prevent="openQRCode($event, props.row)">
                        <b-button icon-left="qrcode-scan">보기</b-button>
                    </span>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>데이터가 없습니다</p>
                    </div>
                </section>
            </template>
        </b-table> -->

        <b-modal :active.sync="dataModalBtn" has-modal-card>
            <info-modal :rowData=modalData></info-modal>
        </b-modal>

        <b-modal :active.sync="qrCodeModalBtn" has-modal-card>
            <qr-code-modal :rowData=qrcodeData></qr-code-modal>
        </b-modal>    
    </section>
</template>
<script>
import axios   from 'axios'
import modal         from './info-modal'
import QRcodeModal   from './qrcode-modal'
import CommonService from '../../../api/common/commonService'
import $ from 'jquery'
export default {
    components : { 
        'info-modal'    : modal,
        'qr-code-modal' : QRcodeModal
    },
    async mounted() {
        this.data = await CommonService.getHistory();
        await this.meregRow()
    },
    data() {
        return {
            // data  : [
            //         {"key":"1112","v11":"2019/09/01","v12":"로부스타","v13":"에티오피아","v14":"2019/08/01","v15":"60","v16":"AA","v17":"2500~3000","v18":"인천 중구 인중로 305 북성동 1가 4-1","v19":"2019/09/06","v20":"2019/09/07","v21":"19°C","v22":"66∅","v23":"2019/09/08","v24":"카페 블리스","v25":"2019/09/09 ","v26":"2019/09/09","v27":"라이트","v28":"2","v29":"3","v30":"2","v31":"1","v32":"2","v33":"4","v34":"4","v35":"4","v36":"2019/09/11","v37":"블록커피","v38":"2019/09/12","v39":"2019/09/12","v40":"2019/09/12"},
            //         {"key":"1113","v11":"2019/08/01","v12":"리베리카","v13":"케냐","v14":"2019/08/02","v15":"60","v16":"AA","v17":"2500~3000","v18":"인천 중구 인중로 305 북성동 1가 4-1","v19":"2019/08/06","v20":"2019/08/07","v21":"19°C","v22":"66∅","v23":"2019/08/08","v24":"런던다방","v25":"2019/08/09 ","v26":"2019/08/09","v27":"시나몬","v28":"1","v29":"3","v30":"2","v31":"5","v32":"2","v33":"4","v34":"2","v35":"2","v36":"2019/08/11","v37":"블록커피","v38":"2019/08/12","v39":"2019/08/12","v40":"2019/08/12"},
            //         {"key":"121416","v11":"2019/07/01","v12":"아라비카","v13":"브라질","v14":"2019/07/01","v15":"60","v16":"AA","v17":"2500~3000","v18":"인천 중구 인중로 305 북성동 1가 4-1","v19":"2019/07/06","v20":"2019/07/07","v21":"19°C","v22":"66∅","v23":"2019/07/08","v24":"커피프린스 1호점","v25":"2019/07/09 ","v26":"2019/07/09","v27":"라이트","v28":"2","v29":"3","v30":"2","v31":"5","v32":"2","v33":"1","v34":"1","v35":"4","v36":"2019/07/11","v37":"블록커피","v38":"2019/07/12","v39":"2019/07/12","v40":"2019/07/12"}
            // ],
            data : [],
            modalData : {},
            qrcodeData : [],
            dataModalBtn: false,
            qrCodeModalBtn : false,
        }
    },
    methods :{
        openModal(row) {
            this.dataModalBtn = true;
            this.modalData = row;
        },
        openQRCode(event, row) {

            // [1] row에 걸린 이벤트 제거
            event.stopPropagation();

            // [2] QR 코드 보여주기
            this.qrCodeModalBtn = true;
        },
        openQRCodeinJquery(event ,index) {

             // [1] row에 걸린 이벤트 제거
            event.stopPropagation();
            
            const start = parseInt(this.data.length/4)+1
            const end   = start + 4
            this.qrcodeData = this.data.slice(start, end)

            // [2] QR 코드 보여주기
            this.qrCodeModalBtn = true;

        },
        meregRow() {
            // 엑셀 row 병합 함수 
            $('.qr-code').each(function() {
                var rows = $(".qr-code[row-idx='" + $(this).attr('row-idx') + "']");
                if (rows.length > 1) {
                    rows.eq(0).attr("rowspan", rows.length);
                    rows.not(":eq(0)").remove();
                }
            })
        },

        async refresh() {
            this.data = await CommonService.getHistory();
            await this.meregRow()
        }
    }
}
</script>
<style scoped>
table tr {
    text-align: center;
}
table tr td {
    text-align: center;
}
table tr th {
    text-align: center;
}
</style>
