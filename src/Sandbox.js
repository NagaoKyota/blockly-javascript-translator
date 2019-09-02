import _ from 'lodash';

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
</body>
</html>`;

class Sandbox {
  constructor() {
    this.iframe = document.createElement('iframe');
    this.iframe.src = `data:text/html;charset=utf-8,${encodeURI(html)}`;
    this.iframe.style.display = 'none';
    this.iframe.sandbox = 'allow-same-origin';
  }

  init(BlockFunctions) {
    document.body.appendChild(this.iframe);
    this.global = this.iframe.contentWindow;

    _.map(BlockFunctions, (func) => {
      this.global[func().name] = func().def;
    });
  }

  eval(code) {
    this.global.eval(code);
    this._removeChild();
  }

  // eslint-disable-next-line no-underscore-dangle
  _removeChild() {
    document.body.removeChild(this.iframe);
  }
}

export default new Sandbox();
