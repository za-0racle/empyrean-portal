export function setupPrograms() {
  const appSlot = document.getElementById('app');
  
  // We append this to the appSlot so it appears BELOW the hero
  const programsHTML = `
    <section id="programs" class="programs-section">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Our Learning Paths</span>
          <h2 class="vibrant-title">Specialized Programs</h2>
          <p>Curated curriculums designed to challenge and inspire students aged 8–18.</p>
        </div>

        <div class="program-grid">
          <!-- K-12 Card -->
          <div class="program-card">
            <div class="card-icon"><i class="fas fa-apple-alt"></i></div>
            <div class="card-content">
              <h3>K-12 Core Essentials</h3>
              <p>English, Maths, and Science tutoring for primary and secondary learners.</p>
              <div class="card-meta">
                <span><i class="fas fa-signal"></i> All Levels</span>
                <span><i class="fas fa-users"></i> 500+ Students</span>
              </div>
              <a href="#" class="btn-text">View Curriculum <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- Coding Card -->
          <div class="program-card featured">
            <div class="card-icon"><i class="fas fa-code"></i></div>
            <div class="card-content">
              <h3>Coding for Kids</h3>
              <p>Master Python, Web Dev, AI, and Logic. Building the tech leaders of tomorrow.</p>
              <div class="card-meta">
                <span><i class="fas fa-laptop-code"></i> Ages 8-16</span>
                <span><i class="fas fa-star"></i> Bestseller</span>
              </div>
              <a href="#" class="btn-text">View Curriculum <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- GCSE Card -->
          <div class="program-card">
            <div class="card-icon"><i class="fas fa-graduation-cap"></i></div>
            <div class="card-content">
              <h3>GCSE/IGCSE Prep</h3>
              <p>Focused intensive coaching to ensure Grade 9 results in core subjects.</p>
              <div class="card-meta">
                <span><i class="fas fa-book-open"></i> Exam Prep</span>
                <span><i class="fas fa-clock"></i> 12 Weeks</span>
              </div>
              <a href="#" class="btn-text">View Curriculum <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  appSlot.innerHTML += programsHTML; // Use += to add it after the Hero
}