<template>
  <div class="visa-page">
    <div class="banner">
      <h1>Iraq Work Visa Services</h1>
    </div>
    <div class="media">
      <div class="media-overlay">
      </div>
    </div>
    <div class="content">
      <h2>Visa and Residency Permit Services</h2>
      <p>At Warani Manpower, we understand the complexities of the immigration process for expatriates. Our visa and residency permit services are tailored to provide comprehensive support, ensuring a seamless experience for both employers and international staff.</p>
      <p>From initial consultation to the final issuance of visas and residency permits, our expert team guides you through each step, ensuring compliance with all relevant immigration laws and regulations. We aim to facilitate a smooth transition for your expatriates, allowing them to focus on their new roles without the hassle of navigating bureaucratic hurdles.</p>
      <div class="cta">
        <a href="/contact-us" class="cta-btn">Get In Touch</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisaPage',
};
</script>

<style scoped>
.visa-page {
  padding-top: 20px;
}

.banner {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.banner h1 {
  margin: 0;
  color: #333;
}

.content {
  padding: 20px;
  text-align: center;
}

.media {
  background-image: url("@/assets/visa.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  position: relative;
}

.media-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

.cta .cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #A0522D;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.cta .cta-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .media {
    height: 300px;
  }
}
</style>
