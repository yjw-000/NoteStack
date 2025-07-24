// docs/js/katex-init.js
window.addEventListener("load", function() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      // 块级公式
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$",  right: "$",  display: false}
      ],
      // 遇错不抛异常
      throwOnError: false,
      // 支持 LaTeX 自动换行等
      macros: {
        "\\RR": "\\mathbb{R}"
      }
    });
  } else {
    console.error("KaTeX auto-render library not loaded.");
  }
});
