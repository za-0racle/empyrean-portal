import { supabase } from "../lib/supabase.js"; // Added .js extension

export async function setupInstructor() { // Added 'async'
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  // 1. Inject the HTML first
  appSlot.innerHTML = `
    <div class="instructor-container">
      <aside class="ins-sidebar">
        <div class="ins-brand">EMPYREAN TUTOR</div>
        <nav class="ins-nav">
          <a href="#" class="active"><i class="fas fa-home"></i> Overview</a>
          <a href="#"><i class="fas fa-book-reader"></i> My Courses</a>
          <a href="#"><i class="fas fa-tasks"></i> Assignments</a>
          <a href="#"><i class="fas fa-user-graduate"></i> Student List</a>
          <hr>
          <button id="ins-logout-btn" class="logout-link-btn" style="margin-left: 15px; margin-top: 20px;">Logout</button>
        </nav>
      </aside>

      <main class="ins-main">
        <header class="ins-header">
          <div>
            <h2>Tutor Command Center</h2>
            <p>Monitor your students' "Small Start to Greatness."</p>
          </div>
        </header>

        <div class="ins-stats">
          <div class="ins-stat-card">
            <span class="label">Total Students</span>
            <span class="value">42</span>
          </div>
          <div class="ins-stat-card">
            <span class="label">Avg. Student Mark</span>
            <span class="value">84%</span>
          </div>
          <div class="ins-stat-card">
            <span class="label">Pending Grades</span>
            <span class="value">08</span>
          </div>
        </div>

        <div class="ins-grid">
          <!-- Quick Resource Upload Section -->
          <section class="ins-section">
            <h3><i class="fas fa-upload"></i> Quick Resource Upload</h3>
            <p style="margin-bottom: 20px; color: #64748b; font-size: 0.9rem;">Upload lesson links, PDFs, or assignments directly to students.</p>
            
            <form id="resource-form" class="resource-upload-form">
              <div class="auth-input-group">
                <label>Resource Title</label>
                <input type="text" id="res-title" placeholder="e.g. Week 1: Python Basics" required>
              </div>
              <div class="auth-input-group">
                <label>Resource URL</label>
                <input type="url" id="res-url" placeholder="https://youtube.com/..." required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="auth-input-group">
                  <label>Material Type</label>
                  <select id="res-type">
                    <option value="video">Video Lesson</option>
                    <option value="pdf">PDF Notes</option>
                    <option value="assignment">Assignment Task</option>
                    <option value="link">External Link</option>
                  </select>
                </div>
                <div class="auth-input-group">
                  <label>Assign to Course</label>
                  <select id="res-course" required>
                    <option value="">Loading courses...</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn-portal-primary" style="margin-top: 10px;">
                Publish to Student Dashboards
              </button>
            </form>
          </section>

          <section class="ins-section">
            <h3>Course Overview</h3>
            <div class="mini-course-card">
              <h4>Coding for Kids</h4>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 65%;"></div></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  `;

  // 2. NOW that the HTML exists, select the elements
  const resourceForm = document.getElementById('resource-form');
  const courseSelect = document.getElementById('course');
  const logoutBtn = document.getElementById('ins-logout-btn');

  // 3. FETCH REAL COURSES FROM DATABASE
  const { data: courses, error: fetchError } = await supabase.from('courses').select('id, title');
  
  if (fetchError) {
    courseSelect.innerHTML = `<option value="">Error loading courses</option>`;
  } else if (courses && courses.length > 0) {
    courseSelect.innerHTML = courses.map(c => 
      `<option value="${c.id}">${c.title}</option>`
    ).join('');
  } else {
    courseSelect.innerHTML = `<option value="">No courses found. Add one in Admin.</option>`;
  }

  // 4. THE "PUBLISH" LOGIC
  resourceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = resourceForm.querySelector('button');
    const originalText = submitBtn.innerText;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing...';
    submitBtn.disabled = true;

    const title = document.getElementById('res-title').value;
    const url = document.getElementById('res-url').value;
    const type = document.getElementById('res-type').value;
    const courseId = document.getElementById('course').value;

    const { error } = await supabase
      .from('resources')
      .insert([{ title, url, type, course_id: courseId }]);

    if (error) {
      alert("Error publishing: " + error.message);
    } else {
      alert("Success! The material is now live for students.");
      resourceForm.reset();
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  });

  // 5. LOGOUT LOGIC
  logoutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = '/login.html';
  });
}