import { studentData } from '../modules/data.js';

export function setupDashboard() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <div class="dashboard-container">
      <!-- Sidebar -->
      <aside class="dash-sidebar">
        <div class="user-profile">
          <div class="avatar">${studentData.name[0]}</div>
          <h3>Welcome, ${studentData.name}</h3>
          <span class="student-id">ID: EMP-2026-04</span>
        </div>
        <nav class="dash-nav">
          <a href="#" class="active"><i class="fas fa-th-large"></i> Overview</a>
          <a href="#"><i class="fas fa-book"></i> My Courses</a>
          <a href="#"><i class="fas fa-calendar-alt"></i> Schedule</a>
          <a href="#"><i class="fas fa-certificate"></i> Certificates</a>
          <hr>
          <a href="/" class="logout-link"><i class="fas fa-sign-out-alt"></i> Log Out</a>
        </nav>
      </aside>

      <!-- Main Dashboard Area -->
      <main class="dash-content">
        <header class="dash-header">
          <h2>Student Learning Dashboard</h2>
          <div class="header-actions">
            <button class="btn-notify"><i class="fas fa-bell"></i></button>
            <button class="btn-primary-sm">Resume Learning</button>
          </div>
        </header>

        <!-- Progress Overview -->
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-label">Active Courses</span>
            <span class="stat-value">02</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">Completed Lessons</span>
            <span class="stat-value">14</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">Learning Hours</span>
            <span class="stat-value">24.5h</span>
          </div>
        </div>

        <section class="my-courses">
          <h3>Continue Learning</h3>
          <div class="course-list">
            ${studentData.enrolledCourses.map(course => `
              <div class="dash-course-card">
              <img src="${course.thumbnail}" alt="course">
                 <div class="dash-course-info">
                  <div class="course-header-row">
                    <h4>${course.title}</h4>
                    <span class="tutor-tag">Tutor: ${course.tutor}</span>
                  </div>
    
                  <div class="progress-container">
                <div class="progress-bar" style="width: ${course.progress}%"></div>
               </div>

          <!-- NEW: Material Links directly on the card -->
            <div class="resource-links">
              <a href="#" class="res-link"><i class="fas fa-file-pdf"></i> Lesson Notes</a>
              <a href="#" class="res-link"><i class="fas fa-external-link-alt"></i> External Workshop</a>
              <a href="#" class="res-link assignment"><i class="fas fa-tasks"></i> Pending Assignment</a>
            </div>
          </div>
        </div>
            `).join('')}
          </div>
        </section>
      </main>

      <!-- Right Column: Schedule -->
      <aside class="dash-schedule">
        <h3>Live Classes</h3>
        ${studentData.upcomingClasses.map(cls => `
          <div class="schedule-card">
            <div class="date-box">
              <span class="day">${cls.date.split(' ')[1]}</span>
              <span class="month">${cls.date.split(' ')[0]}</span>
            </div>
            <div class="class-details">
              <h4>${cls.subject}</h4>
              <p><i class="far fa-clock"></i> ${cls.time}</p>
            </div>
          </div>
        `).join('')}
        <button class="btn-full">View Full Calendar</button>
      </aside>
    </div>
  `;
}