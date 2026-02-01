# 🌍 Smart News Aggregator

A modern news application that bridges an external News API with a custom logic layer managed via Sanity CMS. The app dynamically classifies articles into topics and filters them based on rules defined in the cloud.

---

## 🚀 Key Features

- **Dynamic Configuration:** Allowed news sources and topic definitions are managed entirely via **Sanity CMS**.
- **Smart Classification:** An internal logic layer analyzes article titles and descriptions to assign topics based on CMS-defined keywords.
- **Advanced Filtering:** Filter news by source, search by keywords, or navigate through custom topics.
- **Performance First:** Used **TanStack Query** for efficient data fetching, caching, and state management.
- **Modern UI/UX:** Built with **Tailwind CSS** and **shadcn/ui**, featuring skeleton screens and responsive layouts.
- **Detailed View:** Dedicated pages for each article with deep linking.

---

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **State & Data:** TanStack Query (React Query), Axios
- **Styling:** Tailwind CSS, shadcn/ui, Lucide Icons
- **CMS:** Sanity.io (GROQ queries)
- **API:** NewsAPI.org

---

## ⚙️ Architecture & Logic

The application follows a **Feature-Based Architecture**. The core value lies in the "Logic Bridge":

1.  **Fetch Config:** On load, the app fetches "Allowed Sources" and "Topic Keywords" from Sanity.
2.  **Fetch News:** The app requests data from News API, strictly limiting it to the sources allowed in the CMS.
3.  **Process & Classify:** Every article is passed through a utility function that matches its content against the keyword list to determine its category (e.g., _Business_, _Tech_, _Politics_).

---

## 🚦 Getting Started

### Prerequisites

1.  **News API Key:** Get one at [newsapi.org](https://newsapi.org/).
2.  **Sanity Project:** Ensure your Sanity Studio is deployed or running locally.
