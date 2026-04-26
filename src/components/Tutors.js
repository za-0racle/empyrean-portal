export function setupTutors() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  const tutorsHTML = `
    <section id="tutors" class="tutors-section">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Expert Faculty</span>
          <h2 class="vibrant-title">Meet Our Lead Educators</h2>
          <p>Vetted professionals dedicated to nurturing the next generation of global leaders.</p>
        </div>

        <div class="tutor-slider" id="tutor-slider">
          <!-- Tutor 1: Oluranti -->
          <div class="tutor-card">
            <div class="tutor-image">
              <img src="/Tutor3.jpg" alt="Oluranti Akintunde">
            </div>
            <div class="tutor-info">
              <span class="tutor-badge">CEO & Founder</span>
              <h3>Oluranti Akintunde</h3>
              <p class="specialty">GCSE English Specialist</p>
              <p class="bio">12+ years pioneering learning strategies that consistently deliver Grade 9 results.</p>
              <div class="tutor-social">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>

          <!-- Tutor 2: Khaleed -->
          <div class="tutor-card">
            <div class="tutor-image">
              <img src="/khaleed.jpg" alt="Khaleed Adedokun">
            </div>
            <div class="tutor-info">
              <span class="tutor-badge">Coding Instructor</span>
              <h3>Khaleed O. Adedokun</h3>
              <p class="specialty">STEAM & Robotics Educator</p>
              <p class="bio">Teaches complex logic, Python, Javascript, Block Coding and Generative AI mastery.</p>
              <div class="tutor-social">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <!-- Tutor 4: Kalu Gift -->
          <div class="tutor-card">
            <div class="tutor-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500" alt="Kalu Gift">
            </div>
            <div class="tutor-info">
              <span class="tutor-badge">Educator</span>
              <h3>Kalu Gift</h3>
              <p class="specialty">Science & Research</p>
              <p class="bio">Expert in Physics and Chemistry, fostering a deep love for scientific inquiry.</p>
              <div class="tutor-social">
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  appSlot.innerHTML += tutorsHTML;

  // --- MOBILE CAROUSEL OBSERVER LOGIC ---
  const slider = document.getElementById('tutor-slider');
  const cards = document.querySelectorAll('.tutor-card');

  if (window.innerWidth < 992) {
    const observerOptions = {
      root: slider,
      threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('focused-card');
        } else {
          entry.target.classList.remove('focused-card');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
  }
}