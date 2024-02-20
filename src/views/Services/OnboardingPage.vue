<template>
  <div class="hr-outsourcing-page">
    <div class="banner">
      <h1>HR Outsourcing Services</h1>
    </div>
    <div class="content">
      <div class="media">
        <img src="@/assets/hr-outsourcing.jpg" alt="HR Outsourcing Image">
          <div class="content">
          <h2>Expert HR Support</h2>
          <p>At Warani Manpower, we believe that a successful onboarding process is crucial for fostering employee engagement and retention. Our expert HR support services are designed to provide a seamless integration of new employees into your organization.</p>
          <p>We offer customized orientation programs that introduce new hires to your company's culture, values, and operations. Our comprehensive training sessions are tailored to equip your employees with the necessary skills and knowledge for their roles. We also provide ongoing support to ensure a smooth transition and a strong start for your new team members.</p>
          <p>Our goal is to create a positive onboarding experience that sets the foundation for long-term success and satisfaction. Let us help you build a motivated and well-prepared workforce that contributes to the growth of your business.</p>
          <div class="cta">
            <a href="/contact-us" class="cta-btn">Get in Touch</a>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HROutsourcingPage',
};
</script>

<style scoped>
/* Add your styles here */
.hr-outsourcing-page {
  /* Your styles */
 /* padding-top: 100px; /* Adjust this value to move the content below the header */
}

/* Style for the banner */
.banner {
  background-color: #f0f0f0; /* Example background color */
  padding: 20px; /* Example padding */
  text-align: center;
}

/* Style for the h1 in the banner */
.banner h1 {
  margin: 0; /* Remove default margin */
  color: #333; /* Example text color */
}

/* Style for the content section */
.content {
  padding: 20px; /* Example padding */
  text-align: center;
}

/* Style for the media div */
.media {
  margin-bottom: 10px; /* Example margin to create space between image and text */
}

/* Style for the image inside the media div */
.media img {
  max-width: 100%; /* Ensure the image fits within its container */
}

/* Style for the call-to-action button */
.cta .cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #A0522D;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

/* Style for the call-to-action button hover state */
.cta .cta-btn:hover {
  background-color: #0056b3;
}

</style>
