<template>
  <div id="app">
    <header>
      <link
  href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/darkly/bootstrap.min.css"
  rel="stylesheet"
/>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div class="container-fluid">
          <router-link class="navbar-brand fw-bold text-uppercase" to="/">
            Formula1 Hub
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/gallery">Gallery</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>

            <form class="d-flex">
              <input
                class="form-control me-2 search-input"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.navbar .navbar-brand {
  letter-spacing: 1px;
  font-size: 1.1rem;
}

.navbar .nav-link {
  color: #d0d0d0;
  transition: color 0.25s ease;
}

.navbar .nav-link:hover,
.navbar .router-link-active {
  color: red;
}

.search-input {
  background-color: #1e1e1e;
  border: 1px solid #444;
  color: #e0e0e0;
}

.search-input::placeholder {
  color: #888;
}

.app-main {
  flex: 1;
  padding: 5rem 2rem 2rem;
}

@media (max-width: 991px) {
  .app-main {
    padding-top: 6rem;
  }
}
</style>
