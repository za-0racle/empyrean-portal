import { allCourses } from '../modules/courseData';

export function setupCatalog() {
  const appSlot = document.getElementById('app');
  if (!appSlot) return;

  appSlot.innerHTML = `
    <section class="catalog-hero">
      <div class="container">
        <h1>Global <span class="highlight">Course Catalog</span></h1>
        <p>Find the right program to unlock your international future.</p>
        
        <!-- Search & Filter Bar -->
        <div class="filter-container">
          <div class="search-wrapper">
            <i class="fas fa-search"></i>
            <input type="text" id="course-search" placeholder="Search by subject, tutor, or exam...">
          </div>
          <select id="category-filter">
            <option value="all">All Categories</option>
            <option value="Coding & Tech">Coding & Technology</option>
            <option value="Standardized Tests">Exam Prep</option>
            <option value="K-12 Core">K-12 Essentials</option>
          </select>
        </div>
      </div>
    </section>

    <section class="catalog-grid-section">
      <div class="container">
        <div class="course-market-grid" id="course-grid">
          ${allCourses.map(course => `
            <div class="market-card">
              <div class="card-img-wrapper">
                <img src="${course.image}" alt="${course.title}">
                <span class="price-tag">${course.price}</span>
              </div>
              <div class="card-content">
                <span class="cat-label">${course.category}</span>
                <h3>${course.title}</h3>
                <p class="tutor-name">by <strong>${course.tutor}</strong></p>
                <div class="course-stats">
                  <span><i class="fas fa-signal"></i> ${course.level}</span>
                  <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <button class="btn-enroll-full">Enroll Now</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}