---
title: How I rebuilt my site in Astro for speed
desc: Learn why I switched from Next.js to Astro, how I did it, and what I did to make my site faster.
date: 2022-05-31
hero: /astro-hero.png
layout: ../../layouts/BlogLayout.astro
draft: true
---
# Why?
I stumbled upon a new framework recently called [Astro](https://astro.build). Being interested in front-end, it was the perfect excuse to rebuild my site in the latest new framework (🤡 ). However, there were several reasons why it made sense. For context, my site was built using Next.js [previously](https://jyao-me-q5ih6bj3o-jeffreydyao.vercel.app).
1. **Performance**. Astro builds to static HTML and CSS with no JavaScript by default. It takes an '[islands](https://jasonformat.com/islands-architecture/)' approach to web architecture, _partially hydrating_ pockets of interactivity (think image carousels) where necessary compared to the all-or-nothing approach taken by Next.js. The result is a zippy site, something I wanted to build for as I'm conscious about performance and the fact that websites aren't always loaded over fast connections. **TL;DR: Astro is screaming fast.**
2. **In-built Markdown support**. Markdown is a first-class citizen in Astro. Astro turns Markdown files into a page automatically, allowing you to customise styling through the definition of a layout component. It also has smart features like allowing you to access frontmatter as props, and shipping with built-in syntax highlighting + more. **TL;DR: More time spent writing.**
3. **Excellent developer experience.** Astro is intuitive to work with - you wrap pages in [Layouts](https://docs.astro.build/en/core-concepts/layouts/), and abstract reused elements away into [Components](https://docs.astro.build/en/core-concepts/astro-components/) which render to HTML. Astro comes with built-in integrations such as Tailwind, React and sitemap generation that you can toggle during setup and at any time. **TL;DR: Less time spent installing packages and configuring.**

The first iteration of my site was slapped together before uni started, with minimal front-end experience. With more experience under my belt after a term, from developing at UNSW CSESoc to personal projects, it was time to rebuild my site so I could maintain it easily in the coming trimesters to come.

# How I did it
## Defining engineering values
As I was starting from scratch, I defined several objectives which would drive the direction of my website. These objectives fall in line with my engineering philosophy.
- **Performant**: Beauty shouldn't come at the expense of performance. Not everyone has fast connections. My site should load fast and target 100 on all [Lighthouse metrics](https://developers.google.com/web/tools/lighthouse).
- **Simple**: Don't add additional complexity as it'll make it harder to maintain your website ([KISS](https://en.wikipedia.org/wiki/KISS_principle)). Only build for what you need now and add later. Reduce friction to creating content.
- **Beautiful**: Websites should be delightful to use. Obsessing over small details, such as transitions, gradients and drop shadows pay off, creating a cohesive, beautiful experience.

After that was done, I went off to the Figma canva!

## Designing in Figma
I prototyped my site in a [single Figma file](https://www.figma.com/file/BikvnEQenQQnuDw8YVH07b/Learning-Platform---Mockups?node-id=120%3A2), laying iterations and breakpoints out side-by-side. 

![Screenshot of this site's Figma canva](/astro-canva.png)

While I'd say I'm good at design, I'm not the best, so reading [Refactoring UI](https://www.refactoringui.com/) helped me glean some great tips to take things to the next level. Here're some tips I'd recommend for designing your next site:
- **When in doubt, start with too much whitespace, then reduce later.** Whitespace helps elements breathe. However, when designing we often only give the _minimum_ amount of whitespace to make things look good. It's easier to start with too much, then reduce later until we're happy.
- **Emphasise by de-emphasising.** To emphasise an element, try de-emphasising surrounding elements by adjusting their opacity or softening their colors. For example, in the navbar of this site the active section link is bold and the other links are gray + regular weight.
- **Size isn't everything.** It's easy to fall into the trap of communicating your information hierarchy via font sizes. However, this often means primary content is too large and secondary content too small. Instead, play with font weight or color.

[Inter's](https://rsms.me/inter/) an excellent font, but I got tired of using it too much. Fortunately, there's an alpha variant of Inter called [Inter Display](https://twitter.com/rsms/status/1248657377877839872?lang=en), which tightens things up, is a bit taller and looks nicer at large sizes (i.e. headings). To mix things up on this site, I used Inter Display for all headings.

## Going from design to code
For styling, I decided to use [Tailwind CSS](https://tailwindcss.com/). Engineering is about making tradeoffs, and this was no different. The benefit of using other CSS-in-JS solutions, like [Stitches](https://stitches.dev/), is that it doesn't litter your code with classnames. However, for a small project like this it isn't a problem, and I've found that Tailwind lets you iterate rapidly on components and translate design to code faster, which was an advantage here - and beautiful in-built utility classes such as shadows and spacing tokens meant I didn't have to do much heavy lifting.

In Astro, reusable elements can be abstracted into [components](https://docs.astro.build/en/core-concepts/astro-components/). Components in Astro are similar to React, but render to 100% HTML. Pages are wrapped in reusable [layouts](https://docs.astro.build/en/core-concepts/layouts/) which can be nested. For example, you might create a `BaseLayout.layout` that's a `<div>` wrapper for the page, equivalent to a `<Container>` or `<Box>` element in React. Then, you might style specific sections of your site using different layouts, nesting them inside `BaseLayout`. For example, here's the `BlogLayout.layout` for this site:

```astro
---
import BaseLayout from './BaseLayout.astro';
import { Picture } from 'astro-imagetools/components';
const { content } = Astro.props;
const options = { day: 'numeric', month: 'short', year: 'numeric' };
---

<BaseLayout title={content.title} description={content.desc} image={content.hero ? content.hero : null}>
  <div class="md:mt-6 text-gray-12">
    <h1 class="mb-2 text-3xl font-bold font-display">{content.title}</h1>
    <h2 class="mb-10 text-gray-11">
      {new Date(content.date).toLocaleString('en-AU', options)}
    </h2>
    {content.hero ? <Picture src={content.hero} alt='Hero image' attributes={{img: {
      class: 'rounded-3xl w-[41rem] mb-12',
    },
  }} /> : null}
  </div>
  <article class="prose prose-headings:md dark:prose-invert">
    <slot />
  </article>
</BaseLayout>
```
- `const { content } = Astro.props` imports Markdown frontmatter passed into the page and exposes it as props.

# Making my site fast, simple and beautiful
## Fast
### Subsetting and self-hosting fonts
- Give the process

### Image optimisation

### Astro template directives
- client:load, etc

## Simple
### Markdown and Layouts for the majority of my pages

### 


## Beautiful
### Project buttons that color-match the image

### Mobile menu with transitions
- Plug writing an article later

### Home page card layout

# Results
