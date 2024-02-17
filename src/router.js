import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import CareersPage from './views/CareersPage.vue';
import ContactUsPage from './views/ContactUsPage.vue';
import RecruitmentPage from './views/Services/RecruitmentPage.vue';
import OnboardingPage from './views/Services/OnboardingPage.vue';
import PayrollPage from './views/Services/PayrollPage.vue';
import HROutsourcingPage from './views/Services/HROutsourcingPage.vue';
import WorkPermitPage from './views/Services/WorkPermitPage.vue';
import VisaPage from './views/Services/VisaPage.vue';
import HousekeepersPage from './views/Services/HousekeepersPage.vue';
import WelcomePage from '@/views/AboutUs/WelcomePage.vue';
import GoalsPage from '@/views/AboutUs/GoalsPage.vue';
import VisionsPage from '@/views/AboutUs/VisionsPage.vue';
import SpecialistPage from '@/views/AboutUs/SpecialistPage.vue';
import GreenPromisePage from '@/views/AboutUs/GreenPromisePage.vue';
import MeetTheMindPage from '@/views/AboutUs/MeetTheMindPage.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/careers', name: 'careers', component: CareersPage },
    { path: '/contact-us', name: 'contact', component: ContactUsPage },
    { path: '/services/recruitment', name:'recruitment', component: RecruitmentPage },
    { path: '/services/onboarding', name:'onboarding', component: OnboardingPage },
    { path: '/services/payroll', name:'payroll', component: PayrollPage },
    { path: '/services/hr-outsourcing', name:'hr-outsourcing', component: HROutsourcingPage },
    { path: '/services/work-permit', name:'work-permit', component: WorkPermitPage },
    { path: '/services/visa', name:'visa', component: VisaPage },
    { path: '/services/housekeepers', name:'housekeepers', component: HousekeepersPage },
    { path: '/about-us/welcome', name: 'welcome', component: WelcomePage },
    { path: '/about-us/goals', name: 'goals', component: GoalsPage },
    { path: '/about-us/visions', name: 'visions', component: VisionsPage },
    { path: '/about-us/specialist', name: 'specialist', component: SpecialistPage },
    { path: '/about-us/green-promise', name: 'green-promise', component: GreenPromisePage },
    { path: '/about-us/meet-the-mind', name: 'meet-the-mind', component: MeetTheMindPage },
  ],
});

export default router;
