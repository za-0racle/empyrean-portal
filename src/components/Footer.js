export function setupFooter() {
  const footerSlot = document.getElementById('footer-slot');
  if (!footerSlot) return;

  footerSlot.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          
          <!-- Column 1: Identity & Statement -->
          <div class="footer-col brand-info">
            <div class="footer-logo">
              <img src="/Logo2.png" alt="Empyrean Logo">
              <span class="brand-name-foot">EMPYREAN</span>
            </div>
            <p class="footer-motto">"Sic Parvis Magna"<br>Greatness from small beginnings.</p>
            <div class="footer-contact-main">
              <a href="mailto:admin@empyreanedu.com"><i class="fas fa-envelope"></i> admin@empyreanedu.com</a>
              <a href="tel:+2348106035676"><i class="fas fa-phone"></i> +234 810 603 5676</a>
            </div>
          </div>

          <!-- Column 2: Europe & N. America Hub -->
          <div class="footer-col">
            <h4 class="footer-title">Global Headquarters</h4>
            <div class="hub-item">
              <span class="hub-label">United Kingdom</span>
              <p>1 Savoy Hill, London, WC2R 0BP</p>
              <a href="tel:+447781504529" class="hub-link">+44 7781 504529</a>
            </div>
            <div class="hub-item">
              <span class="hub-label">North America</span>
              <p>New York, USA | Toronto, Canada</p>
              <span class="status-badge">Satellite Support</span>
            </div>
          </div>

          <!-- Column 3: West Africa Hub -->
          <div class="footer-col">
            <h4 class="footer-title">Regional Operations</h4>
            <div class="hub-item">
              <span class="hub-label">West Africa (Nigeria)</span>
              <p>Lagos | Ibadan | Ogun State</p>
              <a href="tel:+2348106035676" class="hub-link">+234 810 603 5676</a>
            </div>
            <div class="hub-item">
              <span class="hub-label">Ireland Support</span>
              <p>Dublin, Ireland</p>
            </div>
          </div>

          <!-- Column 4: Navigation & Social -->
          <div class="footer-col last-col">
            <h4 class="footer-title">Explore Portal</h4>
            <ul class="footer-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/catalog.html">Course Catalog</a></li>
              <li><a href="/dashboard.html" class="highlight-link">Student Portal</a></li>
            </ul>
            <div class="footer-socials">
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Empyrean Edu Consult. Built for Global Excellence.</p>
          <div class="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}