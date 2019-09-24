<template>
    <div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">정보 상세보기</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

                <section>
                    <b-message title="카페 1 " :closable="false">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
                    </b-message>
                </section>
                
                <br>
                <div class="container has-text-centered">
                    <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                </div>
                <br>

                <section>
                    <b-message title="창고 관리자" :closable="false">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
                    </b-message>
                </section>

                <br>
                <div class="container has-text-centered">
                    <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                </div>
                <br>

                <section>
                    <b-message title="수입 업자" :closable="false">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
                    </b-message>
                </section>

                <br>
                <div class="container has-text-centered">
                    <b-icon icon="arrow-down-thick" size="is-large"></b-icon>
                </div>
                <br>

                <section>
                    <b-message title="창고 관리자" :closable="false">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
                    </b-message>
                </section>

            </section>

            <footer class="modal-card-foot has-text-right">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {}
    },
}
</script>
<style scoped>
.modal-card-head, .modal-card-foot { justify-content: flex-end;}
</style>