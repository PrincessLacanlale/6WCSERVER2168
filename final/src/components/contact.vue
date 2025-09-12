<template>
  <div class="contact">
    <header class="contact-header">
      <h1>Contact Us</h1>
      <p class="tagline">
        Have a question, suggestion, or just want to talk Formula 1?
        Drop us a message below!
      </p>
    </header>

    <form class="contact-form" @submit.prevent="sendMessage">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Write your message"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn-send">Send Message</button>
    </form>

    <footer class="contact-footer">
      <router-link to="/" class="back">← Back to Home</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  background: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* ---------- Header ---------- */
.contact-header {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Orbitron", sans-serif;
}
.contact-header h1 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: "Orbitron", sans-serif;
}
.tagline {
  font-size: 1.1rem;
  color: #bbbbbb;
}

/* ---------- Form ---------- */
.contact-form {
  background: #1e1e1e;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
}
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}
label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #dddddd;
}
input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #e0e0e0;
  font-size: 1rem;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #ff3b30;
}

/* ---------- Button ---------- */
.btn-send {
  display: block;
  width: 100%;
  background: #ff3b30;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-send:hover {
  background: #ff564d;
}

/* ---------- Footer ---------- */
.contact-footer {
  margin-top: 2rem;
  text-align: center;
}
.back {
  color: #ff3b30;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
.back:hover {
  color: #ffffff;
}

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 1.9rem;
  }
}
</style>
