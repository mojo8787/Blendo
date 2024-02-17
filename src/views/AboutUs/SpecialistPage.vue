<template>
    <div class="specialists-page">
      <section class="banner">
        <img src="@/assets/specialists-banner.jpg" alt="Specialists Banner">
        <div class="overlay">
          <h1>Our Specialists</h1>
        </div>
      </section>
      <section class="content">
        <div class="text-block">
          <p>In light of the urban and industrial boom, the list of huge construction projects, and the booming oil market in the
Middle East and Iraq, we are in dire need to provide the skilled labor necessary to achieve all your goals for the coming
years, and to meet all the needs of skilled and unskilled labor to work in various projects in Iraq. The important thing is
that the search scope be expanded to several countries until the right person is found for each position. We in Warani
Recruitment and Manpower Employment are specialized and enjoy a sense of professionalism in the field of manpower,
especially in the field of recruitment and selection, unlike what is found in others.
To find experts in all fields, experts are appointed who can recruit these expert workers from all over the world and bring
them. For this reason, Warani Recruitment and Employment is considered a pioneer in the field of recruitment and
supply due to its following specializations:
The countries that are usually considered a significant destination for the recruitment of labor in the Middle East are
China, Pakistan, India, Sri Lanka, Nepal and Egypt, in addition to many Arab and African
countries, In order to find the best labor in those countries to work in the competitive
fields of work in the Middle East, it is necessary to search and investigate for skilled and
unskilled labor, so our company investigates and searches for them so that we can
explore the best labor in those countries, before communicating with them and without
their knowledge, The investigation and exploration stage is a very important stage
because, through this process, we are able to know the level of experience that the
workers have before the start of personal interviews in their countries of origin.
In short, we are not like the rest of the traditional companies specialized in the field of
external recruitment in Iraq. Rather, we have entered the Iraqi labor market to make a
difference in the lives of human cadres as well as in the future development of the
company. We aspire to provide the best human resources services in the shortest
possible time, but in a more effective and efficient way. Our specialty, which we are
distinguished by, which you will see from us, God willing.
In addition, one of our specialties that makes Warani distinguished from other
competitors in this field is the years of accumulated experience that characterizes our
staff in the recruitment and selection process. In the field of external recruitment,
especially from African countries, which makes us unique in this field..</p>
        </div>
        <div class="image-gallery">
          <img src="@/assets/specialist1.webp" alt="Specialist 1">
          <img src="@/assets/specialist2.jpg" alt="Specialist 2">
          <img src="@/assets/specialist3.jpg" alt="Specialist 3">
        </div>
        <div class="text-block">
          <p>Likewise, one of our most important specialties is our experience and our knowledge of the realities of the situation on the
ground. We do not work for employment in our organization except for those who have previously worked in one of the countries
from which we recruit workers. This is what distinguishes them from other people who have never worked in one of these
countries. As those who have worked in those countries are more familiar with the realities of the situation on the ground and
thus will use their knowledge and experience to search for the best suited for them to work in the Middle East.
The interview and selection stage are among the most important factors of external recruitment. Our procedures for bringing
human cadres from their countries are long and detailed, and the reason for this is our keenness to ensure that the recruitment
process is free of any error or defect, as if we make a mistake by bringing in someone who does not fit the work environment in In
Iraq, it may become a hindrance to our client, which negatively affects the reputation of our company and the client's business.
We aspire to meet the needs of both individuals and companies alike, but our main focus revolves around our corporate clients, as
we are specially equipped to meet all the external recruitment needs of our corporate clients and from various industrial,
commercial and service sectors, maintenance, operation, hotels, construction companies and the various productive industries
sector, We have a staff trained at the highest level to ensure that the client's need of skilled and unskilled labor, which enjoys a
high degree of professional quality, is satisfied.
Also, one of our specialties is that we maintain an automated record that includes all the data of the labor that is brought into Iraq.
For example, if we bring in laborers from India, we will make sure that all their data are completed in the records. We make sure
that it includes their national identities, their home addresses, letters of recommendation from India and a copy of Their passports
and making sure they have clear security clearances to be absolutely sure of the person’s identity and safety, and we make sure
that documents are delivered and contracts are signed with the full approval and satisfaction of the workers.</p>
        </div>
      </section>
      <section class="call-to-action">
        <button @click="contactUs">Contact Us</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpecialistsPage',
    methods: {
      contactUs() {
        this.$router.push({ path: '/contact-us' });
      },
    },
  };
  </script>
  
  <style scoped>
  .specialists-page {
    /* General page styles, if necessary */
  }
  
  .banner {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  
  .banner img {
    width: 100%;
    transition: transform 0.5s ease;
  }
  
  .banner:hover img {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5); /* Adjust background overlay */
  }
  
  .overlay h1 {
    color: #fff;
    padding: 20px;
    font-size: 2.5rem;
    background-color: transparent;
  }
  
  .content {
    padding: 20px;
    font-size:  1.3em;
    text-align: justify;
  }
  
  .text-block {
    margin: 20px 0;
  }
  
  .image-gallery {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  
  .image-gallery img {
    width: 30%;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .image-gallery img:hover {
    transform: translateY(-10px);
  }
  
  .call-to-action {
    text-align: center;
    margin: 40px 0;
  }
  
  .call-to-action button {
    background-color: #A0522D;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .call-to-action button:hover {
    background-color: #8c4620;
  }
  </style>
  