export default {
  props: {
    emoji: {
      type: String,
      default: 'point_up',
    },
    include: {
      type: Object,
      default: [],
    },
    exclude: {
      type: Object,
      default: [],
    },
    emojiSize: {
      type: Number,
      default: 24,
    },
    perLine: {
      type: Number,
      default: 9,
    },
    set: {
      type: String,
      default: 'apple',
    },
    sheetSize: {
      type: Number,
      default: 32,
    },
    backgroundImageFn: {
      type: Function,
      default: ((set, sheetSize) => `https://cdn.jsdelivr.net/npm/emoji-datasource-${set}@4.1.0/img/${set}/sheets/${sheetSize}.png`),
    },
    showPreview: {
      type: Boolean,
      default: false,
    },
    showCategories: {
      type: Boolean,
      default: false,
    },
    showSkinTones: {
      type: Boolean,
      default: false,
    },
    emojiTooltip: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Pick your emoji…',
    },
    infiniteScroll: {
      type: Boolean,
      default: true,
    },
  }
}