<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Company Logo" class="logo">
      </div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="dropdown">
            <span>About Us <i class="arrow down"></i></span>
            <div class="dropdown-content">
              <router-link to="/about-us/welcome">Welcome to Warani Manpower</router-link>
              <router-link to="/about-us/goals">Our Goals</router-link>
              <router-link to="/about-us/visions">Visions</router-link>
              <router-link to="/about-us/specialist">Our Specialist</router-link>
              <router-link to="/about-us/green-promise">Our Green Promise</router-link>
              <router-link to="/about-us/meet-the-mind">Meet The Mind Behind Warani</router-link>
            </div>
          </li>
          <li class="dropdown" @click="toggleDropdown('services')" :class="{ open: dropdowns.services }">
            <span>Services <i class="arrow down"></i></span>
            <div class="dropdown-content" v-show="dropdowns.services">
              <router-link to="/services/recruitment">Recruitment and Employment</router-link>
              <router-link to="/services/onboarding">Staff Onboarding Services</router-link>
              <router-link to="/services/payroll">Payroll Management Services</router-link>
              <router-link to="/services/hr-outsourcing">HR Outsourcing Services</router-link>
              <router-link to="/services/work-permit">Work Permit</router-link>
              <router-link to="/services/visa">Iraq Visa</router-link>
              <router-link to="/services/housekeepers">Housekeepers</router-link>
            </div>
          </li>
          <li><router-link to="/careers">Careers</router-link></li>
          <li><router-link to="/contact-us">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      dropdowns: {
        aboutUs: false,
        services: false,
      },
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.closeAllDropdowns();
      }
    },
    closeAllDropdowns() {
      for (let dropdown in this.dropdowns) {
        this.dropdowns[dropdown] = false;
      }
    },
    handleDropdownKeyPress(event, dropdown) {
      if (event.key === 'Enter' || event.key === ' ') {
        this.toggleDropdown(dropdown);
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
/* Styles for the header */
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container .logo {
  height: 40px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar ul li {
  margin-left: 20px;
}

.navbar ul li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar ul li a:hover {
  color: #A0522D;
}

/* Styles for the dropdown menu */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(249, 249, 249, 0.95); /* Added transparency */
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  flex-direction: column;
  padding: 15px 0; /* Increased padding */
  border-top: 1px solid #ccc; /* Added border to separate items */
}

.dropdown-content router-link {
  color: black;
  padding: 10px 16px; /* Adjusted padding */
  text-decoration: none;
  display: block;
  margin-bottom: 10px !important; /* Increased margin */
}

.dropdown-content router-link:last-child {
  margin-bottom: 0; /* Remove bottom margin for the last item */
}

.dropdown.open .dropdown-content {
  display: flex;
}

/* Style for the arrow */
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
  margin-left: 5px;
}

/* Hover styles for dropdown */
.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown-content router-link:hover {
  background-color: #f9f9f9; /* Added background color on hover */
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
  }

  .navbar ul li {
    margin: 10px 0;
  }
}
</style>
