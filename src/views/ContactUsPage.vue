<template>
  <div class="contact-us-page">
    <h1></h1>
    <h2 class="contact-info-header">Contact Information</h2> <!-- Moved and styled header -->
    <div class="contact-info">
      <div class="office">
        <h3>Main Office</h3>
        <p>Address: Section 608, St. 7, Bld. 2/1, Al-Mamoon District, Baghdad, Iraq</p>
        <p>Email: info@warani.iq</p>
        <p>Phone: +964 770 4444 866</p>
      </div>
      <div class="branch">
        <h3>Basrah Branch</h3>
        <p>Address: AlBaradhia, Basrah, Iraq</p>
        <p>Email: basrah@warani.iq</p>
        <p>Phone: +964 780 4444 866</p>
      </div>
    </div>
    <div class="contact-form">
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="contact.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="contact.email" required>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile:</label>
          <input type="tel" id="mobile" v-model="contact.mobile" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="contact.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { generateClient } from '@aws-amplify/api';
import type { Schema } from '../../amplify/data/resource';

export default defineComponent({
  name: 'ContactUsPage',
  data() {
    return {
      client: generateClient<Schema>({
        authMode: 'iam'  // Match your schema's defaultAuthorizationMode
      }),
      contact: {
        name: '',
        email: '',
        mobile: '',
        message: ''
      },
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async submitForm() {
      console.log('Contact form submitted:', this.contact);
      this.errorMessage = '';
      this.successMessage = '';

      try {
        const result = await this.client.models.ContactInquiry.create({
          name: this.contact.name,
          email: this.contact.email,
          mobile: this.contact.mobile,
          message: this.contact.message
        });

        console.log('Contact form submitted successfully', result);
        this.successMessage = 'Your message has been sent successfully!';
        this.contact = {
          name: '',
          email: '',
          mobile: '',
          message: ''
        };
      } catch (error) {
        console.error('Error submitting contact form:', error);
        this.errorMessage = error instanceof Error ? error.message : 'An error occurred while submitting the form';
      }
    }
  }
});
</script>


<style scoped>
.contact-us-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1, h2, h3 {
  color: #333;
}

.contact-info-header {
  font-size: 1.5em; /* Adjust the size as needed */
  margin-bottom: 20px;
}

.contact-form {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.contact-info {
  display: flex;
  justify-content: space-between;
}

.contact-info .office,
.contact-info .branch {
  flex: 1;
}

@media (max-width: 600px) {
  .contact-info {
    flex-direction: column;
  }

  .contact-info .office,
  .contact-info .branch {
    margin-bottom: 20px;
  }
}

.error-message {
  color: red;
  margin-bottom: 20px;
}

.success-message {
  color: green;
  margin-bottom: 20px;
}
</style>
