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
          <li><router-link to="/about-us/specialists">Our Specialists</router-link></li>
          <li><router-link to="/about-us/green-promise">Our Green Promise</router-link></li>
          <li><router-link to="/about-us/meet-the-mind">Meet The Mind Behind Warani</router-link></li>
        </ul>
      </div>
      <div class="footer-section footer-contact">
        <h4>Contact Us</h4>
        <p><strong>Email:</strong> info@warani.iq</p>
        <p><strong>Phone:</strong> +964 770 4444 866</p>
        <p><strong>Address:</strong> Section 608, St. 7, Bld. 2/1, Al-Mamoon District, Baghdad, Iraq</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-icons">
        <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a> <!-- Twitter icon restored -->
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
.footer {
  background-color: #1A1A1A;
  color: #fff;
  padding: 60px 40px; /* Increase padding for a larger footer */
  font-size: 16px; /* Slightly larger font size for better readability */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px; /* Increase gap for better separation between sections */
}

.footer-section h4 {
  color: #F2A365;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #F2A365;
}

.footer-contact p {
  margin: 5px 0;
  line-height: 1.6; /* Increase line-height for better readability */
}

.social-icons a {
  color: #fff;
  margin: 0 15px; /* Increase margin for more space between icons */
  font-size: 24px; /* Larger icons for better visibility */
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #A0522D;
}

.footer-bottom {
  margin-top: 40px; /* More space above the bottom section */
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    width: 100%; /* Full width for smaller screens */
  }

  .social-icons {
    margin-top: 20px;
  }
}
.footer-section.footer-about {
  margin-top: 20px; /* Add space between sections */
}


</style>
