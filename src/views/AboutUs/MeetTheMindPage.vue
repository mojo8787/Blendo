<template>
  <div class="meet-the-mind-page">
    <section class="banner">
      <h1>Meet The Mind Behind Warani</h1>
    </section>
    <section class="ceo-profile">
      <img src="@/assets/ceo.jpg" alt="CEO of Warani">
      <div class="ceo-info">
        <h2>Blend M. Warani</h2> 
        <p>Chief Excutive Officer</p>
      </div>
    </section>
    <section class="content">
      <p>Behind every successful placement is our team of experts, whose dedication and expertise are the backbone of Warani. Our Chief Recruitment Officer, embodies our mission with over a decade of experience in global talent acquisition.</p>
      <!-- Additional content can be added here -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'MeetTheMindPage',
};
</script>

<style scoped>
.meet-the-mind-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
 /* padding-top: 100px; */
}

.banner {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.7em;
}

.banner h1 {
  color: #424242;
}

.ceo-profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.ceo-profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.ceo-info h2 {
  margin: 0;
  color: #424242;
}

.ceo-info p {
  margin: 0;
  color: #757575;
}

.content {
  text-align: justify;
  font-size: 1.2em;
}
</style>
