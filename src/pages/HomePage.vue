<template>
  <main>
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="grid-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">Sal Sokny</h1>
        <p class="hero-title">Frontend Developer</p>
        <p class="hero-tagline">
          Crafting beautiful, responsive interfaces with Vue, TypeScript,
          Tailwind CSS, and Arco Design.
        </p>
        <div class="hero-cta">
          <div class="lang-tags">
            <span
              @click="scrollTo('contact')"
              class="lang-tag fluent p-4 cursor-pointer"
              >Get in Touch</span
            >
            <span
              @click="scrollTo('experience')"
              class="lang-tag p-4 cursor-pointer"
              >View My Work</span
            >
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">01</span>
          About Me
        </h2>
        <div class="about-grid">
          <div
            class="about-image scroll-from-right !rounded-md overflow-hidden !w-full !h-auto"
          >
            <img :src="profileImage" alt="Sal Sokny" class="!rounded-md" />
          </div>
          <div class="about-content scroll-from-left">
            <p class="about-intro">
              I'm a passionate Frontend Developer based in Phnom Penh, Cambodia.
              I specialize in turning design mockups into functional,
              pixel-perfect web applications using modern JavaScript frameworks.
            </p>
            <div class="about-details">
              <div class="detail-row">
                <span class="detail-label">Location</span>
                <span class="detail-value">Phnom Penh, Cambodia</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value"
                  ><a href="mailto:salsokny1234@gmail.com"
                    >salsokny1234@gmail.com</a
                  ></span
                >
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value"
                  ><a href="tel:0966805742">096 680 5742</a></span
                >
              </div>
              <div class="detail-row">
                <span class="detail-label">LinkedIn</span>
                <span class="detail-value"
                  ><a
                    href="https://linkedin.com/in/sal-sokny-187b9b228/"
                    target="_blank"
                    rel="noopener"
                    >Sal Sokny</a
                  ></span
                >
              </div>
            </div>
            <div class="about-traits">
              <h4>What I bring to the table</h4>
              <ul>
                <li>Build strong relationships</li>
                <li>Willing to work with a group or team</li>
                <li>Share knowledge and experience</li>
                <li>Pay attention to detail in my work</li>
              </ul>
            </div>
            <div class="about-hobbies">
              <h4>Beyond coding</h4>
              <div class="hobby-tags">
                <span>Reading Books</span>
                <span>Cooking</span>
                <span>Fitness</span>
                <span>Music</span>
                <span>Movies & TV</span>
                <span>Photography</span>
                <span>Technology</span>
                <span>Nature & Outdoors</span>
                <span>Travel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">02</span>
          Experience
        </h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">Aug 2022 — Present</span>
              <h3>Frontend Developer</h3>
              <p class="company">DR Tech · Phnom Penh</p>
              <ul>
                <li>
                  Built responsive and interactive web applications using HTML5,
                  CSS3, SCSS, Tailwind CSS, JavaScript (ES6+), TypeScript,
                  Vue.js, Vite, Pinia, and Arco Design, Vuetify...
                </li>
                <li>
                  Converted UI/UX designs into reusable and maintainable
                  frontend components.
                </li>
                <li>
                  Integrated frontend components with backend services and
                  RESTful APIs to support application functionality.
                </li>
                <li>
                  Improved application performance, responsiveness, and
                  cross-browser compatibility.
                </li>
                <li>
                  Used Git for version control and collaborated effectively
                  within agile development teams.
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">Feb 2021 – July 2022</span>
              <h3>Frontend Developer</h3>
              <p class="company">Cambodia Software · Phnom Penh</p>
              <ul>
                <li>
                  Built responsive and interactive web applications using HTML5,
                  CSS3, SCSS, Tailwind CSS, JavaScript (ES6+), Vue.js, and
                  Vuetify...
                </li>
                <li>
                  Turn design mockups into functional web pages using JS
                  frameworks.
                </li>
                <li>
                  Integrated RESTful APIs and collaborated with backend
                  developers.
                </li>
                <li>
                  Used Git for version control and collaborated within agile
                  development teams.
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">Jun 2019 — Nov 2020</span>
              <h3>Data Entry</h3>
              <p class="company">
                DEPARTMENT OF POLICY​ (Ministry Of Interior) · Phnom Penh
              </p>
              <ul>
                <li>Input and manage data accurately in the system.</li>
                <li>
                  Verify and validate data for completeness and consistency.
                </li>
                <li>
                  Collaborate with team members to ensure data integrity and
                  security.
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">Feb 2019 — May 2019</span>
              <h3>Teacher English</h3>
              <p class="company">Handprints School · Phnom Penh</p>
              <ul>
                <li>Teach English to students aged 9-10 years old.</li>
                <li>
                  Create engaging lesson plans and activities to improve
                  language skills.
                </li>
                <li>
                  Assess student progress and provide feedback to students and
                  parents.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">03</span>
          Projects
        </h2>
        <div class="projects-list">
          <article class="project-card scroll-from-right">
            <span class="project-accent" aria-hidden="true"></span>
            <div class="project-card-body scroll-from-right">
              <div class="project-card-head">
                <h3 class="project-name">Parking Management Admin</h3>
                <p class="project-summary">
                  Admin dashboard for parking operators to run and monitor
                  parking facilities.
                </p>
                <div class="project-tags">
                  <span>Vue 3</span>
                  <span>TypeScript</span>
                  <span>i18n</span>
                  <span>Arco Design</span>
                  <span>Pinia</span>
                  <span>Chart.js</span>
                  <span>Vue Router</span>
                  <span>WebSocket</span>
                </div>
                <button
                  type="button"
                  class="project-toggle"
                  @click="toggleProject('parking')"
                  :aria-expanded="projectsOpen.parking"
                  aria-controls="parking-details"
                >
                  {{ projectsOpen.parking ? "Hide details" : "View details" }}
                </button>
              </div>
              <div
                id="parking-details"
                class="project-details"
                :class="{ 'is-open': projectsOpen.parking }"
              >
                <div class="project-block">
                  <h4>Who it's for</h4>
                  <ul>
                    <li>
                      <strong>Parking operators</strong> – manage lots, devices,
                      and staff
                    </li>
                    <li>
                      <strong>Guards/booth staff</strong> – handle payments and
                      booth activity
                    </li>
                    <li>
                      <strong>Finance/admin</strong> – view settlements,
                      reports, and transactions
                    </li>
                    <li>
                      <strong>System admins</strong> – manage users, roles, and
                      permissions
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Main use cases</h4>
                  <ul>
                    <li>
                      <strong>Monitor</strong> – real-time dashboard for
                      revenue, vehicle counts, and device status
                    </li>
                    <li>
                      <strong>Control</strong> – configure parking lots,
                      devices, and storage
                    </li>
                    <li>
                      <strong>Track</strong> – car and motorcycle entry/exit
                      records
                    </li>
                    <li>
                      <strong>Manage money</strong> – settlements, booth
                      payments, and transaction errors
                    </li>
                    <li>
                      <strong>Report</strong> – business and statistical
                      reports, blacklists/whitelists
                    </li>
                    <li>
                      <strong>Admin</strong> – users, roles, permissions, and
                      system logs
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Features I worked on</h4>
                  <ol>
                    <li>
                      <strong>Vehicle management</strong> – CRUD, filters,
                      pagination, separate flows for cars and motorcycles
                    </li>
                    <li>
                      <strong>Entry/exit record tracking</strong> – Car and
                      motorcycle records with search, filters, pagination
                    </li>
                    <li>
                      <strong>Device monitoring & operations</strong> – Device
                      status, health, operation logs, storage management
                    </li>
                    <li>
                      <strong>Parking configuration</strong> – Multi-step
                      wizard, create/edit setups
                    </li>
                    <li>
                      <strong>Financial management</strong> – Settlement
                      summary, booth payments, transaction error handling
                    </li>
                    <li>
                      <strong>Reporting & analytics</strong> – Chart.js
                      visualizations, blacklist and whitelist management
                    </li>
                    <li>
                      <strong>RBAC</strong> – Role and staff management,
                      v-permission directive, route guards
                    </li>
                    <li>
                      <strong>i18n</strong> – 4 languages (English, Khmer,
                      Chinese, Vietnamese)
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </article>

          <article class="project-card">
            <span class="project-accent" aria-hidden="true"></span>
            <div class="project-card-body">
              <div class="project-card-head">
                <h3 class="project-name">Property & Building Management</h3>
                <p class="project-summary">
                  Comprehensive platform for managing properties, buildings,
                  tenants, billing, access control, and operations.
                </p>
                <div class="project-tags">
                  <span>Vue 3</span>
                  <span>TypeScript</span>
                  <span>i18n</span>
                  <span>Arco Design</span>
                  <span>Pinia</span>
                  <span>Chart.js</span>
                  <span>Vue Router</span>
                  <span>WebSocket</span>
                </div>
                <button
                  type="button"
                  class="project-toggle"
                  @click="toggleProject('property')"
                  :aria-expanded="projectsOpen.property"
                  aria-controls="property-details"
                >
                  {{ projectsOpen.property ? "Hide details" : "View details" }}
                </button>
              </div>
              <div
                id="property-details"
                class="project-details"
                :class="{ 'is-open': projectsOpen.property }"
              >
                <div class="project-block">
                  <h4>Who it's for</h4>
                  <ul>
                    <li>
                      <strong>Property managers</strong> – manage buildings,
                      units, and configurations
                    </li>
                    <li>
                      <strong>Enterprise/company admins</strong> – manage
                      employees, contracts, and fees
                    </li>
                    <li>
                      <strong>Finance staff</strong> – handle billing, payments,
                      and settlements
                    </li>
                    <li>
                      <strong>Maintenance staff</strong> – process service and
                      maintenance orders
                    </li>
                    <li>
                      <strong>Security staff</strong> – manage access control,
                      gates, and devices
                    </li>
                    <li>
                      <strong>System admins</strong> – manage users, roles, and
                      permissions
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Main use cases</h4>
                  <ul>
                    <li>
                      <strong>Vehicle management</strong> - registration, access
                      records, tracking
                    </li>
                    <li>
                      <strong>Manage properties</strong> – buildings, floors,
                      units, spaces
                    </li>
                    <li>
                      <strong>Manage tenants & contracts</strong> –
                      enterprise/company, contracts, employee management, leave,
                      resignation, merchant
                    </li>
                    <li>
                      <strong>Billing & payments</strong> – tenant bills,
                      refunds, fee settings, transaction history
                    </li>
                    <li>
                      <strong>Access control</strong> – gates, biometric
                      devices, cards, entry/exit records
                    </li>
                    <li>
                      <strong>Operations</strong> – meals, utilities, lockers,
                      maintenance, rescue center
                    </li>
                    <li>
                      <strong>Report & admin</strong> – reports, blacklist,
                      feedback, announcements, system settings
                    </li>
                    <li>
                      <strong>Admin</strong> – users, roles, permissions, binded
                      telegram account and system logs
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Features I worked on</h4>
                  <ol>
                    <li>
                      <strong>Property & building management</strong> – Project
                      overview, building/floor/unit type management, space
                      management
                    </li>
                    <li>
                      <strong>Owner & tenant management</strong> –
                      Enterprise/company, contracts, employee management, leave,
                      resignation, merchant
                    </li>
                    <li>
                      <strong>Billing & financial management</strong> – Tenant
                      bills, refunds, fee settings, transaction history
                    </li>
                    <li>
                      <strong>Access control system</strong> – Entry/exit
                      records, gates, biometric devices, gatekeeper, cards,
                      real-time monitoring
                    </li>
                    <li>
                      <strong>Vehicle management</strong> – Registration, access
                      records, tracking
                    </li>
                    <li>
                      <strong>Meal management</strong> – Dashboard, orders,
                      catering, delivery, packages, events
                    </li>
                    <li>
                      <strong>Maintenance & service orders</strong> – Order
                      management, tracking
                    </li>
                    <li>
                      <strong>Rescue center</strong> – Rescue list, monitoring
                      dashboard, real-time notifications
                    </li>
                    <li>
                      <strong>Report management</strong> – Reporting list,
                      alerts, custom reports
                    </li>
                    <li>
                      <strong>Blacklist management</strong> – List, review,
                      detection, security monitoring
                    </li>
                    <li>
                      <strong>Property suggestion & feedback</strong> –
                      Suggestion management, user feedback
                    </li>
                    <li>
                      <strong>Operation management</strong> – Posters,
                      announcements, notification center
                    </li>
                    <li>
                      <strong>Fitness management</strong> – Members, club,
                      financial, access control
                    </li>
                    <li>
                      <strong>Account & configuration</strong> – Users, roles,
                      permissions, Purple Chat integration
                    </li>
                    <li>
                      <strong>Authentication & security</strong> – JWT, 2FA,
                      RBAC, device fingerprinting, route guards
                    </li>
                    <li>
                      <strong>Data visualization</strong> – Chart.js, employee
                      statistics, meal/gate analytics
                    </li>
                    <li>
                      <strong>Internationalization</strong> – 4 languages
                      (English, Chinese, Vietnamese, Khmer)
                    </li>
                    <li>
                      <strong>Document & file handling</strong> – PDF,
                      Excel/CSV, QR codes, image cropping
                    </li>
                    <li>
                      <strong>UI/UX</strong> – Responsive, Quill editor,
                      SortableJS, Lottie, Swiper
                    </li>
                    <li>
                      <strong>Technical stack</strong> – Vue 3 (Composition
                      API), TypeScript, Vite, Pinia, Arco Design Vue · 100+
                      APIs, 100+ stores, 160+ components
                    </li>
                    <li>
                      <strong>RBAC</strong> – Role and staff management,
                      v-permission directive, route guards
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </article>

          <article class="project-card">
            <span class="project-accent" aria-hidden="true"></span>
            <div class="project-card-body">
              <div class="project-card-head">
                <h3 class="project-name">ChatMe Admin</h3>
                <p class="project-summary">
                  Admin dashboard for ChatMe, a customer support platform used
                  to manage users, agents, conversations, feedback, app
                  releases, merchants, and system configurations.
                </p>
                <div class="project-tags">
                  <span>Vue 3</span>
                  <span>TypeScript</span>
                  <span>Vue I18n</span>
                  <span>Vuetify</span>
                  <span>Vuex</span>
                  <span>Chart.js</span>
                  <span>Vue Router</span>
                </div>
                <button
                  type="button"
                  class="project-toggle"
                  @click="toggleProject('chatme')"
                  :aria-expanded="projectsOpen.chatme"
                  aria-controls="chatme-admin-details"
                >
                  {{ projectsOpen.chatme ? "Hide details" : "View details" }}
                </button>
              </div>
              <div
                id="chatme-admin-details"
                class="project-details"
                :class="{ 'is-open': projectsOpen.chatme }"
              >
                <div class="project-block">
                  <h4>Who it's for</h4>
                  <ul>
                    <li>
                      <strong>System Administrators</strong> – manage users,
                      roles, permissions, and system settings
                    </li>
                    <li>
                      <strong>Support Teams</strong> – monitor conversations,
                      customer feedback, and response performance
                    </li>
                    <li>
                      <strong>Management Teams</strong> – review reports,
                      analytics, and application performance metrics
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Main Use Cases</h4>
                  <ul>
                    <li>
                      <strong>Dashboard</strong> – Monitor usage and user
                      insights
                    </li>
                    <li>
                      <strong>User & Agent Management</strong> – CRUD
                      operations, roles, and permissions
                    </li>
                    <li>
                      <strong>Conversation Monitoring</strong> – Real-time chat
                      tracking and feedback analysis
                    </li>
                    <li>
                      <strong>Feedback Management</strong> – Review and respond
                      to user feedback
                    </li>
                    <li>
                      <strong>App Release Management</strong> – Manage versions
                      and deployment updates
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Features I worked on</h4>
                  <ol>
                    <li>
                      <strong>User & Agent Management</strong> – CRUD
                      operations, role-based access control, and permission
                      management
                    </li>
                    <li>
                      <strong>Real-time Conversation Monitoring</strong> – Chat
                      tracking, response time monitoring, and feedback analysis
                    </li>
                    <li>
                      <strong>Dashboard Analytics</strong> – Monitoring system
                      usage and user activity insights
                    </li>
                    <li>
                      <strong>App Release Management</strong> – Managing version
                      updates, deployment tracking, and release workflow
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </article>

          <article class="project-card">
            <span class="project-accent" aria-hidden="true"></span>
            <div class="project-card-body">
              <div class="project-card-head">
                <h3 class="project-name">Website Official EA</h3>
                <p class="project-summary">
                  Website for EA, a customer support platform used to guide
                  customers to find information about the company, products, and
                  services, and provide contact information and support
                  resources.
                </p>
                <div class="project-tags">
                  <span>Vue 3</span>
                  <span>TypeScript</span>
                  <span>Vue I18n</span>
                  <span>Arco Design</span>
                  <span>Vuex</span>
                  <span>Vue Router</span>
                </div>
                <button
                  type="button"
                  class="project-toggle"
                  @click="toggleProject('ea')"
                  :aria-expanded="projectsOpen.ea"
                  aria-controls="website-details"
                >
                  {{ projectsOpen.ea ? "Hide details" : "View details" }}
                </button>
              </div>
              <div
                id="website-details"
                class="project-details"
                :class="{ 'is-open': projectsOpen.ea }"
              >
                <div class="project-block">
                  <h4>Who it's for</h4>
                  <ul>
                    <li>
                      <strong>Home Page</strong> – find information about the
                      company, download apps, and access support resources.
                    </li>
                    <li>
                      <strong>Contact Page</strong> – provide contact phones,
                      email, and telegram.
                    </li>
                    <li>
                      <strong>Guides Page</strong> – provide guides and
                      tutorials for using the platform.
                    </li>
                    <li>
                      <strong>Support Page</strong> – provide FAQs,
                      troubleshooting steps, and support resources for
                      customers.
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Main use cases</h4>
                  <ul>
                    <li>
                      <strong>Home Page</strong> – find information about the
                      company, download apps, and access support resources.
                    </li>
                    <li>
                      <strong>Contact Page</strong> – provide contact phones,
                      email, and telegram.
                    </li>
                    <li>
                      <strong>Guides Page</strong> – provide guides and
                      tutorials for using the platform.
                    </li>
                    <li>
                      <strong>Support Page</strong> – provide FAQs,
                      troubleshooting steps, and support resources for
                      customers.
                    </li>
                  </ul>
                </div>
                <div class="project-block">
                  <h4>Features I worked on</h4>
                  <ol>
                    <li>
                      <strong>Home Page</strong> – find information about the
                      company, download apps, and access support resources.
                    </li>
                    <li>
                      <strong>Contact Page</strong> – provide contact phones,
                      email, and telegram.
                    </li>
                    <li>
                      <strong>Guides Page</strong> – provide guides and
                      tutorials for using the platform.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="skills" class="section skills">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">04</span>
          Skills
        </h2>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar">
              <div
                class="skill-fill"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
            <span class="skill-level">{{ skill.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="section education">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">05</span>
          Education
        </h2>
        <div class="education-timeline">
          <div
            class="edu-item"
            v-for="item in education"
            :key="item.title + item.date"
          >
            <span class="edu-date">{{ item.date }}</span>
            <div class="edu-content">
              <h3>{{ item.title }}</h3>
              <p class="edu-school">{{ item.school }}</p>
            </div>
          </div>
        </div>
        <div class="languages">
          <h3>Languages</h3>
          <div class="lang-tags">
            <span class="lang-tag fluent">Khmer — Fluent</span>
            <span class="lang-tag">English — Good</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">
          <span class="title-num">06</span>
          Get In Touch
        </h2>
        <div class="contact-content">
          <p class="contact-intro">
            I'm always open to new opportunities and collaborations. Whether you
            have a project in mind or just want to say hello — let's connect!
          </p>
          <div class="contact-links">
            <a href="mailto:salsokny1234@gmail.com" class="contact-link">
              <span class="contact-icon">✉</span>
              <span>salsokny1234@gmail.com</span>
            </a>
            <a href="tel:0968605742" class="contact-link">
              <span class="contact-icon">📞</span>
              <span>096 680 5742</span>
            </a>
            <a
              href="https://linkedin.com/in/sal-sokny-187b9b228/"
              target="_blank"
              rel="noopener"
              class="contact-link"
            >
              <span class="contact-icon">in</span>
              <span>LinkedIn: Sal Sokny</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import profileImage from "../assets/pic_sokny.jpg";

const theme = ref("dark");

const projectsOpen = ref({
  parking: false,
  property: false,
  chatme: false,
  ea: false,
});

const skills = [
  { name: "HTML", level: 95, label: "Very Good" },
  { name: "CSS", level: 85, label: "Good" },
  { name: "Tailwind CSS", level: 85, label: "Good" },
  { name: "JavaScript", level: 85, label: "Good" },
  { name: "TypeScript", level: 85, label: "Good" },
  { name: "Next.js", level: 85, label: "Good" },
  { name: "Vue.js", level: 85, label: "Good" },
  { name: "Nuxt.js", level: 85, label: "Good" },
  { name: "GitHub", level: 85, label: "Good" },
  { name: "AI Tools", level: 85, label: "Good" },
  { name: "Java", level: 65, label: "Medium" },
  { name: "PHP", level: 50, label: "Medium" },
  { name: "Laravel", level: 50, label: "Medium" },
  { name: "MySQL", level: 50, label: "Medium" },
  { name: "WordPress", level: 60, label: "Medium" },
];

const education = [
  {
    date: "Mar 2017 — 2021",
    title: "Information Technology",
    school: "University Of Cambodia · Graduated",
  },
  {
    date: "2014 — 2017",
    title: "High School",
    school: "Nhim Vanda Pearang · Graduated",
  },
  {
    date: "2011 — 2014",
    title: "Secondary School",
    school: "Nhim Vanda Pearang · Graduated",
  },
  {
    date: "2006 — 2011",
    title: "Primary School",
    school: "Kang · Graduated",
  },
];

const toggleProject = (key: keyof typeof projectsOpen.value) => {
  projectsOpen.value[key] = !projectsOpen.value[key];
};

const scrollTo = (id: string) => {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>
<style scoped>
.hero {
  min-height: calc(100vh - 72px);
}
.hero-content {
  max-width: 720px;
}
.about-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1.5fr;
}
.contact-links {
  display: grid;
  gap: 1rem;
}
.project-details {
  display: none;
  margin-top: 1rem;
}
.project-details.is-open {
  display: block;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}
.project-tags span {
  background: rgba(34, 197, 94, 0.1);
  color: var(--text-secondary);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
}
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
