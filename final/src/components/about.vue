<template>
  <div class="about">
    <header class="about-header">
      <h1>About This Formula 1 Blog</h1>
      <p class="tagline">Passion, speed, and everything in between</p>
    </header>

    <section class="about-content">
      <p>
        Welcome to our Formula 1 blog — a hub for race analysis, driver profiles,
        and in-depth coverage of the world’s fastest sport.
      </p>
      <p>
        Here, <strong>Marisher Cabral</strong> and <strong>Princess Lacanlale</strong>
        share their thoughts, insights, and predictions about every thrilling lap
        of the season.
      </p>
      <p>
        From the roar of engines at Monza to the glamour of Monaco, we bring you
        closer to the action, the strategies, and the stories that make Formula 1
        the ultimate motorsport.
      </p>
    </section>

    <footer class="about-footer">
      <router-link to="/" class="back">← Back to Home</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  background: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* ---------- Header ---------- */
.about-header {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Orbitron", sans-serif;
}
.about-header h1 {
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

/* ---------- Content ---------- */
.about-content p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  color: #dddddd;
}

/* ---------- Footer ---------- */
.about-footer {
  margin-top: 2.5rem;
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
  .about-header h1 {
    font-size: 1.9rem;
  }
  .about-content p {
    font-size: 1rem;
  }
}
</style>
