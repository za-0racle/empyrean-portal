export function setupReviews() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  const reviews = [
    {
      name: "Mrs. Elizabeth W.",
      location: "London, UK",
      flag: "🇬🇧",
      role: "Parent",
      text: "Finding a tutor who understands the UK curriculum but makes it fun was hard until we found Empyrean. My son's confidence in Math has tripled.",
      subject: "GCSE Maths",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      project: null
    },
    {
      name: "Toluwalase A.",
      location: "Lagos, NG",
      flag: "🇳🇬",
      role: "Student",
      text: "Masters in Python felt like a dream, but Khaleed broke down the logic so simply. I just finished my first Generative AI chatbot!",
      subject: "Coding & AI",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      project: "View Chatbot Project"
    },
    {
      name: "Sarah J.",
      location: "Manchester, UK",
      flag: "🇬🇧",
      role: "Student",
      text: "I was struggling with my English Literature essays. Abiola helped me find my voice. I went from a Grade 5 to a Grade 9 in just two terms!",
      subject: "IGCSE English",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      project: "View Essay Portfolio"
    }
  ];

  const reviewsHTML = `
    <section id="reviews" class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Board Of Excellence</span>
          <h2 class="vibrant-title">Global Success Stories</h2>
          <p>Join hundreds of students from across the globe achieving excellence with Empyrean.</p>
        </div>

        <div class="reviews-slider" id="reviews-slider">
          ${reviews.map(rev => `
            <div class="review-card">
              <div class="review-header">
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="review-text">"${rev.text}"</p>
              </div>
              
              <div class="review-footer">
                <img src="${rev.img}" alt="${rev.name}" class="reviewer-img">
                <div class="reviewer-meta">
                  <div class="name-row">
                    <strong>${rev.name}</strong>
                    <span class="verified-badge"><i class="fas fa-check-circle"></i></span>
                  </div>
                  <span class="location">${rev.flag} ${rev.location}</span>
                </div>
              </div>

              <div class="review-action">
                ${rev.project ? `
                  <button class="btn-project-spotlight" onclick="alert('Opening Student Project Workspace...')">
                    <i class="fas fa-external-link-alt"></i> ${rev.project}
                  </button>
                ` : `<span class="subject-tag">${rev.subject}</span>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  appSlot.innerHTML += reviewsHTML;

  // Mobile Carousel Observer Logic
  const slider = document.getElementById('reviews-slider');
  const cards = slider.querySelectorAll('.review-card');

  if (window.innerWidth < 992) {
    const observerOptions = {
      root: slider,
      // Lowering threshold to 0.5 ensures it triggers easier on small phones
      threshold: 0.5,
      // This helps the intersection trigger exactly when the card enters the "view"
      rootMargin: '0px -10% 0px -10%' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('focused-review');
        } else {
          entry.target.classList.remove('focused-review');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
  }
}