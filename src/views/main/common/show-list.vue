<template>
    <section class="show-list">
        <div class="level">
            <h3 class="title">이력 조회</h3>
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
import modal         from './info-modal'
import QRcodeModal   from './qrcode-modal'
import CommonService from '../../../api/common/commonService'
import $ from 'jquery'
export default {
    components : { 
        'info-modal'    : modal,
        'qr-code-modal' : QRcodeModal
    },
    mounted() {
        this.data = CommonService.getHistory();
        this.meregRow()
    },
    data() {
        return {
            data  : [],
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
                    //console.log($(this).data('row-idx-by-4'))
                    //console.log($(this).data('row-idx-by-4'))
                    var rows = $(".qr-code[row-idx='" + $(this).attr('row-idx') + "']");
//                    console.log(rows)
                    console.log(rows.length)
                    if (rows.length > 1) {
                        rows.eq(0).attr("rowspan", rows.length);
                        rows.not(":eq(0)").remove();
                    }
                })
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