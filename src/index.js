import { marked } from 'marked'

fetch(require('url:./faq.md'))
  .then(res => res.text())
  .then(txt => document.getElementById('resume-faq-section').innerHTML = marked(txt))
