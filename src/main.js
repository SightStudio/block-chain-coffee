import Vue    from 'vue'
import App    from './App.vue'
import router from './routes/global-router'
import store  from './store'

import Buefy  from 'buefy'
import moment from "moment";

import 'buefy/dist/buefy.css'
import 'vue-material-design-icons/styles.css'

Vue.use(Buefy, {
  defaultDateFormatter: date => {
    return moment(date).format("YYYY/MM/DD");
  },
  defaultDateParser: date => {
    return moment(date, "YYYY/MM/DD").toDate();
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')