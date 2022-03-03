---
title: 'How my website works'
date: '2022-01-31'
---

I wanted my site to be minimal and fast. Great design is important to me, so it had to look good too!

Here's how I did it, and the problems I faced along the way.

## Part 1: Design and architecture

I read an [interesting post](https://raptori.dev/blog/explorers-and-architects) recently about being either an explorer or architect in terms of programming. An explorer dives in without having a plan, while the architect draws one out meticulously. The reality is that everyone lies somewhere in the middle - **I lean towards the latter**.

### Design

I quickly settled on a minimal layout and color palette for my site, inspired by [Gavin Nelson](https://nelson.co/) and [Brian Lovin](https://brianlovin.com/writing). A dark theme helps the mesh gradient backgrounds on my project images pop, and also makes things easier to read at night. Positioning the section names on the left makes sections easy to scan.

A problem with white text on dark backgrounds is that if the contrast is too high, it causes eye strain. To offset this I used a darker shade of white for comfort.

### Architecture

Maintainability and performance were top of mind.

In terms of maintainability, I didn't want to have to spend an excessive amount of time adding new content in, like posts or projects. **This translated into abstracting each section away into a React component (`Projects.tsx, Posts.tsx` etc.), so that I could rearrange, refactor and edit as needed.**

For the Projects section, instead of hardcoding each one I **mapped them in from an array, making adding new ones easy**. For the Posts section, this meant **using `remark`, `remark-html` and `gray-matter` to transform Markdown files into HTML to reduce the friction of writing**.

Using **TypeScript** instead of Javascript enabled me to **catch errors through type checking as I wrote code, saving time**.

I built the site with **Next.js** and **React** then deployed on **Vercel**. Next.js **pre-renders HTML at build time (static generation)**, meaning each page is served faster. It also **optimises images and fonts**, among other things, making it the easy choice for performance. **Vercel** was used for hosting as it has a great developer experience (just type `vercel` into your CLI to deploy a preview site) and deploys on an **edge network**, meaning the site is **served as close to the visitor as possible**.

Hitting 100 on the Lighthouse DevTools test across mobile and desktop was a priority, and although it was already close, **preloading fonts** got me to the magic number.

As a bonus, I've added **continuous integration via GitHub Actions**. On every push to `main`, the repo's code is formatted using `prettier`.

# Part 2: Takeaways

Building this website gave me a good understanding of React components, using the `Map()` function, TypeScript interfaces + types, transforming Markdown to HTML and CI via GitHub Actions! It helped me practice the problem solving skills required to take a concept to code. There's still a lot to learn, but I'll get there.

And when in doubt, code it - you'll never know until you try.

# Part 3: What's next

- Make the /now page a Markdown file
- Build a Docusaraus-style 'outline' sidebar on the right
- Write a responsive photo gallery React component for /now page
