import { supabase } from '../lib/supabase.js';

export function setupNavbar(user) {
  const navSlot = document.getElementById('nav-slot');
  if (!navSlot) return;

  const authLinks = user 
    ? `<li><a href="/dashboard.html">Dashboard</a></li>
       <li><button id="logout-btn" class="logout-link-btn">Logout</button></li>` 
    : `<li><a href="/login.html">Login</a></li>
       <li><a href="/signup.html" class="portal-btn">Enroll Now</a></li>`;

  navSlot.innerHTML = `
    <nav class="navbar">
      <div class="container main-nav-container">
        <!-- BRAND LOGO AREA -->
        <div class="logo">
          <a href="/">
            <img src="/Logo2.png" alt="Empyrean Logo" />
            <div class="logo-text">
              <span class="brand-name">EMPYREAN</span>
              <span class="brand-sub">EDU CONSULT</span>
            </div>
          </a>
        </div>

        <!-- MENU LINKS -->
        <ul class="nav-links" id="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/catalog.html">Courses</a></li>
          ${authLinks}
        </ul>

        <!-- HAMBURGER BUTTON -->
        <div class="hamburger" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <!-- DARK OVERLAY -->
      <div class="nav-overlay" id="nav-overlay"></div>
    </nav>
  `;

  // --- SELECTORS ---
  const hamburger = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');

  // --- TOGGLE LOGIC ---
  const toggleMenu = () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
  };

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);

  // Logout Logic
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
       console.log("Logging out...");
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        alert("Logout failed: " + error.message);
      } else {
        // FORCE a full page refresh to the home page
        // This ensures the router re-runs and sees the user as 'guest'
        window.location.href = '/index.html'; 
        // If you are already on index.html, we force a refresh:
        setTimeout(() => window.location.reload(), 100);
      }
    });
  }
}
