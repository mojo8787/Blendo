<template>
  <div class="work-permit-page">
    <div class="banner">
      <!-- Move the h1 inside the media div -->
      <div class="media">
        <img src="@/assets/work-permit.webp" alt="Work Permit Image">
        <h1>Work Permit Services</h1>
      </div>
    </div>
    <div class="content">
      <h2>Facilitating Work Authorization</h2>
      <p>Navigating the complexities of work permit issuance can be challenging, especially in a foreign country. We provide comprehensive assistance in obtaining work permits for your international staff, ensuring that all legal and administrative requirements are met. Our services include document preparation, application submission, and liaison with relevant authorities, making the process hassle-free for both employers and employees.
        We assist with the entire process of obtaining work permits for your international staff. Our expertise in navigating the legal and administrative requirements ensures a hassle-free experience for both employers and employees.
      </p>
      <div class="cta">
        <a href="/contact-us" class="cta-btn">Get In Touch</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkPermitPage',
};
</script>
<style scoped>
/* Add your styles here */
.work-permit-page {
  /* Your styles */
 /* padding-top: 100px; /* Adjust this value to move the content below the header */
}

/* Style for the banner */
.banner {
  /* Your styles */
  background-color: #f0f0f0; /* Example background color */
  padding: 0px; /* Example padding */
  text-align: center;
}

/* Style for the media div */
.media {
  /* Your styles */
  position: relative;
  text-align: center;
  width: 100%; /* Set the width of the media div to 100% */
}

/* Style for the image inside the media div */
.media img {
  /* Your styles */
  width: 100%; /* Set the width of the image to 100% */
}

/* Style for the h1 inside the media div */
.media h1 {
  /* Your styles */
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
  margin-bottom: 20px; /* Example margin to create space between text and button */
}

/* Style for the call-to-action button hover state */
.cta .cta-btn:hover {
  /* Your styles */
  background-color: #0056b3; /* Example button color on hover */
}
</style>

