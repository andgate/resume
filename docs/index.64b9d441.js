var txt1 = fetch('./faq.md').then((txt)=>console.log(txt)
);
document.getElementById('faq-body').innerHTML = marked.parse(faq);

