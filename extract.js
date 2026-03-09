const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const options = {};

pdfExtract.extract('advocacia_dra_marli_documento.pdf', options, (err, data) => {
  if (err) return console.log(err);
  data.pages.forEach(page => {
    page.content.forEach(item => {
      console.log(item.str);
    });
  });
});
