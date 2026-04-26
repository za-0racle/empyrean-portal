import { adminStats, recentStudents } from '../modules/adminData.js';

export function setupAdmin() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <div class="admin-container">
      <aside class="admin-sidebar">
        <div class="admin-logo">EMPYREAN ADMIN</div>
        <nav class="admin-nav">
          <a href="#" class="active"><i class="fas fa-chart-line"></i> Dashboard</a>
          <a href="#"><i class="fas fa-user-graduate"></i> Students</a>
          <a href="#"><i class="fas fa-video"></i> Course Manager</a>
          <a href="#"><i class="fas fa-wallet"></i> Revenue</a>
          <a href="#"><i class="fas fa-cog"></i> Settings</a>
        </nav>
      </aside>

      <main class="admin-main">
        <header class="admin-header">
          <h2>Overview Dashboard</h2>
          <button class="btn-primary-sm">+ Create New Course</button>
        </header>

        <!-- Stats Grid -->
        <div class="admin-stats">
          <div class="stat-box">
            <i class="fas fa-users"></i>
            <div>
              <span class="label">Total Students</span>
              <span class="value">${adminStats.totalStudents}</span>
            </div>
          </div>
          <div class="stat-box">
            <i class="fas fa-dollar-sign"></i>
            <div>
              <span class="label">Total Revenue</span>
              <span class="value">${adminStats.revenue}</span>
            </div>
          </div>
          <div class="stat-box warning">
            <i class="fas fa-clock"></i>
            <div>
              <span class="label">Pending Enrollments</span>
              <span class="value">${adminStats.pendingRequests}</span>
            </div>
          </div>
        </div>

        <!-- Student Table -->
        <section class="admin-table-section">
          <h3>Recent Enrollments</h3>
          <div class="admin-table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${recentStudents.map(s => `
                <tr>
                  <td>#${s.id}</td>
                  <td><strong>${s.name}</strong></td>
                  <td>${s.course}</td>
                  <td><span class="status-pill ${s.status.toLowerCase()}">${s.status}</span></td>
                  <td><button class="btn-edit">Manage</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          </div>
        </section>
      </main>
    </div>
  `;
}