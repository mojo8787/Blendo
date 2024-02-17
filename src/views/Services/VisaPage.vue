<template>
  <div class="visa-page">
    <div class="banner">
      <h1>Iraq Work Visa Services</h1>
    </div>
    <div class="content">
      <div class="media">
        <!-- Remove the img tag -->
      </div>
      <p>We provide comprehensive support for the issuance of entry visas to Iraq and the subsequent issuance of residency permits, ensuring compliance with local immigration laws.</p>
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
/* Add your styles here */
.visa-page {
  /* Your styles */
  padding-top: 100px; /* Adjust this value to move the content below the header */
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
  background-image: url("@/assets/visa.jpg");
  background-size: cover;
  background-position: center;
  height: 300px; /* Set a height for the div */
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
  margin-bottom: 20px; /* Example margin to create space between text and button */
}

/* Style for the call-to-action button hover state */
.cta .cta-btn:hover {
  background-color: #0056b3;
}

</style>
