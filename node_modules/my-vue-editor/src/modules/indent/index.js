export default {
  name: 'indent',
  icon: 'fa fa-indent',
  type: 'fn',
  handler: function (rh) {
    rh.editor.execCommand('indent')
  }
}
