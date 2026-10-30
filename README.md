# AAA WCNY: conversion redesign

Static prototypes for the four key pages on westerncentralnyaaa.com, rebuilt for conversion.

| Page | File | Core idea |
|---|---|---|
| Membership | `membership.html` | Breakdown-cost calculator + 3-question plan finder → deep link to Join |
| Join | `join.html` | 3-step checkout, plan preselected via `?plan=`, live summary, household upsell |
| Travel | `travel.html` | Trip Builder lead form as the hero; inspiration cards prefill it |
| Insurance | `insurance.html` | "We'll shop for you" multi-carrier quote form in the hero, bundle nudge |

Review, goals and rationale: [`docs/REVIEW.md`](docs/REVIEW.md)

Run locally: open `index.html`, or `python3 -m http.server` and visit http://localhost:8000.

Shared config (phones, endpoints, **placeholder prices**) lives in `assets/app.js`.

**Single-file previews:** `python3 scripts/build-preview.py` writes self-contained copies of each page to `preview/`, which you can open anywhere (email, phone, chat apps) without the `assets/` folder.
