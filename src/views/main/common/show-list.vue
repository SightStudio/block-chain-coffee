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
        this.data =  await CommonService.getHistory();
        await this.meregRow();
    },
    data() {
        return {
            // data  : [
            //     { "key": "11222", "v11": "2019/09/24", "v12": "아라비카", "v13": "에티오피아", "v14": "2019/09/24", "v15": "1", "v16": "A", "v17": "2", "v18": "dd", "v19": "ddd", "v20": "sdfs", "v21": "sdfs", "v22": "sdsdf", "v23": "2", "v24": "2", "v25": "2", "v26": "2", "v27": "2", "v28": "2", "v29": "2", "v30": "2", "v31": "2", "v32": "2", "v33": "2", "v34": "2", "v35": "2", "v36": "2", "v37": "2", "v38": "2", "v39": "2", "v40": "2" },
            //     { "key": "11223", "v11": "2019/09/24", "v12": "아라비카", "v13": "에티오피아", "v14": "2019/09/24", "v15": "1", "v16": "A", "v17": "2", "v18": "df", "v19": "sdf", "v20": "", "v21": "", "v22": "", "v23": "", "v24": "", "v25": "", "v26": "", "v27": "", "v28": "", "v29": "", "v30": "", "v31": "", "v32": "", "v33": "", "v34": "", "v35": "", "v36": "", "v37": "", "v38": "", "v39": "", "v40": "" },
            //     { "key": "11228", "v11": "2019/09/24", "v12": "아라비카", "v13": "에티오피아", "v14": "2019/09/24", "v15": "1", "v16": "A", "v17": "2", "v18": "", "v19": "", "v20": "", "v21": "", "v22": "", "v23": "", "v24": "", "v25": "", "v26": "", "v27": "", "v28": "", "v29": "", "v30": "", "v31": "", "v32": "", "v33": "", "v34": "", "v35": "", "v36": "", "v37": "", "v38": "", "v39": "", "v40": "" },
            // ],
            data:[],
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
            
            const start = parseInt(this.data.length/4)
            const end   = start + 3
            this.qrcodeData = this.data.slice(start-1, end)

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
        },
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
