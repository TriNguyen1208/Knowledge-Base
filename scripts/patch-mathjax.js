import fs from 'node:fs';
import path from 'node:path';

const targetFile = path.resolve('node_modules/markdown-it-mathjax3/index.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (!content.includes('globalAdaptor')) {
    const oldCode = `function renderMath(content, documentOptions, convertOptions) {
    const adaptor = (0, liteAdaptor_js_1.liteAdaptor)();
    const handler = (0, html_js_1.RegisterHTMLHandler)(adaptor);
    (0, assistive_mml_js_1.AssistiveMmlHandler)(handler);
    const mathDocument = mathjax_js_1.mathjax.document(content, documentOptions);
    const html = adaptor.outerHTML(mathDocument.convert(content, convertOptions));
    const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument));
    return (0, client_1.default)(html + stylesheet);
}`;
    const newCode = `let globalAdaptor = null;
let globalHandler = null;

function getAdaptorAndHandler() {
    if (!globalAdaptor) {
        globalAdaptor = (0, liteAdaptor_js_1.liteAdaptor)();
        globalHandler = (0, html_js_1.RegisterHTMLHandler)(globalAdaptor);
        (0, assistive_mml_js_1.AssistiveMmlHandler)(globalHandler);
    }
    return { adaptor: globalAdaptor, handler: globalHandler };
}

function renderMath(content, documentOptions, convertOptions) {
    const { adaptor } = getAdaptorAndHandler();
    const mathDocument = mathjax_js_1.mathjax.document(content, documentOptions);
    const html = adaptor.outerHTML(mathDocument.convert(content, convertOptions));
    const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument));
    return (0, client_1.default)(html + stylesheet);
}`;
    if (content.includes(oldCode)) {
      content = content.replace(oldCode, newCode);
      fs.writeFileSync(targetFile, content, 'utf8');
      console.log('Successfully patched markdown-it-mathjax3 to prevent memory leak.');
    }
  }
}
