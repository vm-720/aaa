# Conversion Review: Membership, Join, Travel, Insurance

Source: westerncentralnyaaa.com (AAA Western & Central New York). The live site was blocked from the build environment, so this review is based on the site's search-indexed content plus screenshots of the live join page supplied by the client (prices: Basic $65, Plus $105, Premier $140, plus a $20 enrollment fee; the "$388 for one 100-mile tow" claim; Plus benefits).

---

## 1. Membership

**Goal:** Turn prospects into paying members by moving them to Join. Secondary goal: send existing members to renew or manage their membership.

**What holds it back today**
- It leads with a feature list (Basic / Plus / Premier) and gives no reason to care. Value stays abstract until someone is stranded.
- Three tiers that look alike, with no guidance, cause choice paralysis.
- Prices are hidden behind a ZIP code, so there's no anchor at all.
- Member tasks (renew, card, terms) sit alongside the prospect pitch and pull attention away from it.

**What changed**
| Change | Why it converts |
|---|---|
| Hero leads with the pain: *"One tow without AAA can cost more than a whole year with it."* The club's own **$388 for a 100-mile tow** figure moves from buried body copy into a hero card: $388 vs $0, and 29¢/day for Plus. | Loss framing converts better than a benefit list. |
| **Breakdown math calculator:** visitors tap in jumps, flats, lockouts and tows. It shows live savings and recommends a tier. Starts prefilled so the number isn't $0. | Personal, concrete ROI. Interacting with it builds commitment. |
| **3-question plan finder** (distance, vehicle age, priority) that auto-advances, then gives one recommendation with a deep link to `join.html?plan=…`. | Removes the choice problem and ends in a single CTA. |
| Plan cards show **cents per day**, have a yearly/monthly toggle, and carry "Recommended for you" after the quiz. | Price anchoring. Monthly lowers the barrier to entry. |
| FAQ rewritten around objections ("I'm stuck *now*", "covers me or the car?", household, monthly, upgrade). | Answers the things that make people hesitate. |
| Member tasks moved to a slim top bar. Sticky mobile CTA follows the recommended plan. | One goal per page. |

## 2. Join

**Goal:** Complete enrollment with as little drop-off as possible.

**What the live page does today** (from screenshots)
- Full-width lifestyle photo, then a card: *"Membership pays for itself every year."*
- The strongest proof point (**one 100-mile tow = $388 without AAA, members get 4 free tows**) is buried mid-paragraph in light grey body text.
- **Join Now** and **Gift a Membership** are equal-weight outlined buttons. Neither stands out, and gifting competes with the main action.
- Tiers are **tabs**, so only one plan's benefits show at a time. Comparing means clicking back and forth. Plus defaults to "Best Value" (good).
- Benefits read *"All AAA Basic features, and…"*, which makes visitors remember what Basic includes.
- The **$20 enrollment fee** sits under the price with a red "+", so it reads like a penalty.
- **Add household members** and **Add RV/Motorcycle** toggles show no price, and the total doesn't update visibly before checkout.
- The CTA ("GO PLUS") is vague about what happens next. The header gives Join and Renew equal weight.

**What changed**
| Change | Why it converts |
|---|---|
| Clear 3-step flow (Plan → Your info → Payment) with a step indicator and "about 2 minutes" promise. | Visible progress cuts abandonment. |
| Plan **preselected from the URL** (from the Membership calculator or quiz). | Carries the decision forward. Nothing to choose twice. |
| **Live order summary** (sticky on desktop, collapsible on mobile) with enrollment fee, associates and a monthly breakdown. | No price shock. Builds trust. |
| One-click **"+ Add household member"** with the price shown inline, framed for teen drivers and college students. | Raises average order value. |
| **"I need roadside help right now"** fast path, with the service fee disclosed. | Captures the highest-intent visitors (people stranded right now). |
| Monthly vs yearly at payment, auto-renew on by default, ZIP territory soft check. | Lower upfront cost and better retention. |
| **Draft autosave** (localStorage) and a "Prefer to join by phone?" fallback. | Recovers people who leave and people who'd rather call. |
| **Gift built into the flow** ("🎁 This is a gift" toggle → purchaser details, delivery date, message). On Membership, gifting is a quiet text link (`join.html?gift=1`) instead of a competing button. | Keeps gifting available without splitting attention at the main CTA. |
| **RV & Motorcycle add-on** shown with its price, turned off for Basic ("Available with Plus or Premier"), and added to the live total. | No hidden costs, and an upsell visitors can see. |
| Every plan's tow benefit shown side by side on the plan tiles. Enrollment fee shown as a normal line item in the summary, not a red "+". | Easy comparison and no penalty framing. |
| Specific CTA copy: "Join for $125" / "Send gift for $155". | Visitors know exactly what happens and what it costs. |
| Success screen with a digital card preview and cross-sell to an insurance quote. | Turns the thank-you page into the next conversion. |

## 3. Travel

**Goal:** Generate qualified leads (consult requests) for AAA travel advisors. Secondary goal: send people to quick services (IDP, passport photos, discounts).

**What holds it back today**
- Reads like a brochure or catalog. Browsing replaces acting.
- No answer to "why not just book online myself?"
- Quick-service links compete with the main goal.

**What changed**
| Change | Why it converts |
|---|---|
| **The lead form is the hero:** a 5-step "Trip Builder" (type → who → when → budget → contact). Single-tap answers auto-advance. Personal info is asked last. | Low-friction start. By step 5 visitors have put in effort and want to finish. |
| A recap line ("Couple · Europe tour · Summer · ~$3,000/person") right before the contact fields. | Shows the request is personal and worth sending. |
| **Inspiration cards prefill the builder** ("Plan this trip →"). | Turns browsing into leads. |
| **AAA vs booking site** comparison table. | Handles the main objection directly. |
| Preferred contact method (call, text, email) and a "within 1 business day" promise. | Lowers anxiety about being called. |
| Non-member submissions get a membership cross-sell on the success screen. | Feeds the membership funnel. |
| Quick services moved to a pill row near the bottom. | Keeps them reachable without competing with the main CTA. |

## 4. Insurance

**Goal:** Generate quote requests (online or by phone at (888) 671-7044).

**What holds it back today**
- Generic "get a quote" positioning. It doesn't explain why AAA instead of going direct to a carrier.
- The agency's biggest advantage (it's **independent and multi-carrier**) is buried in fine print.
- Each product sends people down a separate path.

**What changed**
| Change | Why it converts |
|---|---|
| New positioning: **"Stop shopping for insurance. We'll shop for you."** | Leads with the real differentiator. |
| **3-step quote form in the hero**: multi-select lines → situation → contact. A bundle nudge ("up to 25%") appears when Auto plus Home/Renters is picked. | Starts the quote above the fold and steers people to the higher-value bundle. |
| "One form in → best rate out" diagram plus the carrier logo strip. | Makes the multi-carrier advantage visible. |
| Product tiles **preselect the quote form** instead of opening separate pages. Supports `?line=` deep links. | Fewer clicks, one funnel. |
| "Switching is easy" section (renewal timing, paperwork, claims advocacy). | Inertia is the #1 reason people don't switch. |
| Callback time slots, a phone option everywhere, and a sticky bar with a call button. | Insurance buyers often want to talk to someone. |

---

## Cross-page system
- Pages link into each other with intent (calculator → join?plan, join success → insurance, travel/insurance success → membership for non-members).
- Every CTA carries `data-track` and pushes to `dataLayer`. Step and completion events (`join_step`, `finder_complete`, `lead_submit`, and so on) are ready for funnel reporting.
- Sticky mobile CTA on each page, shown once the primary CTA scrolls away.

## Before launch (required)
1. **Prices:** plan dues ($65 / $105 / $140), the $20 enrollment fee and the $388 tow figure come from the live join page. `associatePrice` and `rvAddon` in `assets/app.js` are still **placeholders**. If dues vary by ZIP, wire `getPlanPrice()` to the rating service.
2. **Endpoints:** set `CONFIG.endpoints.join / travelLead / insuranceLead`. Until then the forms run in demo mode (console only). Join must go through the club's PCI-compliant payment processor. Card fields are intentionally not submitted.
3. **Testimonials and carrier list** are illustrative. Replace them with verified reviews and the current carrier list.
4. Out-of-pocket cost estimates in the calculator should be checked against regional tow-rate data.

## Suggested A/B tests
- Membership hero: loss-framed headline vs benefit headline.
- Calculator prefilled vs empty.
- Join: auto-renew default on vs off (watch complaint rate).
- Travel: form in hero vs inspiration-first.
- Insurance: "We'll shop for you" vs "Save up to 25%" headline.
