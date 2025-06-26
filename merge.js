const PDFMerger = require('pdf-merger-js').default;


const mergePdfs = async (pdf1, pdf2) => {
  const merger = new PDFMerger(); // move inside the function so it resets each time

  await merger.add(pdf1); // use variable, not string "pdf1"
  await merger.add(pdf2); // use variable, not string "pdf2"

  await merger.save("public/merge.pdf");
};

module.exports = { mergePdfs };
