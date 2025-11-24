
# **VYNE – AI Website Builder**

An **AI-powered website builder** that converts prompts into full stack website and deploy it too.
Built with **Next.js**, **Prisma**, **Gemini 2.5 Pro**, **Vercel AI SDK** and deployed on **Vercel**.

---

## 🚀 Getting Started

### **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the app.
Edit `app/page.tsx` — the page auto-updates as you modify the code.

---

## Overview

### **Problem**

Founders and developers often spend months coding before validating whether users even care.
**VYNE** eliminates that delay — it lets anyone instantly bring an idea to life with **real, editable code** and a **live AI-powered builder**, so you can **test, iterate, and validate** concepts early.

---

## 🏗️ System Architecture

VYNE integrates multiple layers for a seamless AI-driven experience:

| Layer              | Technology                     | Description                                                       |
| ------------------ | ------------------------------ | ----------------------------------------------------------------- |
| **Frontend**       | Next.js                        | Modern fullstack framework for UI + API routes                    |
| **Backend**        | Next.js API Routes             | Handles authentication, AI requests, and CRUD operations          |
| **AI Engine**      | Gemini 2.5 Pro + Vercel AI SDK | Generates website structure, components, and content from prompts |
| **Database**       | Neon (PostgreSQL) + Prisma ORM | Efficient schema modeling and database interaction                |
| **Authentication** | JWT                            | Secure token-based session management                             |
| **Hosting**        | Vercel                         | Scalable deployment for frontend and backend                      |

---

## ⚙️ Key Features

* 🔐 **Authentication & Authorization** — Secure JWT-based user sessions
* 🤖 **AI Website Generation** — Generate complete, responsive websites from natural language prompts
* 🌐 **Hosting Integration** — Deploy instantly with Cloudflare + automatic domain configuration
* 👥 **Community Features** — Search, sort, filter, and paginate user-created projects
* 🧭 **Dynamic Routing** — Multi-page navigation and routing support
* 🗂️ **CRUD Operations** — Full Create, Read, Update, Delete support via RESTful APIs
* 💾 **Persistent Storage** — Data managed via Prisma ORM and Neon DB

---

## 🧩 Tech Stack

| Category               | Tools                                    |
| ---------------------- | ---------------------------------------- |
| **Frontend + Backend** | Next.js                                  |
| **AI Layer**           | Gemini 2.5 Pro, LangChain, Vercel AI SDK |
| **Database**           | Neon (PostgreSQL) via Prisma ORM         |
| **Authentication**     | JWT                                      |
| **Hosting**            | Vercel                                   |

---
