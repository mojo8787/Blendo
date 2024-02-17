<template>
  <div class="careers-page">
    <h1>Careers</h1>
    <div class="job-listings">
      <h2>Current Openings</h2>
      <div class="job" v-for="(job, index) in jobList" :key="index">
        <div class="job-info">
          <h3>{{ job.title }}</h3>
          <p>Location: {{ job.location }}</p>
          <p>Experience: {{ job.experience }}</p>
          <button @click="applyNow(job.title)">Apply Now</button>
        </div>
        <div class="job-image">
          <img :src="job.image" :alt="job.title">
        </div>
      </div>
    </div>
    <div class="submit-cv">
      <button @click="toggleCVForm">Submit Your CV</button>
      <form v-if="showCVForm" @submit.prevent="submitCV">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="candidate.name" required>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile:</label>
          <input type="tel" id="mobile" v-model="candidate.mobile" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="candidate.email" required>
        </div>
        <div class="form-group">
          <label for="personal-image">Personal Image:</label>
          <input type="file" id="personal-image" @change="handleImageUpload" accept="image/*" required>
        </div>
        <div class="form-group">
          <label for="cv">Upload CV:</label>
          <input type="file" id="cv" @change="handleFileUpload" accept=".pdf,.doc,.docx" required>
        </div>
        <div class="form-group">
          <label for="job-desire">Job Desire:</label>
          <select id="job-desire" v-model="candidate.jobDesire" required>
            <option v-for="job in jobList" :value="job.title" :key="job.title">{{ job.title }}</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareersPage',
  data() {
    return {
      jobList: [
        {
          title: 'Senior Petroleum Engineer',
          location: 'Baghdad, Iraq',
          experience: '5+ years in the oil and gas industry',
          image: require('@/assets/petroleum_engineer.jpg')
        },
        {
          title: 'HR Specialist',
          location: 'Basra, Iraq',
          experience: '3+ years in human resources',
          image: require('@/assets/hr_specialist.jpg')
        }
        // Add more job listings here
      ],
      candidate: {
        name: '',
        mobile: '',
        email: '',
        personalImage: null,
        cv: null,
        jobDesire: ''
      },
      showCVForm: false
    };
  },
  methods: {
    handleFileUpload(event) {
      this.candidate.cv = event.target.files[0];
    },
    handleImageUpload(event) {
      this.candidate.personalImage = event.target.files[0];
    },
    submitCV() {
      // Handle CV submission logic here
      console.log('Submitted:', this.candidate);
    },
    applyNow(jobTitle) {
  this.showCVForm = true;
  this.candidate.jobDesire = jobTitle;
  // Scroll to the form
  this.$nextTick(() => {
    const formElement = document.querySelector('.submit-cv');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
},
    toggleCVForm() {
      this.showCVForm = !this.showCVForm;
    }
  }
};
</script>



<style scoped>
.careers-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.job-listings .job {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.job-info {
  flex: 1;
}

.job-image {
  flex: 0 0 120px;
  margin-left: 20px;
}

.job-image img {
  width: 100%;
  border-radius: 4px;
}

.submit-cv {
  margin-top: 40px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="file"],
button[type="submit"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #A0522D;
}
</style>
