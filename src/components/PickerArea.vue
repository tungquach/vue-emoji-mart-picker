<template>
  <div
    :class="[{'emojipicker-inline': inline}, pickerPosition]"
    class="emojipicker">
    <!-- edit content area -->
    <div
      ref="textArea"
      :placeholder="placeholder"
      class="emojipicker-area"
      contenteditable="true"
      tabindex="0"
      spellcheck="false"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      @click="click"
      @keydown.enter="enter"
      @input="update"></div>
    <!-- edit content area end -->

    <!-- emoji picker -->
    <div
      class="emojipicker-button">
      <emoji-picker
        :emoji="emoji"
        :include="include"
        :exclude="exclude"
        :emoji-size="emojiSize"
        :per-line="perLine"
        :i18n="i18n"
        :set="set"
        :sheet-size="sheetSize"
        :background-image-fn="backgroundImageFn"
        :show-preview="showPreview"
        :show-categories="showCategories"
        :show-skin-tones="showSkinTones"
        :emoji-tooltip="emojiTooltip"
        :title="title"
        :infinite-scroll="infiniteScroll"
        @show-picker="onShowPicker()"
        @select="emoji => emojiSelect(emoji)" />
    </div>
    <!-- emoji picker end -->
  </div>
</template>

<script>
  import EmojiPicker from '@/components/EmojiPicker'
  import textUtil from '@/utils/text'
  import emojiMixin from '@/mixins/emoji'
  import emojiUtil from '@/utils/emoji'

  export default {
    components: {
      EmojiPicker,
    },
    mixins: [ emojiMixin ],
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      inline: {
        type: Boolean,
        default: false,
      },
      pickerPosition: {
        type: String,
        default: 'bottom',
      },
    },
    data() {
      return {
        selection: null,
        loadingEffect: false,
      }
    },
    watch: {
      value(value) {
        value = emojiUtil.convertEmoji(value)
        if (this.$refs.textArea.innerHTML !== value) {
          this.$refs.textArea.innerHTML = emojiUtil.convertEmoji(this.value)
        }
      },
    },
    mounted() {
      this.$refs.textArea.innerHTML = emojiUtil.convertEmoji(this.value)
    },
    methods: {
      /**
       * on select emoji
       */
      emojiSelect(emoji) {
        if (!this.selection) {
          textUtil.placeCursorAtEnd(this.$refs.textArea)
        }

        textUtil.restoreSelection(this.selection)
        textUtil.insertTextAtCursor(emojiUtil.convertEmoji(emoji.native))
        this.update()
      },

      /**
       * on show picker popup
       */
      onShowPicker() {
        textUtil.restoreSelection(this.selection)
      },

      /**
       * on click text area
       */
      click() {
        this.selection = textUtil.saveSelection()
      },

      /**
       * on press enter
       * prevent new line on inline mode
       */
      enter(event) {
        if (this.inline) {
          event.preventDefault()
        }
      },

      /**
       * on update text area
       */
      update() {
        this.selection = textUtil.saveSelection()
        this.$emit('input', emojiUtil.convertEmojiStr(this.$refs.textArea.innerHTML))
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/components/pickerarea";
</style>

<style>
  .emoji.emoji-sizer {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
    background-size: cover;
  }
</style>

