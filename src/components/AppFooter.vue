<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section footer-services">
        <h4>Our Services</h4>
        <ul>
          <li><router-link to="/services/recruitment">Recruitment and Employment</router-link></li>
          <li><router-link to="/services/onboarding">Staff Onboarding Services</router-link></li>
          <li><router-link to="/services/payroll">Payroll Management Services</router-link></li>
          <li><router-link to="/services/hr-outsourcing">HR Outsourcing Services</router-link></li>
          <li><router-link to="/services/work-permit">Work Permit Issuance</router-link></li>
          <li><router-link to="/services/visa">Visa and Residency Permits</router-link></li>
          <li><router-link to="/services/housekeepers">Housekeepers</router-link></li>
        </ul>
      </div>
      <div class="footer-section footer-about">
        <h4>About Us</h4>
        <ul>
          <li><router-link to="/about-us/welcome">Welcome to Warani</router-link></li>
          <li><router-link to="/about-us/goals">Our Goals</router-link></li>
          <li><router-link to="/about-us/visions">Visions</router-link></li>
          <li><router-link to="/about-us/specialist">Our Specialists</router-link></li>
          <li><router-link to="/about-us/green-promise">Our Green Promise</router-link></li>
          <li><router-link to="/about-us/meet-the-mind">Meet The Mind Behind Warani</router-link></li>
        </ul>
      </div>
      <div class="footer-section footer-contact">
        <h4>Contact Us</h4>
        <p><strong>Email:</strong> info@warani.iq</p>
        <p><strong>Phone:</strong> +964 770 4444 866</p>
        <p><strong>Address:</strong> Section 608, St. 7, Bld. 2/1, Al-Mamoon Dist., Baghdad, Iraq</p>
      </div>
      <div class="footer-section footer-certifications">
        <h4>Certifications</h4>
        <ul>
          <li><a href="/assets/Warani - ISO 9001.pdf" target="_blank"><i class="fas fa-certificate"></i> ISO 9001</a></li>
          <li><a href="/assets/Warani - ISO 14001.pdf" target="_blank"><i class="fas fa-certificate"></i> ISO 14001</a></li>
          <li><a href="/assets/Warani - ISO 45001.pdf" target="_blank"><i class="fas fa-certificate"></i> ISO 45001</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-icons">
        <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
      <p>&copy; 2024 Warani Manpower. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
/* Add your styles here */
.footer {
  background-color: #1A1A1A;
  color: #fff;
  padding: 60px 40px;
  font-size: 16px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
.footer-section {
  align-items: flex-start; /* Align items to the start */
}

.footer-section h4 {
  font-weight: bold;
  color: #F2A365;
  margin-bottom: 20px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start; /* Align the header text from left to right */
}

.footer-section ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
}

.footer-section ul li {
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Align items vertically */
}

.footer-section ul li a {
  font-weight: normal;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a i {
  margin-right: 10px; /* Add space between icon and text */
  color: #F2A365; /* Style the icon */
}

.footer-section ul li a:hover {
  color: #F2A365;
}

.footer-contact p {
  margin: 5px 0;
  line-height: 1.8; /* Increased line spacing */
  display: flex;
  justify-content: flex-start; /* Align the text from left to right */
}

.footer-contact strong {
  font-weight: bold; /* Set the strong element to bold */
  margin-right: 5px; /* Add space between ":" and the text */
}

.social-icons a {
  color: #fff;
  margin: 0 15px;
  font-size: 24px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #A0522D;
}

.footer-bottom {
  margin-top: 40px;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    width: 100%;
  }

  .social-icons {
    margin-top: 20px;
  }
}
</style>
