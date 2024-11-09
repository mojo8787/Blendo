import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CareersPage from '@/views/CareersPage.vue';
import ContactUsPage from '@/views/ContactUsPage.vue';

// Import About Us pages
import WelcomePage from '@/views/AboutUs/WelcomePage.vue';
import GoalsPage from '@/views/AboutUs/GoalsPage.vue';
import VisionsPage from '@/views/AboutUs/VisionsPage.vue';
import SpecialistPage from '@/views/AboutUs/SpecialistPage.vue';
import GreenPromisePage from '@/views/AboutUs/GreenPromisePage.vue';
import MeetTheMindPage from '@/views/AboutUs/MeetTheMindPage.vue';

// Import Services pages
import RecruitmentPage from '@/views/Services/RecruitmentPage.vue';
import OnboardingPage from '@/views/Services/OnboardingPage.vue';
import PayrollPage from '@/views/Services/PayrollPage.vue';
import HROutsourcingPage from '@/views/Services/HROutsourcingPage.vue';
import WorkPermitPage from '@/views/Services/WorkPermitPage.vue';
import VisaPage from '@/views/Services/VisaPage.vue';
import HousekeepersPage from '@/views/Services/HousekeepersPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/careers',
    name: 'Careers',
    component: CareersPage
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: ContactUsPage
  },
  // About Us routes
  {
    path: '/about-us/welcome',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/about-us/goals',
    name: 'Goals',
    component: GoalsPage
  },
  {
    path: '/about-us/visions',
    name: 'Visions',
    component: VisionsPage
  },
  {
    path: '/about-us/specialist',
    name: 'Specialist',
    component: SpecialistPage
  },
  {
    path: '/about-us/green-promise',
    name: 'GreenPromise',
    component: GreenPromisePage
  },
  {
    path: '/about-us/meet-the-mind',
    name: 'MeetTheMind',
    component: MeetTheMindPage
  },
  // Services routes
  {
    path: '/services/recruitment',
    name: 'Recruitment',
    component: RecruitmentPage
  },
  {
    path: '/services/onboarding',
    name: 'Onboarding',
    component: OnboardingPage
  },
  {
    path: '/services/payroll',
    name: 'Payroll',
    component: PayrollPage
  },
  {
    path: '/services/hr-outsourcing',
    name: 'HROutsourcing',
    component: HROutsourcingPage
  },
  {
    path: '/services/work-permit',
    name: 'WorkPermit',
    component: WorkPermitPage
  },
  {
    path: '/services/visa',
    name: 'Visa',
    component: VisaPage
  },
  {
    path: '/services/housekeepers',
    name: 'Housekeepers',
    component: HousekeepersPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router; 