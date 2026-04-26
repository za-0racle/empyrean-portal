import './styles/style.css'
import { setupNavbar } from './components/Navbar.js'
import { setupHero } from './components/Hero.js'
import { setupPrograms } from './components/Programs.js'
import { setupTutors } from './components/Tutors.js'
import { setupFooter } from './components/Footer.js' 
import { setupWhatsApp } from './components/WhatsApp.js'
import { setupDashboard } from './components/Dashboard.js'
import { setupAdmin } from './components/Admin.js'
import { setupCatalog } from './components/Catalog.js'
import { setupInstructor } from './components/Instructor.js'
import { setupSignup } from './components/Signup.js'
import { setupLogin } from './components/Login.js'
import { setupReviews } from './components/Reviews.js'
import { setupContact } from './components/Contact.js'
import { supabase } from './lib/supabase.js'

async function router() {
  const path = window.location.pathname;
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  // STEP 1: Draw the Shell immediately (Guest state)
  // This prevents the blank white screen
  if (!path.includes('classroom')) {
    setupNavbar(null); 
    setupFooter();
  }
  setupWhatsApp();

  // STEP 2: Fetch Auth in background
  const { data: { user } } = await supabase.auth.getUser();
  
  let userRole = 'guest';
  if (user) {
    // We use .maybeSingle() instead of .single() to prevent crashing if profile is missing
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle(); 

    if (error) {
      console.warn("Profile fetch error:", error.message);
    }

    // Default to 'student' if no profile is found yet
    userRole = profile?.role || 'student';
    setupNavbar(user);
  }

  // STEP 3: Clear and Render the correct page
if (appSlot) {
  appSlot.innerHTML = ''; 
  appSlot.className = ''; // <--- ADD THIS: This removes "Hero" classes from the previous page
} 

  if (path.includes('signup')) {
    setupSignup();
  } 
  else if (path.includes('login')) {
    setupLogin();
  } 
  else if (path.includes('catalog')) {
    setupCatalog();
  }
  else if (path.includes('dashboard')) {
    if (userRole === 'instructor') setupInstructor();
    else if (userRole === 'admin') setupAdmin();
    else setupDashboard();
  } 
  else {
    setupHero();
    setupPrograms();
    setupTutors();
    setupReviews();
    setupContact();
  }
}

router();

// This listens for any Auth change (Login, Logout, Sign Up)
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth Event Triggered:", event);
  if (event === 'SIGNED_OUT') {
    // If they sign out, wipe the app slot and go home
    router(); 
  }
});