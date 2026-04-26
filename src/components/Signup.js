import { supabase } from '../lib/supabase.js'

export function setupSignup() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <div class="auth-portal-wrapper">
      <div class="auth-card">
        <!-- Unified Header -->
        <div class="auth-header">
          <img src="/Logo2.png" alt="Empyrean Logo" class="auth-logo">
          <span class="auth-badge">Start Your Journey</span>
          <h2>Create Account</h2>
          <p>Join our global community of learners.</p>
        </div>

        <form id="signup-form" class="auth-form">
          <!-- Full Name Field (Added for Database Consistency) -->
          <div class="auth-input-group">
            <label for="full-name">Full Name</label>
            <div class="input-wrapper">
              <i class="fas fa-user"></i>
              <input type="text" id="full-name" placeholder="John Doe" required>
            </div>
          </div>

          <div class="auth-input-group">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope"></i>
              <input type="email" id="email" placeholder="name@global.com" required>
            </div>
          </div>

          <div class="auth-input-group">
            <label for="password">Create Password</label>
            <div class="input-wrapper">
              <i class="fas fa-lock"></i>
              <input type="password" id="password" placeholder="Min. 6 characters" required>
            </div>
          </div>

          <button type="submit" class="btn-portal-primary">
            <span>Create My Account</span>
            <i class="fas fa-user-plus"></i>
          </button>
        </form>

        <div class="auth-footer">
          <p>Already have an account? <a href="/login.html">Login here</a></p>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';

    // SUPABASE SIGNUP WITH METADATA
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName // This sends the name to our SQL trigger!
        }
      }
    });

    if (error) {
      alert("Registration Error: " + error.message);
      btn.innerHTML = '<span>Create My Account</span><i class="fas fa-user-plus"></i>';
    } else {
      alert("Welcome to Empyrean! Please check your email to verify your account.");
      window.location.href = '/login.html';
    }
  });
}