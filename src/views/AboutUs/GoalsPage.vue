<template>
    <div class="goals-page">
      <div class="container">
        <img src="@/assets/goals-top.png" alt="Goals Top Image" class="image-top">
        <h1>Our Goals</h1>
        <p>We seek to be the leading and first company in Iraq in the field of providing quality labor services and providing mediation services in the recruitment of workers, so that we are the best in terms of professionalism and professionalism in accordance with the rules and regulations.</p>
        <img src="@/assets/goals-middle.webp" alt="Goals Middle Image" class="image-middle">
        <p>Providing qualified and distinguished workers with high qualifications. We work to provide a variety of job positions in various fields, which motivates our clients to use us, as one of our most important features is our ability to connect qualified people to our clients based on the required skills, and this is done in a fast and efficient manner.</p>
        <p>Organizing labor services for individuals and companies such as hotels and industrial sectors, and we pledge to always strive to achieve the highest customer satisfaction rate.</p>
        <p>That our services have an important value in the Iraqi society because we seek to eliminate the phenomenon of illegal employment that lacks the necessary skills, and with this goal, we aspire to make the Iraqi labor market equal the neighboring countries.</p>
        <p>We aim to achieve the highest levels of customer satisfaction by using all necessary means to help our customers. The excellence we aspire to is only our success story, and that is why we are keen to provide it.</p>
        <img src="@/assets/goals-bottom.png" alt="Goals Bottom Image" class="image-bottom">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GoalsPage',
  };
  </script>
  
  <style scoped>
  .goals-page {
    padding: 20px;
    background-color: #f9f9f9;
    /* padding-top: 100px; /* Adjust this value to move the content below the header */
  }
  
  .goals-page .container {
    max-width: full;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .goals-page h1 {
    color: #A0522D;
    text-align: center;
    font-size: 2.5em;
  }
  
  .goals-page p {
    text-align: justify;
    margin-bottom: 30px;
    font-size: 1.3em;
  }
  
  .image-top, .image-middle, .image-bottom {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  </style>
  