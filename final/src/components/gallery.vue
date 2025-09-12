<template>
  <div class="gallery">
    <header class="gallery-header">
      <h1>Formula 1 Gallery</h1>
      <p class="tagline">Capturing speed, style, and iconic moments</p>
    </header>

    <section class="gallery-grid">
      <div v-for="(img, i) in images" :key="i" class="gallery-item">
        <img :src="img.src" :alt="img.alt" />
        <p class="caption">{{ img.caption }}</p>
      </div>
    </section>

    <footer class="gallery-footer">
      <router-link to="/" class="back">← Back to Home</router-link>
    </footer>
  </div>
</template>


<script>
export default {
  name: "Gallery",
  data() {
    return {
      images: [
        {
          src: require("@/assets/car.png"),
          alt: "Formula 1 Car",
          caption: "Monza Speed Machine",
        },
        {
          src: require("@/assets/racing.png"),
          alt: "Race Action",
          caption: "Wheel-to-Wheel Battle",
        },
        {
          src: require("@/assets/pitstop.png"),
          alt: "Pit Stop",
          caption: "Lightning Fast Pit Crew",
        },
        {
          src: require("@/assets/st.png"),
          alt: "Race Track",
          caption: "Legendary Monaco Streets",
        },
        {
          src: require("@/assets/Helmet.png"),
          alt: "Driver Helmet",
          caption: "Iconic Helmet Designs",
        },
        {
          src: require("@/assets/podium.png"),
          alt: "Celebrating Victory",
          caption: "Formula 1 Podium",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery {
  background: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
}



/* ---------- Header ---------- */
.gallery-header {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Orbitron", sans-serif;
}
.gallery-header h1 {
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

/* ---------- Grid ---------- */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.gallery-item {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
}
.gallery-item img {
  width: 100%;
  display: block;
  object-fit: cover;
  border-bottom: 2px solid #ff3b30;
}
.caption {
  padding: 0.8rem;
  font-size: 0.95rem;
  color: #cccccc;
}

/* ---------- Footer ---------- */
.gallery-footer {
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
  .gallery-header h1 {
    font-size: 1.9rem;
  }
  .caption {
    font-size: 0.85rem;
  }
}
</style>
