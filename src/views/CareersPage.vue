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
import { generateClient } from '@aws-amplify/api';
import { uploadData } from '@aws-amplify/storage';

export default {
  name: 'CareersPage',
  data() {
    return {
      client: generateClient(),
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
    async submitCV() {
      try {
        console.log('Submitting CV...');
        
        const personalImageKey = `cv-uploads/${Date.now()}-${this.candidate.personalImage.name}`;
        const cvKey = `cv-uploads/${Date.now()}-${this.candidate.cv.name}`;
        
        await uploadData({
          data: this.candidate.personalImage,
          path: personalImageKey,
          options: {
            contentType: this.candidate.personalImage.type
          }
        }).result;

        await uploadData({
          data: this.candidate.cv,
          path: cvKey,
          options: {
            contentType: this.candidate.cv.type
          }
        }).result;

        await this.client.models.JobApplication.create({
          name: this.candidate.name,
          email: this.candidate.email,
          mobile: this.candidate.mobile,
          jobDesire: this.candidate.jobDesire,
          personalImage: personalImageKey,
          cv: cvKey
        });

        console.log('Application submitted successfully');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting application:', error);
      }
    },
    resetForm() {
      this.candidate = {
        name: '',
        mobile: '',
        email: '',
        personalImage: null,
        cv: null,
        jobDesire: ''
      };
      this.showCVForm = false;
    },
    applyNow(jobTitle) {
      this.showCVForm = true;
      this.candidate.jobDesire = jobTitle;
      this.$nextTick(() => {
        const formElement = document.querySelector('.submit-cv');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    toggleCVForm() {
      this.showCVForm = !this.showCVForm;
    },
  },
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
