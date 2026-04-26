export function setupContact() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  const contactHTML = `
    <section id="contact" class="contact-section">
      <div class="container contact-container">
        
        <!-- FORM SIDE (60%) -->
        <div class="contact-form-wrapper">
          <div class="form-header">
            <h2 class="vibrant-title">Start the Journey</h2>
            <p>Speak with our admissions team about your child's future.</p>
          </div>

          <form id="admissions-form" action="https://formspree.io/f/xykbjbld" method="POST">
            <div class="form-grid">
              <div class="auth-input-group">
                <label>Parent Full Name</label>
                <div class="input-wrapper">
                  <i class="fas fa-user"></i>
                  <input type="text" name="name" placeholder="Enter name" required>
                </div>
              </div>

              <div class="auth-input-group">
                <label>Email Address</label>
                <div class="input-wrapper">
                  <i class="fas fa-envelope"></i>
                  <input type="email" name="email" placeholder="email@example.com" required>
                </div>
              </div>

              <div class="auth-input-group">
                <label>Location / Country</label>
                <div class="input-wrapper">
                  <i class="fas fa-globe"></i>
                  <select name="location" required>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Nigeria">🇳🇬 Nigeria</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="USA">🇺🇸 United States</option>
                    <option value="Other">🌍 Other</option>
                  </select>
                </div>
              </div>

              <div class="auth-input-group">
                <label>Program of Interest</label>
                <div class="input-wrapper">
                  <i class="fas fa-graduation-cap"></i>
                  <select name="program" required>
                    <option value="Coding">Coding & AI</option>
                    <option value="GCSE">GCSE/IGCSE Prep</option>
                    <option value="K-12">K-12 Core Essentials</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="auth-input-group">
              <label>How should we contact you?</label>
              <div class="contact-method-group">
                <label class="radio-label">
                  <input type="radio" name="contact_method" value="WhatsApp" checked>
                  <span><i class="fab fa-whatsapp"></i> WhatsApp</span>
                </label>
                <label class="radio-label">
                  <input type="radio" name="contact_method" value="Email">
                  <span><i class="fas fa-envelope"></i> Email</span>
                </label>
              </div>
            </div>

            <div class="auth-input-group">
              <label>Learning Goals / Message</label>
              <textarea name="message" rows="4" placeholder="Tell us about your student..."></textarea>
            </div>

            <button type="submit" class="btn-portal-primary" id="form-submit-btn">
              <span>Send Inquiry</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>

          <!-- Hidden Success Message -->
          <div id="form-success" class="success-box" style="display:none;">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Our admissions team will reach out via your preferred method within 24 hours.</p>
          </div>
        </div>

        <!-- TRUST SIDEBAR (40%) -->
        <div class="contact-trust-sidebar">
          <div class="trust-card">
            <h4>Why Empyrean?</h4>
            <ul class="trust-list">
              <li>
                <i class="fas fa-certificate"></i>
                <div>
                  <strong>UK Standard Curriculum</strong>
                  <p>Materials aligned with top-tier international standards.</p>
                </div>
              </li>
              <li>
                <i class="fas fa-user-check"></i>
                <div>
                  <strong>Vetted Educators</strong>
                  <p>All instructors pass rigorous academic and safety checks.</p>
                </div>
              </li>
              <li>
                <i class="fas fa-bolt"></i>
                <div>
                  <strong>Immediate Start</strong>
                  <p>Enroll today and begin the journey to greatness.</p>
                </div>
              </li>
            </ul>
            
            <div class="direct-contact">
              <p>Prefer to call?</p>
              <a href="tel:+447781504529" class="phone-link">+44 7781 504529</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  appSlot.innerHTML += contactHTML;

  // --- AJAX FORMSPREE LOGIC ---
  const form = document.getElementById('admissions-form');
  const successBox = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('form-submit-btn');
      const data = new FormData(form);

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = 'none';
          successBox.style.display = 'block';
          form.reset();
        } else {
          alert("Oops! There was a problem. Please try again or use WhatsApp.");
          btn.innerHTML = '<span>Send Inquiry</span> <i class="fas fa-paper-plane"></i>';
          btn.disabled = false;
        }
      } catch (error) {
        alert("Connection lost. Please use the WhatsApp button for immediate support.");
        btn.disabled = false;
      }
    });
  }
}