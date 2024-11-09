import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplify_outputs.json';

// Configure Amplify with the outputs directly
Amplify.configure(amplifyconfig);

const app = createApp(App);
app.use(router);
app.mount('#app');
