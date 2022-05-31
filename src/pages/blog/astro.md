---
title: How I rebuilt my site in Astro for speed
desc: Learn why I switched from Next.js to Astro, how I did it, and what I did to make my site faster.
date: 2022-05-31
layout: ../../layouts/BlogLayout.astro
---
# Why?
I stumbled upon a new framework recently called [Astro](https://astro.build). Being interested in front-end, it was the perfect excuse to rebuild my site in the latest new framework 🤡. However, there were several reasons why it made sense. For context, my site was built using Next.js [previously](https://jyao-me-q5ih6bj3o-jeffreydyao.vercel.app).
1. **Performance**. Astro builds to static HTML and CSS with no JavaScript by default. It takes an '[islands](https://jasonformat.com/islands-architecture/)' approach to web architecture, _partially hydrating_ pockets of interactivity (think image carousels) where necessary compared to the all-or-nothing approach taken by Next.js. The result is a zippy site, something I wanted to build for as I'm conscious about performance and the fact that websites aren't always loaded over fast connections. **TL;DR: Astro is screaming fast.**
2. **In-built Markdown support**. Markdown is a first-class citizen in Astro. Astro turns Markdown files into a page automatically, allowing you to customise styling through the definition of a layout component. It also has smart features like allowing you to access frontmatter as props, and shipping with built-in syntax highlighting + more. **TL;DR: More time spent writing.**
3. **Excellent developer experience.** Astro is intuitive to work with - you wrap pages in [Layouts](https://docs.astro.build/en/core-concepts/layouts/), and abstract reused elements away into [Components](https://docs.astro.build/en/core-concepts/astro-components/) which render to HTML. Astro comes with built-in integrations such as Tailwind, React and sitemap generation that you can toggle during setup and at any time. **TL;DR: Less time spent installing packages and configuring.**

The first iteration of my site was slapped together before uni started, with minimal front-end experience. With more experience under my belt after a term, from developing at UNSW CSESoc to personal projects, it was time to rebuild my site so I could maintain it easily in the coming trimesters to come.

# How I did it
To begin with, I defined some engineering objectives:
- Performant
- KISS: 
- Flexible
- Beautiful


# Making my site fast
## Image optimisation

## Subsetting and self-hosting fonts

# Making my site easier to maintain