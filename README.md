# HealthGen – Personalized Health Plan Generator

**HealthGen** is a modern, Apple.com-inspired single-page web application that helps users generate a tailored health plan based on their goals and activity level. Whether you're looking to lose weight, gain muscle, or maintain a balanced lifestyle — HealthGen delivers curated suggestions in a clean, minimal interface.

---

## 🚀 Features

- Responsive design with dropdown selections for quick interaction
- Live word counter for custom user inputs (limited to 100 words)
- Real-time validation and inline helpful feedback messages
- Testimonials and mock reviews to boost credibility and SEO
- Modular and clean code (HTML/CSS/JavaScript) suitable for scaling

---

## 🧠 Logic and Mechanism (JS Code)

The JavaScript in this project includes:

- **Input Validation:** Checks all fields for empty or suspicious inputs. Flags inappropriate entries with red borders and shake animation.
- **Custom Textarea Behavior:** The optional `textarea` for additional requests includes a character limit (100 words), mimicking Twitter-like feedback.
- **Plan Generator Logic:** A lightweight health algorithm selects diet/exercise recommendations based on:
  - Selected health goal
  - Chosen activity level
  - Optional additional info (used for fine-tuning responses)
- **Dynamic UI Feedback:** Shows error messages until correct input is entered. Messages automatically disappear once the user fixes their mistake or moves to another field.

---

## ✅ Requirements

No external libraries are required. Just clone and run:

- HTML5-compatible browser
- Internet connection (only for font/system icons if used)

---

## 📦 Setup

```bash
git clone https://github.com/yourusername/healthgen.git
cd healthgen
open index.html
