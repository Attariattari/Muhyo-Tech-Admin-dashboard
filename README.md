# Muhyo Tech — Dedicated Admin Console & Management System

> **Standalone Administrative Control Center Decoupled from the Muhyo Tech Elite Portfolio Architecture.**

---

## 📌 Repository Overview

**Muhyo Tech Admin Console** is a specialized, production-ready, standalone Next.js 15 administrative management system. It provides complete operational control over all content, services, portfolio case studies, user management, and AI-assisted automation pipelines for **Muhyo Tech**.

### 🔗 Parent Project Relationship
- **Parent Repository**: `Muhyo Tech Elite Portfolio System`
- **Architecture Type**: Decoupled Operations Node
- **Purpose of Separation**: Decoupling the administrative suite from the public-facing portfolio eliminates public client overhead, isolates administrative API endpoints, improves security boundaries, and provides zero-latency content management for platform administrators.

---

## ✨ Key Features & Capability Modules

### 1. 📝 Editorial & AI Content Pipeline
- **Blog Content Management**: Full lifecycle management (Create, Read, Update, Delete) for editorial articles, category tagging, read-time calculation, and canonical slug assignment.
- **AI Editorial Planner & Automation**: Cluster-aware topic queues, pillar vs. supporting article generator powered by Gemini AI API, quality audit scoring, and automatic image alt-text generation.
- **Image Optimization**: Automated Cloudinary media uploads with intelligent face-centered AI cropping (`g_face`) for author portraits and 16:9 aspect ratios for cover visuals.

### 2. 💼 Services & Portfolio Case Studies CMS
- **Service Catalog Manager**: Manage service offerings, technical feature breakdowns, delivery processes, and service-to-article interlinking.
- **Project Showcase Controller**: Update project details, stack tags, client testimonials, live preview links, and interactive image galleries.

### 3. 👥 User Management & Access Security
- **Identity & Authority**: Role-based access control (RBAC), user approval queues, and immutable root super-admin protection.
- **Security & Audit Logs**: Real-time tracking of security events, client IP access logs, authentication attempt flags, and unauthorized access alerts.

### 4. 📬 Client Engagement & Lead Ingestion
- **Contact & Inquiries**: Centralized viewer for direct client inquiries, service requests, and project initiation messages.
- **Bookings & Subscriptions**: Track client consultation requests and manage newsletter subscribers with email notifications.

### 5. ⚙️ System Settings & Analytics
- **System Configuration**: Manage site-wide SEO defaults, social links, schema metadata, and third-party API integration keys.
- **Live Performance Telemetry**: Database connection health monitoring, index statuses, and visitor engagement summaries.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15+ (App Router) |
| **UI Library & Components** | React 19, Lucide Icons, Sonner Toasts |
| **Styling & Motion** | Tailwind CSS v4, Framer Motion |
| **Database & ORM** | MongoDB, Mongoose |
| **Media & Storage** | Cloudinary API, Multipart Upload Helper |
| **AI Integration** | Google Generative AI (Gemini 2.5/3.6 Flash) |
| **Security & Auth** | Jose JWT, BcryptJS, Custom Next.js Proxy/Middleware |

---

## 🚀 Quick Setup & Local Execution

### Prerequisites
- Node.js `v20.9.0` or higher
- MongoDB Database URI
- Cloudinary Credentials (Optional for image uploads)

### Installation Steps

1. **Clone & Navigate**:
   ```bash
   git clone <repository-url>
   cd "Muhyo Tech Admin dashboard"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Ensure `.env.local` or `.env` contains the required keys:
   ```env
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ROOT_SUPER_ADMIN_EMAIL=your_admin_email
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   ```

4. **Launch Development Console**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser. The application will route directly to the **Admin Dashboard**.

---

## 📄 License & Attribution

Copyright © 2026 **Muhyo Tech** — All Rights Reserved. Proprietary software built by **Pir Ghulam Muhyo Din**.
