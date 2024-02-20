<template>
    <div class="visions-page">
      <div class="section-image">
        <img src="@/assets/vision-bg.jpeg" alt="Vision Background">
        <div class="section-content">
          <h1>Visions</h1>
          <p>Our vision is to be the leading national company in the field of mediation and the field of recruiting skilled and qualified workers, so that we will be the company that guarantees the provision of high-quality services to its customers, and we will also be the company that works to provide effective and highly qualified labor at competitive prices in the market, in addition to investigating accuracy and diligence when Her choice of employment, all in light of our observance of the laws and regulations in Iraq.</p>
        </div>
      </div>
      <div class="section-image">
        <img src="@/assets/work-envi.webp" alt="Future Vision">
        <div class="section-content">
          <h1>Vision for the Future</h1>
          <p>Warani Company is deeply committed to sustainability, understanding the importance of environmental stewardship in the recruitment industry. Our initiatives aim to reduce the carbon footprint of our operations and promote green practices among our clients and partners. By focusing on sustainable workforce solutions, we contribute to the global effort to preserve our planet for future generations.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisionsPage',
  };
  </script>
  
  <style scoped>
  .visions-page {
    max-width: fill;
    margin: 0 auto;
    padding: 20px;
 /* padding-top: 100px; */
}
  
  .section-image {
    position: relative;
    margin-bottom: 20px;
  }
  
  .section-image img {
    width: 100%;
    height: auto;
    opacity: 0.8;
  }
  
  .section-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(5px);
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .section-content h1 {
    color: #A0522D;
    margin-bottom: 10px;
  }
  
  .section-content p {
    line-height: 1.6;
  }
  
  section div {
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 20px;
  }
  
  section h1 {
    color: #A0522D;
    text-align: center;
    margin-bottom: 10px;
  }
  
  section p {
    text-align: justify;
    line-height: 1.6;
  }
  </style>
  