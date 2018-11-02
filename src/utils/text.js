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
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = text;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(text);
    }
  },
}