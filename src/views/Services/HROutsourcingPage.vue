<template>
  <div class="hr-outsourcing-page">
    <div class="banner">
      <div class="media">
        <img src="@/assets/hr-outsourcing.jpg" alt="HR Outsourcing Image">
        <div class="media-overlay">
          <h1>HR Outsourcing Services</h1>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Expert HR Support</h2>
      <p>Our HR outsourcing services allow you to focus on your core business activities while we handle the complexities of human resources management, from recruitment to employee relations and compliance.</p>
      <div class="cta">
        <a href="mailto:careers@warani.iq" class="cta-btn">Email Us</a>
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
  padding-top: 100px; /* Adjust this value to move the content below the header */
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

/* Style for the media overlay */
.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Example background color with transparency */
  padding: 10px 0; /* Example padding */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9%;
  color: white; /* Example text color */
}

/* Style for the h1 inside the media overlay */
.media-overlay h1 {
  color: white; /* Example text color */
  margin: 0; /* Remove default margin */
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
