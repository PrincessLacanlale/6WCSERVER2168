<template>
  <section class="home">
    <div class="overlay">
      <h1>Welcome to Formula 1 Hub</h1>
      <p>Your one-stop destination for Formula 1 news, galleries, and more.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

.home {
  position: relative;
  height: 100vh;
  background: url('~@/assets/home.png') center/cover no-repeat fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.home::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

.overlay {
  position: relative;
  z-index: 1;
  padding: 2rem;
  font-family: 'Orbitron', sans-serif;
}

.overlay h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.65);
  margin-bottom: 1rem;
}

.overlay p {
  font-size: 1.25rem;
  font-weight: 500;
  color: #f5f5f5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 0 auto;
}
</style>
