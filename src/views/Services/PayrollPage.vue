<template>
  <div class="payroll-page">
    <div class="banner">
      <!-- Move the h1 inside the media div -->
      <div class="media">
        <img src="@/assets/payroll.webp" alt="Payroll Image">
        <h1>Payroll Management Services</h1>
      </div>
    </div>
    <div class="content">
      <h2>Efficient Payroll Solutions</h2>
      <p>Managing payroll efficiently is essential for the smooth operation of any business. At Warani Manpower, we offer comprehensive payroll management services that simplify this complex process. Our expert team ensures accuracy and compliance with all legal and regulatory requirements, allowing you to focus on your core business activities.</p>
      <p>Our services include detailed salary calculations, tax deductions, benefits administration, and timely disbursements. We also provide customized reports and support to address any payroll-related queries or concerns. With our efficient payroll solutions, you can rest assured that your employees are compensated accurately and on time.</p>
      <div class="cta">
        <a href="/contact-us" class="cta-btn">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayrollPage',
};
</script>

<style scoped>
/* Add your styles here */
.payroll-page {
  /* Your styles */
 /* padding-top: 100px; /* Adjust this value to move the content below the header */
}

/* Style for the media div */
.media {
  position: relative;
  text-align: center;
  width: 100%; /* Set the width of the media div to 100% */
}

/* Style for the image inside the media div */
.media img {
  width: 100%; /* Set the width of the image to 100% */
}

/* Style for the h1 inside the media div */
.media h1 {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Example text color */
  background-color: rgba(0, 0, 0, 0.5); /* Example background color with transparency */
  padding: 10px 20px; /* Example padding */
  font-size: 4em; /* Example font size */
}

/* Style for the content below the image */
.content {
  /* Your styles */
  margin-top: 20px; /* Example margin to create space between image and text */
  text-align: center; /* Align text to center */
}

/* Style for the call-to-action button */
.cta .cta-btn {
  /* Your styles */
  display: inline-block;
  padding: 10px 20px;
  background-color: #A0522D; /* Example button color */
  color: white; /* Example text color */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 20px; /* Example margin to create space between button and footer */
  margin-bottom: 20px; /* Example margin to create space between text and button */
}

/* Style for the call-to-action button hover state */
.cta .cta-btn:hover {
  background-color: #0056b3; /* Example button color on hover */
}
</style>
