<template>
  <div class="home">
    <div class="home">
    <div class="image-background">
      <img src="@/assets/manpower2.jpg" alt="Background Image">
    </div>
    <!-- Rest of your template -->
  </div>
    <div class="content">
      <h1>Empowering Your Success in the Oil and Gas Industry</h1>
      <p>Discover unparalleled manpower solutions tailored for the oil and gas sector. At Warani, we're dedicated to connecting you with top-tier talent and innovative services that drive your business forward. Experience the difference with our expertly crafted solutions designed to meet the unique challenges of the corporate world.</p>
    </div>
  </div>
  <!-- Enhanced New Sections -->
<section class="section our-journey">
  <div class="container">
    <h2>Our Journey</h2>
    <p>Founded with a vision to revolutionize the recruitment landscape in Iraq, Warani Company has grown from a passionate startup to a leading force in manpower solutions. Our roots are deeply embedded in the values of integrity, innovation, and excellence, guiding us in connecting top talent with leading industries.</p>
  </div>
</section>

<section class="section commitment-to-excellence">
  <div class="container">
    <h2>Commitment to Excellence</h2>
    <p>At the heart of Warani's success is
our unwavering commitment to
quality. Our rigorous quality
control processes ensure that
every candidate we place and
every service we provide meets
the highest standards of
excellence. From thorough vetting
procedures to continuous
performance monitoring, we
guarantee satisfaction and
reliability in all our endeavors.</p>
  </div>
</section>

<section class="section success-through-partnership">
  <div class="container">
    <h2>Success Through Partnership</h2>
    <p>We pride ourselves on our track record of successful placements, from revitalizing the workforce of the Oil & Gas sector to
pioneering telecom projects. Our clients attest to our bespoke solutions and the tangible impact on their growth.
</p>
  </div>
</section>

<section class="section innovation-at-our-core">
  <div class="container">
    <h2>Innovation at Our Core</h2>
    <p>Leveraging cutting-edge
technology, Warani employs AIdriven analytics and virtual reality
assessments to ensure the perfect
match between candidates and
companies. Our proprietary
platform, Warani Recruit,
streamlines the hiring process,
setting new industry standards for
efficiency and effectiveness.</p>
  </div>
</section>

<section class="section our-services">
  <div class="container">
    <h2>Our Services</h2>
    <p>Explore our comprehensive range of services tailored to meet your specific needs. From recruitment to payroll management, we've got you covered.</p>
    <section class="section our-services">
  <div class="container">
    <h2>Our Services</h2>
    <ul>
      <li><router-link to="/services/recruitment">Recruitment and employment of local and international staff</router-link></li>
      <li><router-link to="/services/onboarding">Staff onboarding services</router-link></li>
      <li><router-link to="/services/payroll">Payroll management services</router-link></li>
      <li><router-link to="/services/hr-outsourcing">HR outsourcing services</router-link></li>
      <li><router-link to="/services/work-permit">Issuance of a work permit from the Ministry of Labor and Social Affairs</router-link></li>
      <li><router-link to="/services/visa">Issuance of an entry visa to Iraq and the issuance of residency permits</router-link></li>
      <li><router-link to="/services/housekeepers">Housekeepers</router-link></li>
    </ul>
    <router-link to="/contact-us" class="cta-btn">Contact Us</router-link>
  </div>
</section> 
</div>
</section>


  
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-background video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.content h1 {
  font-size: 3rem;
}

.content p {
  font-size: 1.5rem;
}

.services-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px; /* Adjust this value based on the height of your header */
}

/* General Section Styling */
.section {
  padding: 50px 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.section:nth-child(even) {
  background-color: #e9ecef;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Specific Styling for Each Section for visual differentiation */
.our-journey h2,
.commitment-to-excellence h2,
.success-through-partnership h2,
.innovation-at-our-core h2,
/* New styles for the Our Services section */
.our-services ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
  margin: 0 0 20px; /* Add some margin to the bottom */
}

.our-services ul li {
  margin-bottom: 10px; /* Add some space between list items */
}

.our-services ul li router-link {
  display: block; /* Make the link fill the list item for easier clicking */
  padding: 10px; /* Add some padding for aesthetics */
  background-color: #f0f0f0; /* Light background color for the links */
  color: #007bff; /* Make the link color consistent with the CTA button */
  border-radius: 5px; /* Slightly round the corners of the link background */
  text-decoration: none; /* Remove underline from links */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.our-services ul li router-link:hover {
  background-color: #e0e0e0; /* Darker shade on hover for better interaction feedback */
}

.our-services .cta-btn {
  display: block; /* Block display to allow width and margin manipulation */
  width: max-content; /* Fit the button's width to its content */
  margin: 20px auto 0; /* Center the button horizontally with automatic margins */
  padding: 10px 20px; /* Padding inside the button */
  background-color: #007bff; /* Button background color */
  color: white; /* Text color */
  text-align: center; /* Center the text */
  border-radius: 5px; /* Round the corners */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease; /* Smooth background color transition on hover */
}

.our-services .cta-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .our-services ul li router-link {
    padding: 8px; /* Slightly reduce padding on smaller screens */
  }

  .our-services .cta-btn {
    padding: 8px 15px; /* Adjust padding */
  }
}

.cta-btn {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .section {
    padding: 30px 0;
  }

  .container {
    padding: 0 10px;
  }

  .cta-btn {
    padding: 8px 15px;
  }
}

.image-background img {
  width: 100%;
  height: 1000px; /* Set a specific height */
  object-fit: cover; /* Cover the container without stretching the image */
}


</style>
