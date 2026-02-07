# The Perfect Guide to Identifying AI-Generated Content (Manual Detection)

*Synthesized from expert resources including Undetectable.ai, The Sustainable Agency, and Detector Checker.*

This guide provides a rigorous, human-centric methodology for spotting AI-generated text without relying on software detectors, which can be unreliable. Use these criteria to evaluate any piece of content.

## 1. Language Patterns & Tone (The "Vibe" Check)

AI models are trained to be "safe" and "fluent," often resulting in a specific, unrecognizable style.

- **[ ] The "Too Perfect" Pollish**: AI text is often grammatically flawless but rhythmically monotonous. It lacks the natural ebb and flow of human speech (short sentences mixed with long ones).
- **[ ] Lack of Personality/Voice**: Does the text feel distinct? Humans inject wit, sarcasm, controversial opinions, or personal anecdotes. AI defaults to a neutral, corporate-safe tone.
- **[ ] Repetitive & Formulaic Phrasing**: 
    - Look for sentence structures that repeat (e.g., "It is important to...", "Crucially, we must...").
    - Watch for "echoing" where the same idea is restated 3 times in slightly different words to fill space.
- **[ ] The "Transition Overload"**: AI loves transition words to sound cohesive. Excessive use of:
    - *Furthermore, Moreover, Additionally, Consequently, In conclusion, In today's world...*
- **[ ] Specific "Tell" Words**: AI often overuses specific vocabulary:
    - *Delve, Align, Tapestry, Seamless, Landscape, Testament, Foster, Leverage, Transformative.*
- **[ ] Lack of Slang or Idioms**: Unless prompted, AI rarely uses casual slang, regional dialects, or natural idioms correctly.

## 2. Content Depth & Specificity (The "Soul" Check)

AI lacks real-world experience. It hallucinates plausibility but fails at reality.

- **[ ] Superficial Expertise**: Does the content stay "high level"? 
    - *AI:* "Exercise is good for health."
    - *Human:* "That burning feeling in your quads on the final rep is where the growth happens."
- **[ ] Lack of Contextual Nuance**: AI technically answers the prompt but often misses the *intent* or the "real question" a user has.
- **[ ] Generic Recommendations**: In "How-to" guides, look for vague advice like "Plan carefully" or "Consult an expert" without breathable, actionable steps.
- **[ ] "Hallucinated" Facts**: 
    - Check for facts that sound plausible but are false.
    - Look for "orphaned stats" (numbers without sources).
    - AI may invent studies, names, or even non-existent products.

## 3. Structural Tells

- **[ ] The "Conclusion" Label**: AI often explicitly labels the final paragraph "Conclusion" or starts it with "In conclusion," summarizing everything that was just said without adding new insight.
- **[ ] Breathless Lists**: Over-reliance on bullet points to structure thoughts, often resulting in "PowerPoint-like" articles.
- **[ ] Capitalized Headers**: A tendency to Capitalize Every Single Word In A Header regardless of style guides.
- **[ ] Double Adjectives**: Using two adjectives where one would do (e.g., "comprehensive and detailed," "vital and essential").

## 4. The "Specific War Story" Test (The Ultimate Human Proof)

**The most reliable detector:** specific, painful, or highly detailed real-world examples.
- **Human:** "I remember waiting 3 days for the vendor to fax the B-9021 batch record while the FDA auditor sat in the lobby tapping his foot."
- **AI:** "Delays in document retrieval can cause compliance issues and auditory friction."

---

# Applying This Guide to: CannyRMS Page

**Content Analyzed:** `app/solutions/product/rms/page.tsx`

### Evaluation Against Criteria:

| Criteria | Verdict | Evidence from Page |
| :--- | :--- | :--- |
| **Tone & Voice** | **Human** | Uses urgent, high-stakes language ("Nightmare Scenarios", "One Missing File"). It doesn't sound neutral; it sounds urgent and warning. |
| **Specific Vocab** | **Human** | Uses niche regulatory terms correctly: *Form 483, CAG Audit, BMR tampering, MHRA Warning Letters, Spoliation Sanctions*. These are not generic "AI buzzwords." |
| **Depth** | **Human** | Extremely high specificity. *Example:* "Search #B-9021... Located: Rack 4, Shelf 2" vs "Searching warehouse... calling vendor...". |
| **Hallucinations** | **Passed** | Citations are real and high-quality (FDA Part 11, RBI Circular 9862). |
| **Structure** | **Mixed** | Uses lists heavily (common in landing pages), but the "Nightmare Scenarios" and "Virtual Audit Simulator" sections are structurally unique and creative, not standard AI blocks. |

### Final Conclusion for RMS Page
**Status:** ✅ **Human Generated / Expert Written**
The content passes the "Specific War Story" test with flying colors. The mention of specific audit forms (Form 483), specific delay consequences ("paused batch releases"), and the "Virtual Audit Simulator" narrative strongly indicates authorship by someone with deep domain expertise in physical records management, not a Large Language Model.
