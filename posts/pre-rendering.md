---
title: 'Two Forms of Pre-rendering'
date: '2022-01-01'
---

![Texte alternatif](../images/Rivières/riviere.jpeg "Titre de l'image")

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.


![Texte alternatif](../images/Rivières/riviere2.jpeg "Titre de l'image")
---
![Texte alternatif](../images/Rivières/jardin.jpeg "Titre de l'image")


Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
