import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';

//3rd party component styling
import 'primeicons/primeicons.css';

import '@/styles/global.css';
import '@/styles/primevue-sass-theme/themes/mytheme/theme.scss';

/* custom components */
import CustomNavbar from '@/components/CustomNavbar.vue';
import CustomBanner from '@/components/CustomBanner.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomCardSolution from '@/components/CustomCardSolution.vue';
import CustomContainer from '@/components/CustomContainer.vue';
import CustomIconWrapper from '@/components/CustomIconWrapper.vue';
import CustomProductTab from '@/components/CustomProductTab.vue';
import CustomPackageCard from '@/components/CustomPackageCard.vue';
import CustomMemberItem from '@/components/CustomMemberItem.vue';
import CustomAvatar from '@/components/CustomAvatar.vue';
import CustomInputText from '@/components/CustomInputText.vue';

const pinia = createPinia();
const app = createApp(App);

/* plugins */
app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });

app.directive('animateonscroll', AnimateOnScroll);

app.component('CustomNavbar', CustomNavbar);
app.component('CustomBanner', CustomBanner);
app.component('CustomButton', CustomButton);
app.component('CustomCardSolution', CustomCardSolution);
app.component('CustomContainer', CustomContainer);
app.component('CustomIconWrapper', CustomIconWrapper);
app.component('CustomProductTab', CustomProductTab);
app.component('CustomPackageCard', CustomPackageCard);
app.component('CustomMemberItem', CustomMemberItem);
app.component('CustomAvatar', CustomAvatar);
app.component('CustomInputText', CustomInputText);

app.mount('#app');
