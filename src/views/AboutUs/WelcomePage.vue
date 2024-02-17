<template>
  <div class="welcome-page">
    <div class="section">
      <h1>Welcome to Warani Manpower</h1>
      <p>Warani Company for General Trade, Public Transport, Public Services, and the Recruitment and Employment of Iraqi and Foreign Manpower is a company licensed by the Iraqi Ministry of Labor and Social Security with license number (60), WARANI is one of the leading recruiting and staffing firms in Iraq, providing professional human capital solutions to corporates, offering comprehensive high-valued recruitments, Payroll management, Mobility services, and Vetting. We have been providing HR services in Iraq since 2004. Our entire focus in Warani is to improve the quality of labor in the local market, through coordinating and supporting efforts that focus on innovative and distinct.</p>
      <div class="images">
        <img src="@/assets/welcome1.jpg" alt="Welcome Image 1">
        <img src="@/assets/welcome2.png" alt="Welcome Image 2">
      </div>
    </div>
    <section class="section section-alt">
      <h2>Empowering Your Workforce?</h2>
      <p>We offer our clients end-to-end recruitment solutions for full cycle recruitment, contractual staffing, payroll management, and outsourcing personnel within the Oil & Gas, Construction, Telecom, and Energy sectors. As a local Iraqi and entity, we are compliant with all local legislations surrounding labor laws and tax compliance. We have a strong understanding of the candidate market with an existing talent pool of expatriate and local workers. Our attraction strategies are stretched far in the region, targeting both active and passive candidates. WARANI conceits itself as being a top Manpower & Recruitment Agency in Iraq. We immediately combine our extensive knowledge and long experience to provide the best innovative solutions, which in turn will achieve the maximum production capacity of workers, we achieve quality is not only in word, but indeed, and because we follow an advanced methodology in management, we are working to provide the best services that you can get, and it is backed by all laws and regulations in Iraq. With our valuable ideas regarding labor recruitment contracts through which business companies can get maximum performance, we are keen to fulfill our promises and make our focus on achieving quality in maintaining your employment, which is the reason for the success and continuity of your business.</p>
      <div class="images">
        <img src="@/assets/workforce1.webp" alt="Workforce Image 1">
        <img src="@/assets/workforce2.png" alt="Workforce Image 2">
      </div>
    </section>
    <div class="contact-btn">
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
};
</script>

<style scoped>
.welcome-page {
  padding-top: 100px;
}

.section {
  margin-bottom: 40px;
  text-align: center;
  font-size: 1.3em;
}

.section p {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
}

.section-alt {
  background-color: #f4f4f4;
  padding: 20px;
}

.images {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.images img {
  width: 48%;
  height: auto;
}

.contact-btn {
  text-align: center;
  margin-top: 40px;
}

.contact-btn a {
  display: inline-block;
  background-color: #A0522D;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
