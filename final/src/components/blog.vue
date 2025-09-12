<template>
  <div class="blog">
    <div class="blog-inner">
    <header class="blog-header">
      <h1>{{ post.title }}</h1>

      <p class="meta">
        <span v-for="(author, i) in post.authors" :key="i">
          {{ author }}<span v-if="i !== post.authors.length - 1"> • </span>
        </span>
        • {{ post.date }}
      </p>
    </header>

    <article class="blog-content">
      <p v-for="(para, i) in post.content" :key="i">
        {{ para }}
      </p>
    </article>

    <footer class="blog-footer">
      <router-link to="/" class="back">← Back to Home</router-link>
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      post: {
        title: "Italian GP Review: A Thrilling Monza Finish",
        authors: ["Marisher Cabral", "Princess Lacanlale"],
        date: "Sep 10, 2025",
        content: [
          "The 2025 Italian Grand Prix delivered one of the most exciting finishes in recent years...",
          "Drivers battled through tight chicanes and high-speed straights, with strategy playing a major role.",
          "Fans were treated to spectacular overtakes and late braking heroics."
        ]
      }
    };
  }
};
</script>

<style scoped>
.blog {
  background: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem 1rem;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Orbitron", sans-serif;
}

.blog-header h1 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: "Orbitron", sans-serif;
}

.meta {
  font-size: 0.95rem;
  color: #bbbbbb;
}

.blog-content p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  color: #dddddd;
}

.blog-footer {
  margin-top: 2.5rem;
  text-align: center;
}

.back {
  color: #e10600;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.back:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 1.9rem;
  }
  .blog-content p {
    font-size: 1rem;
  }
}
</style>
