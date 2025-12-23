Midway Music Hall

Custom Website, Seating System, and Admin Platform

Client: Midway Music Hall, Midway NC
Project Type: Full website rebuild and custom venue operations system
Timeline: November–December 2025
Launch: December 1, 2025

⸻

Project Overview

Midway Music Hall needed more than a visual refresh. The venue required a dependable, long-term system that reflected how shows are actually scheduled, how reserved seating is handled in practice, and how staff communicate with customers day to day—without relying on third-party ticketing platforms or recurring SaaS fees.

JAMARQ delivered a fully custom platform combining a public-facing website with a secure admin workspace built specifically for venue operations. The system supports event scheduling, recurring series management, interactive seating layouts, reservation requests, media handling, and automated notifications, all deployed on shared hosting and validated under live use.

This was not a template site. It was an operational system designed to be trusted.

⸻

The Challenge

The previous website was informational only. As event volume increased, several operational gaps became increasingly costly:
	•	No centralized event management
	•	No digital representation of reserved seating
	•	Manual handling of seat requests via phone and email
	•	No admin interface for staff
	•	No audit trail or request history
	•	High risk of seat conflicts and human error
	•	Limited performance and accessibility safeguards

Staff had to mentally track availability, copy details between systems, and answer the same questions repeatedly. Customers had no clear visibility into seating before reaching out.

⸻

Objectives
	•	Create a clear, modern public website
	•	Centralize event scheduling and visibility
	•	Support recurring events without duplication
	•	Introduce an intuitive reserved seating request flow
	•	Prevent seat conflicts through enforceable logic
	•	Protect existing reservations from accidental admin actions
	•	Automate staff notifications
	•	Provide a secure admin interface for daily operations
	•	Optimize performance for shared hosting
	•	Establish a clean SEO and accessibility foundation
	•	Maintain full ownership of code and data

⸻

Approach

The system was designed around real venue workflows, not generic ticketing assumptions.

Rather than forcing the venue into a third-party model, the platform mirrors how Midway Music Hall already operates: staff-approved reservations, flexible seating layouts, recurring shows, and human judgment where it matters.

Special care was taken to design guardrails, not just features. Admin tools were built to prevent accidental data loss, protect hours of manual seat entry, and make recovery possible if something ever goes wrong.

Reliability, clarity, and predictability were prioritized over clever automation.

⸻

The Solution

Public Website
	•	React-based single-page application
	•	Mobile-first layout with accessible navigation
	•	Event listings with upcoming, recurring, and archived views
	•	Event detail pages with optional interactive seating layouts
	•	Category-aware displays (including recurring series and Beach Bands events)
	•	Progressive enhancement with static fallbacks for bots and no-JavaScript clients

⸻

Custom Seating System
	•	Reusable seating layout templates
	•	Versioned seating layouts per event
	•	Interactive seat selection with availability indicators
	•	Time-limited seat holds to prevent conflicts
	•	Automatic expiration and release of unconfirmed seats
	•	Staff approval, denial, and manual reservation tools

Safety & Recovery Features
	•	Seating visibility toggle that hides UI without deleting data
	•	Guarded layout changes with explicit admin confirmation
	•	Automatic snapshots of reserved, pending, and held seats before any destructive action
	•	Admin-accessible snapshot preview and restore tools
	•	Guaranteed preservation of customer reservations unless an admin explicitly confirms a change

⸻

Recurring Events & Scheduling
	•	Series “master” entries for recurring events
	•	Admin-editable recurring metadata (Typical Schedule, summaries, footer notes)
	•	Series masters editable without requiring dates
	•	Individual occurrences still enforce full date/time validation
	•	Public event cards reflect recurring series metadata consistently

This allows staff to manage weekly or monthly events cleanly without duplication or workarounds.

⸻

Category-Aware Admin Platform
	•	Secure staff login with idle and hard session timeouts
	•	Centralized event creation and management
	•	Category-aware editor that adapts to event type
	•	Recurring events show recurring controls
	•	Seating controls only appear when seating is enabled
	•	Category-specific panels appear without affecting unrelated data
	•	Form state preservation when switching categories
	•	Validation rules that change intelligently based on context

Admins see only what matters for the event they are editing, without risking hidden data loss.

⸻

Media & Email Automation
	•	Media upload and management system with optimization metadata
	•	Automated staff notifications for seat requests and submissions
	•	Production-only safeguards to prevent test spam
	•	Domain-authenticated delivery via SendGrid
	•	Reply-to support for direct staff responses

⸻

Technical Stack
	•	React 18 with Tailwind CSS
	•	PHP 8.1 backend with JSON APIs
	•	MySQL database with transactional reservation logic
	•	Cloudflare and Apache deployment on shared hosting

⸻

Results

Live Validation
	•	First live seat request processed on launch day
	•	Automated notifications delivered successfully
	•	Seat conflict prevention confirmed in production
	•	Recurring event workflows validated by staff
	•	Seating guardrails tested without data loss

⸻

Performance & Reliability
	•	Fast load times on shared hosting
	•	Stable layouts with no visual shifting
	•	Strong desktop and mobile performance
	•	Predictable behavior under concurrent seat requests
	•	Graceful fallbacks for missing media or partial data

⸻

Key Takeaways
	•	Custom systems outperform generic platforms when aligned to real workflows
	•	Reserved seating requires guardrails, not just interfaces
	•	Admin tooling prevents more errors than automation alone
	•	Data recovery paths are as important as primary features
	•	Ownership eliminates long-term platform risk