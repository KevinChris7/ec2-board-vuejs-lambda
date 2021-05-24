import { createApp } from 'vue';

//import { createVuetify } from 'vuetify';
//import vuetify from 'vuetify';
import App from './App.vue';
//import { Table } from './components/Table.vue';

const app = createApp(App)

//const vuetify = createVuetify('vuetify/lib')
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

// createApp(App).use(Vuetify);
//app.component('b-table', Table);
//app.use(AgGridVue);

// app.use(Vuetify);

//new app({render: h => h(App)}).$mount('#app');

app.mount('#app');
