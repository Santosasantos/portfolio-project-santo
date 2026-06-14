/**
 * Deep-dive context per project, distilled from GitHub repo analysis
 * (READMEs, the epms JHipster domain model, and language statistics).
 * Keyed by project id from portfolio-data; consumed by the chatbot when a
 * visitor asks about a specific project. Refresh by re-reading the repos.
 * Last analyzed: June 2026.
 */
export const projectDetails: Record<string, string> = {
  nexuspay: [
    "Deep dive (from the GitHub repo):",
    "> Architecture: modular monolith with an event-driven core — TransactionService validates idempotency, takes pessimistic write locks on both wallets, commits within a strict transaction boundary, then publishes a TransactionEvent to Kafka; Notification and Analytics services consume independently.",
    "> Security: Spring Security with a stateless JWT lifecycle, active token blacklisting, and RBAC separating consumer and admin portals.",
    "> Reliability: Resilience4j rate limiting on critical endpoints; Flyway migrations manage schemas for ledgers, market data, and user vaults.",
    "> Full stack: Java 17 + Spring Boot backend; React/Next.js + TypeScript + Tailwind analytics dashboard (Recharts); PostgreSQL for core data, Redis for distributed locks and caching; Docker Compose infrastructure.",
  ].join("\n"),

  "360-assessment": [
    "Deep dive (from the GitHub repo):",
    "> Genuinely full-stack: the codebase is ~58% TypeScript/Angular, ~22% Java, ~18% HTML — a JHipster-generated enterprise app.",
    "> Domain model (three-sixty.jdl): Employee, Feedback, FeedbackResponder, FeedbackDetails, rating scales, and skill-development entities with validated fields and pagination/infinite-scroll on heavy lists.",
    "> Feedback lifecycle state machine: NEW → SENT_TO_SUPERVISOR → APPROVED/REJECTED → PENDING_FOR_ASSESSMENT → COMPLETED.",
    "> 360° coverage via responder categories: SELF, SUPERVISOR, PEER, SUPERVISEE, and external STAKEHOLDER reviews.",
  ].join("\n"),

  endectic: [
    "Deep dive (from the GitHub repo):",
    "> 100% Java desktop application (Swing) for encrypted peer-to-peer messaging over raw sockets.",
    "> RSA 2048-bit end-to-end encryption with digital-signature verification and a zero-knowledge message design — the server never sees plaintext.",
    "> Sustains ~50ms message latency.",
  ].join("\n"),

  massier: [
    "Deep dive (from the GitHub repo):",
    "> PHP/MySQL web application (~80% PHP) automating hostel/mess operations for 200+ residents.",
    "> Feature set: access control, meal requests, a daily meal-count calculator, money alerts, notice board, utility cost tracking, monthly expense summaries with PDF analysis reports, birthday notices, and an AJAX-powered chat module.",
  ].join("\n"),
}
