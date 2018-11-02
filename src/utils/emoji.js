import EmojiConvertor from 'emoji-js'

export default {
  instance: null,
  convertData: {},

  /**
   * get instance
   */
  getInstance() {
    if (this.instance) {
      return this.instance
    }

    this.instance = new EmojiConvertor()
    this.instance.img_sets.apple.path = 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@4.1.0/img/apple/64/'
    this.instance.allow_native = false

    setTimeout(() => {
      const mapData = this.instance.map.unified
      for(const key in mapData){
        this.convertData[mapData[key]] = key;
      }
    }, 1)
    

    return this.instance
  },

  /**
   * convert emoji from input
   * @param {convert } input
   */
  convertEmoji(input) {
    return this.getInstance().replace_unified(input)
      .replace(/<span class="([^"]+)" style="background-image:url\(([^"]+)\)" data-codepoints="([a-z0-9\-]+)"><\/span>/g,
       '<span contenteditable="false" class="$1" style="background-image:url($2)" data-codepoints="$3"></span>')
  },

  /**
   * convert emoji to string
   * @param {*} input 
   */
  convertEmojiStr(input) {
    // init emoji data
    this.getInstance()

    return input.replace(/<span contenteditable="false" class="([^"]+)" style="background-image:url\(([^"]+)\)" data-codepoints="([a-z0-9\-]+)"><\/span>/g, (regexStr) => {
      const myRegexp = /data-codepoints="([a-z0-9\-]+)"/g
      var match = myRegexp.exec(regexStr)

      if (match[1] && this.convertData[match[1]]) {
        return this.convertData[match[1]]
      }

      return regexStr
    })
  }
}
