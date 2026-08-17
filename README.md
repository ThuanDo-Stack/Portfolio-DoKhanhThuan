# My Static Portfolio

This is a modern, static portfolio built with plain HTML, CSS, and JavaScript. It does not require a backend or a build step to run.

## Features

- **Dark / Light Mode**: Save preferences in `localStorage`.
- **Project Filter**: Simple JS-based tagging to categorize projects.
- **Contact Form**: Uses Formspree (or Web3Forms) for a backend-less contact form.
- **Download CV**: A clear CTA button in the header.

## Folder Structure

```
my-portfolio/
│── index.html          # Trang chủ chính
│── assets/
│   ├── css/style.css   # Giao diện
│   ├── js/main.js      # Hiệu ứng, toggle theme, lọc dự án
│   ├── images/         # Ảnh đại diện, screenshot dự án
│   └── cv.pdf          # File CV đính kèm để tải về
└── README.md
```

## Setup & Deployment

1. **Images & PDF**: Place your avatar and project screenshots inside `assets/images/`. Place your CV PDF as `assets/cv.pdf`.
2. **Contact Form**: Create a free account at [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/) and replace the `action="https://formspree.io/f/YOUR_FORM_ID"` inside `index.html` with your actual endpoint URL.
3. **Deployment**: Upload this folder to GitHub and deploy using **GitHub Pages**, **Vercel**, or **Netlify** for free hosting.
