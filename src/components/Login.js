import { supabase } from '../lib/supabase.js'

export function setupLogin() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <div class="auth-portal-wrapper">
      <div class="auth-card">
        <div class="auth-header">
          <img src="/Logo2.png" alt="Empyrean Logo" class="auth-logo">
          <span class="auth-badge">Secure Access</span>
          <h2>Empyrean Portal</h2>
          <p>Global Learning & Management System</p>
        </div>

        <form id="login-form" class="auth-form">
          <div class="auth-input-group">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope"></i>
              <input type="email" id="email" placeholder="e.g. name@global.com" required>
            </div>
          </div>

          <div class="auth-input-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <i class="fas fa-lock"></i>
              <input type="password" id="password" placeholder="••••••••" required>
            </div>
          </div>

          <button type="submit" class="btn-portal-primary">
            <span>Sign In to Portal</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </form>

        <div class="auth-footer">
          <p>New to the platform? <a href="/signup.html">Create Student Account</a></p>
          <a href="#" class="forgot-pass">Forgot password?</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Visual feedback for global UX
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Access Denied: " + error.message);
      btn.innerHTML = '<span>Sign In to Portal</span><i class="fas fa-arrow-right"></i>';
    } else {
      // The router in main.js will automatically detect the role and send you to the right place
      window.location.href = '/dashboard.html';
    }
  });
}