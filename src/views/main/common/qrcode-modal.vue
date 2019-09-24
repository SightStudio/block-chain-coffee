<template>
    <div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">정보 상세보기</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <canvas id="QRCode-Canvas"></canvas>
            </section>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
    props: { 
        rowData : { type : Array , required: true, default (){ return [] } },
    },
    data() {
        return {}
    },
    mounted() {
        QRCode.toCanvas(document.getElementById('QRCode-Canvas'), JSON.stringify(this.rowData), function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }
}
</script>
<style scoped>
.modal-card-head, .modal-card-foot { justify-content: flex-end;}
</style>