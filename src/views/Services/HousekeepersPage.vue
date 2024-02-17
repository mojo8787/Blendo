<template>
  <div class="housekeepers-page">
    <div class="banner">
      <div class="media">
        <img src="@/assets/housekeepers.jpeg" alt="Housekeepers Image">
        <div class="media-overlay">
          <h1>Housekeeping Services</h1>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Professional Cleaning Solutions</h2>
      <p>Our housekeeping services provide top-notch cleaning and maintenance for residential and commercial properties, ensuring a clean and comfortable environment for occupants.</p>
      <div class="cta">
        <a href="/contact-us" class="cta-btn">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HousekeepersPage',
};
</script>

<style scoped>
/* Add your styles here */
.housekeepers-page {
  padding-top: 90px; /* Adjust this value to move the content below the header */
}

/* Style for the media div */
.media {
  position: relative;
  text-align: center;
  width: 100%;
}

/* Style for the image inside the media div */
.media img {
  width: 100%;
}

/* Style for the media overlay */
.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(117, 114, 114, 0.5); /* Example background color with transparency */
  padding: 10px 20px; /* Example padding */
}

/* Style for the h1 inside the media overlay */
.media-overlay h1 {
  color: white; /* Example text color */
  margin: 0; /* Remove default margin */
  font-size: 3.5em; /* Example font size */
}

/* Style for the content below the image */
.content {
  margin-top: 20px; /* Example margin to create space between image and text */
  text-align: center; /* Align text to center */
}

/* Style for the call-to-action button */
.cta .cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #A0522D; /* Example button color */
  color: white; /* Example text color */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 20px; /* Example margin to create space between button and footer */
}

/* Style for the call-to-action button hover state */
.cta .cta-btn:hover {
  background-color: #0056b3; /* Example button color on hover */
}
</style>
