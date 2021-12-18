import { marked } from 'marked'
import faq_txt from 'bundle-text:./faq.md'

document.getElementById('resume-faq-section').innerHTML = marked(faq_txt)
