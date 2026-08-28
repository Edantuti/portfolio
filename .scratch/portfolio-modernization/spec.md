Status: ready-for-agent
Type: task

## Problem Statement

The portfolio site is currently running on a framework version that is behind the stable Next.js ecosystem, and the project has not yet been updated to the supported React 19 and Next.js 16 stack. At the same time, the Experience section does not yet present the candidate's internship clearly enough for a modern portfolio, which makes the site feel incomplete from a hiring perspective. The user wants a portfolio that is both current and more reflective of recent professional experience without a major redesign.

## Solution

Upgrade the application to the latest stable Next.js version with the compatible React 19 runtime and supported linting and type dependencies, then add the internship entry to the existing Experience section in the same style and tone as the rest of the portfolio. This keeps the site modern and production-ready while preserving the current design language and layout structure.

## User Stories

1. As a recruiter, I want the site to run on the current stable Next.js stack, so that I can trust the project is maintained and up to date.
2. As a hiring manager, I want to see recent internship work clearly listed, so that I can understand the candidate's current experience.
3. As a portfolio owner, I want the design to remain familiar and concise, so that the update feels polished rather than disruptive.
4. As a developer, I want dependency compatibility resolved before content changes are finalized, so that the site remains stable and buildable.
5. As a visitor, I want the Experience section to read clearly and professionally, so that I can quickly understand the candidate's work history.
6. As a job applicant, I want the internship entry to show technical responsibility and impact, so that my application reads as substantive and credible.
7. As a maintainer, I want the app to build successfully after the framework upgrade, so that future changes are easier to ship safely.
8. As a developer, I want the project to use aligned React and Next.js versions, so that compatibility issues and type mismatches do not create preventable churn.
9. As a user, I want the site to remain responsive and readable, so that the page still feels polished on smaller screens.
10. As a reviewer, I want the content to be concise and specific, so that each entry communicates value without unnecessary detail.
11. As a candidate, I want the internship role to appear in the same part of the page as the rest of my experience, so that the portfolio reads like a coherent narrative.
12. As a maintainer, I want the upgrade to be intentionally minimal and scoped, so that the risk of unrelated regressions stays low.
13. As a visitor, I want the experience details to be easy to scan, so that I can assess strengths quickly.
14. As a future contributor, I want the app's dependency versions to be modern and explicit, so that setup and onboarding are reproducible.
15. As a user, I want the portfolio to look active and current, so that it reflects a recent ongoing update rather than a stale project snapshot.
16. As a developer, I want the current page structure to stay intact, so that the upgrade remains low-effort and consistent with the repo's size and goals.
17. As a recruiter, I want the internship entry to demonstrate engineering breadth, so that I can evaluate the candidate's range of technical skills.
18. As a portfolio owner, I want the update to remain lightweight and intentional, so that I do not pay a high cost for a broader redesign.
19. As a reviewer, I want the integration and optimization work to be described concretely, so that the portfolio presents the work as real engineering value.
20. As a user, I want a page that clearly distinguishes between experience, achievements, and projects, so that the information hierarchy remains readable.

## Implementation Decisions

- The app will be upgraded at the dependency level to the latest stable Next.js version and the compatible React 19 release, keeping the current app architecture intact.
- The framework upgrade includes aligning the lint and type packages to their supported versions in the same dependency set so the project stays buildable and consistent.
- The page continues to use the existing portfolio layout and section conventions; no full redesign or new page architecture is introduced as part of this work.
- The internship content will be added directly into the existing Experience section, preserving the current styling system and section ordering.
- The internship entry will include the role title, company name, time period, and a brief set of concrete work bullets that explain the scope of the role.
- The responsibilities will be written in a direct, professional voice and will emphasize the actual work that was completed during the internship: system integration, query optimization, and testing improvements.
- The chosen seam for the work is the homepage content and app dependency manifest: one high-level seam that covers both the portfolio narrative and the framework compatibility update without introducing unnecessary abstraction.
- The app will be validated with a production build to confirm the upgrade and content modifications work together successfully.
- The project is being treated as a small portfolio app, so the preferred implementation is a minimal, compatibility-driven upgrade plus a focused content improvement rather than a broader refactor.
- The content will stay aligned with the candidate's known experience and will not introduce new claims beyond the confirmed internship description.
- The work will preserve the existing semantic structure of the page: intro section, experience, achievements, projects, and footer links, with the internship data inserted into the Experience list.
- The upgrade is expected to resolve likely compatibility issues without changing the visual identity of the page.

## Testing Decisions

- The primary verification is the production build, because the highest-risk behavior in this project is dependency compatibility and successful rendering of the app rather than isolated logic functions.
- The test surface is the homepage as a whole: if the app builds and the page renders without errors, the feature is considered successful for this repo.
- Good tests for this sort of change focus on external behavior: whether the app assembles correctly and whether the content is visible in the intended section, rather than verifying implementation details like internal CSS class names.
- The project already has no deep test harness for content-heavy UI, so the build and render path is the relevant prior art for validating this change.
- This means the upgrade should be validated through the highest seam available: the compiled app output, not a large set of unit-level tests for individual wrappers.

## Out of Scope

- A full portfolio redesign.
- Major architectural refactoring beyond the dependency and section-content update.
- New pages, blog features, or CMS-driven content architecture.
- Deployment or hosting configuration changes.
- Additional portfolio sections beyond the internship addition.

## Further Notes

- The repo is intentionally small and content driven, so the best implementation is a narrow, high-confidence update rather than a broad rewrite.
- The framework upgrade was required because the app was behind the current stable ecosystem and the dependency set needed to be aligned to a supported Next.js/React configuration.
- The internship addition is scoped to the current Experience block to keep the page polished, professional, and consistent with the existing content style.
- The project is considered successful when the app builds cleanly and the experience narrative reflects recent work without altering the overall portfolio direction.
