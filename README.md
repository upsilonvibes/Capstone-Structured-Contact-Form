# Structured Contact Form

A professional, accessible, and semantically structured contact form built with HTML5, CSS3, and JavaScript. This project focuses on client-side validation and a clean User Experience (UX).

## 🚀 Features

-   **Semantic HTML5:** Uses `<fieldset>`, `<legend>`, and `<label>` for maximum accessibility and screen-reader support.
-   **Client-Side Validation:** -   Required fields to prevent empty submissions.
    -   Minimum length requirements for names and messages.
    -   Regex patterns for phone number formatting (`123-456-7890`).
-   **Responsive Design:** Styled with CSS to be mobile-friendly and visually appealing.
-   **Dynamic Feedback:** JavaScript prevents default page reloads and provides a "Success" state upon submission.
-   **Separation of Concerns:** Organized into distinct `.html`, `.css`, and `.js` files.

## 🛠️ Tech Stack

-   **HTML5** - Structure and semantics
-   **CSS3** - Custom styling and focus states
-   **JavaScript** - DOM manipulation and event handling

## 📋 Requirements Met

- [x] Includes Full Name, Email, Phone, Subject, and Message fields.
- [x] Uses appropriate input types (`tel`, `email`, `select`).
- [x] Implements `required`, `minlength`, and `pattern` attributes.
- [x] Utilizes `<fieldset>` and `<legend>` for grouping.
- [x] Includes a clear submit button.

## 📸 Preview

> [!TIP]
> This form uses real-time validation styling. Inputs will highlight green when valid and red when a format error is detected!

## 📂 Project Structure

```text
.
├── index.html    # The skeleton and accessibility labels
├── style.css     # Modern UI and interaction effects
├── script.js    # Form handling logic and success state
└── README.md     # Project documentation
🧠 What I Learned
During this project, I deepened my understanding of the Document Object Model (DOM). By using event.preventDefault(), I learned how to intercept browser behavior to create a smoother, "single-page" feel for the user. I also practiced using Aria Attributes to ensure the form is usable for people with visual impairments.

👤 Author
GitHub: @percysmartanecdote168-droid (CF17)


---

### **How to add this to your project:**
 1.  Create a new file in your project folder named `README.md`.
 2.  Paste the content above into that file.
 3.  When you push to GitHub, this will automatically appear as a beautiful landing page for your repository.