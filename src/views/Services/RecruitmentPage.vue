<template>
  <div class="recruitment-page">
    <div class="banner">
      <!-- Move the h1 inside the media div -->
      <div class="media">
        <img src="@/assets/recruitment.jpg" alt="Recruitment Image">
        <h1>Recruitment and Employment</h1>
      </div>
    </div>
        <div class="content">
      <h2>Finding the Right Talent</h2>
      <p>At Warani Manpower, we understand the importance of finding the right talent for your business. Our specialized recruitment services are tailored to meet the unique needs of various industries, ensuring that we connect you with candidates who not only have the required skills but also align with your company's values and culture.</p>
      <p>Our comprehensive recruitment process is designed to streamline your hiring efforts. We start with a detailed analysis of your requirements, followed by targeted job postings and proactive candidate sourcing. Our experienced recruiters conduct thorough screenings and interviews to assess the suitability of each candidate. We also provide support throughout the final selection and onboarding process, ensuring a smooth transition for both the employer and the new employee.</p>
      <p>By partnering with us, you gain access to a wide pool of talent, expert guidance, and efficient recruitment solutions that save you time and resources. Let Warani Manpower help you build a strong, dynamic team that drives your business forward.</p>
      <div class="cta">
        <a href="/contact-us" class="cta-btn">Get Started</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentPage',
};
</script>

<style scoped>
/* Add your styles here */
.recruitment-page {
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Example text color */
  background-color: rgba(0, 0, 0, 0.5); /* Example background color with transparency */
  padding: 10px 20px; /* Example padding */
  font-size: 4em; /* Example font size */
}

/* Style for the content below the image */
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
