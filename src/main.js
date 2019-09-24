import Vue    from 'vue'
import App    from './App.vue'
import router from './routes/global-router'
import store  from './store'

import Buefy  from 'buefy'
import moment from "moment";

import 'buefy/dist/buefy.css'
import 'vue-material-design-icons/styles.css'

import VueApexCharts from 'vue-apexcharts'

// [1] buefy date formatter 변경
Vue.use(Buefy, {
  defaultDateFormatter: date => {
    return moment(date).format("YYYY/MM/DD");
  },
  defaultDateParser: date => {
    return moment(date, "YYYY/MM/DD").toDate();
  }
})

// [2] apex char library
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')