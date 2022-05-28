---
title: What I learned from my first hackathon (and tips for your next)
desc: Working together in less than 48 hours, my team came second out of 51 teams in UNIHACK '22. Here's how we did it, and what we learned.
date: 2022-03-05
layout: ../../layouts/BlogLayout.astro
---

Together with three excellent team members (Tiff, Luke and Terence), I competed in UNIHACK '22 - my first hackathon ever! As expected for building a web app in less than 48 hours, we ran into some challenges. Here's what I took away from the experience - generalisable tips that'll hopefully help you in your next hackathon.

# Clear communication > everything else

To ensure your team functions smoothly, clear communication is important. Maybe you need to clarify a new idea, help your back-end person debug an error, or scramble to get your pitch together. Whatever happens in your team, it all falls apart if things get lost in translation. Here're some tips:

- **Create a Discord server for your team and use channels for organisation.** For example, we had a #tool-links channel for code snippets, API keys and links to libraries we wanted to use. Everything else went in `#general`.
- **Make everything low-friction.** Things usually get frenzied around the second day when you're pushing new features rapidly while fixing bugs, or starting to develop your pitch. Make sure whatever your team uses to organise their project is easy to use for everyone and takes the least amount of effort to use. For example, we figured we'd use GitHub Issues but ended up just having a pinned message of things to fix / do.
- **Communicate availabilities clearly.** If you know someone who you need help from is coming back in 20, you can move onto something else instead of waiting. Don't say you'll be free for the hackathon then not turn up - it reflects poorly on you, and could be avoided if you had communicated clearly upfront.

# Make sure everyone has a role

While it's important to rest during the hackathon so you can think properly, it's also true that every minute counts - so if someone's idling, that's wasted resources that could be spent helping someone else complete a task (that might be blocking something else). The faster the team moves, the better. Ensure your team checks in on progress regularly to see if anyone can help with something!

# Don't chase perfection

Shipping a working prototype for the judges to test is the goal, not writing perfect code. Similarly, it's important to have a nice front-end, but don't obsess over the small details. Code quality goes out the window - focus on pushing out features as quick as possible. For example, I spent a stupid amount of time trying to code the UI manually before realising I could just use a component library that looked better, which leads me to my next point ...

# Leverage existing libraries for rapid prototyping

Don't waste your time coding UI or complicated functions - leverage existing libraries or frameworks to get things done faster. They'll not only work better than whatever you'll code under time constraints, they're usually easy to use saving you time. For example, use Chakra UI for your UI to get a beautiful front-end up quickly - and Tailwind CSS or a CSS-in-JS library such as Emotion/Stitches so you can design as you code instead of toggling between stylesheets. Remember, focus on shipping something that works!

# Don't develop online

We initially used Replit to develop collaboratively, like Google Docs. It was nice while it worked, but compiling soon became laggy so we were forced to switch to local development, where we faced build errors - which took us a hour to fix. In practice, only one or two people end up coding anyway, so we'd recommend you just use a GitHub repository to keep track of changes and push / pull as you go, ideally with a Vercel integration so you get a preview deployment URL for each commit.
