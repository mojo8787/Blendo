<template>
  <div class="green-promise-page">
    <section class="banner">
      <h1>Our Green Promise</h1>
    </section>
    <section class="content">
      <p>Warani Company is deeply committed to sustainability, understanding the importance of environmental stewardship in the recruitment industry. Our initiatives aim to reduce the carbon footprint of our operations and promote green practices among our clients and partners. By focusing on sustainable workforce solutions, we contribute to the global effort to preserve our planet for future generations.</p>
      <!-- Additional sections can be added here -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'GreenPromisePage',
};
</script>

<style scoped>
.green-promise-page {
  max-width: full;
  margin: 0 auto;
  padding: 20px;
 /* padding-top: 100px; */
}

.banner {
  background-color: #e8f5e9; /* Light green background */
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  font-size:  1.5em;
}

.banner h1 {
  color: #2e7d32; /* Dark green color */
}

.content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.3em;
}
</style>
