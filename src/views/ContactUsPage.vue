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
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        mobile: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      console.log('Contact form submitted:', this.contact);
      const formData = new FormData();
      formData.append('name', this.contact.name);
      formData.append('email', this.contact.email);
      formData.append('mobile', this.contact.mobile);
      formData.append('message', this.contact.message);

      for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

      try {
        const response = await fetch('http://localhost:3000/submit-contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(this.contact)
});

        if (response.ok) {
          console.log('Contact form submitted successfully');
          // Clear the form
          this.contact = {
            name: '',
            email: '',
            mobile: '',
            message: ''
          };
          // Show a success message to the user
        } else {
          console.error('Failed to submit contact form');
          // Show an error message to the user
        }
      } catch (error) {
        console.error('Error submitting contact form:', error);
        // Show an error message to the user
      }
    }
  }
};
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
</style>
