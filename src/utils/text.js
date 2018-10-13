export default {
  /**
   * save caret selection
   */
  saveSelection() {
    if (window.getSelection) {
      const sel = window.getSelection()
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0)
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange()
    }

    return null
  },

  /**
   * restore caret selection
   */
  restoreSelection(range) {
    if (range) {
      if (window.getSelection) {
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      } else if (document.selection && range.select) {
        range.select()
      }
    }
  },

  /**
   * place cursor at end
   */
  placeCursorAtEnd(el) {
    el.focus()
    if (typeof window.getSelection !== 'undefined' &&
      typeof document.createRange !== 'undefined') {
        const range = document.createRange()
        range.selectNodeContents(el)
        range.collapse(false)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
    } else if (typeof document.body.createTextRange !== 'undefined') {
      const textRange = document.body.createTextRange()
      textRange.moveToElementText(el)
      textRange.collapse(false)
      textRange.select()
    }
  },

  /**
   * insert text at last cursor
   */
  insertTextAtCursor(text) {
    var sel, range
    if (window.getSelection) {
      sel = window.getSelection()
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0)
        range.deleteContents()
        var textNode = document.createTextNode(text)
        range.insertNode(textNode)
        sel.removeAllRanges()
        range = range.cloneRange()
        range.selectNode(textNode)
        range.collapse(false)
        sel.addRange(range)
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange()
      range.pasteHTML(text)
      range.select()
    }
  },
}