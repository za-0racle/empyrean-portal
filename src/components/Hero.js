export function setupHero() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge-wrapper">
            <span class="motto-badge">SIC PARVIS MAGNA</span>
          </div>
          <h1 class="hero-title">
            Empowering Young Minds for <br>
            <span class="highlight">Global Excellence</span>
          </h1>
          <p class="hero-description">
            Premium UK-Standard tutoring for K-12, GCSE, IGCSE, and Coding. 
            Customized learning paths for students aged 8–18, worldwide.
          </p>
          <div class="hero-btns">
            <a href="/catalog.html" class="btn-hero-primary">Enroll Now</a>
            <a href="#programs" class="btn-hero-secondary">Explore Programs</a>
          </div>
        </div>
      </div>
    </section>
  `;
}