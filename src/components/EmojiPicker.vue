<template>
  <div
    v-on-clickaway="clickaway">
    <!-- picker toggle button -->
    <a @click="tooglePicker()">
      <img
        v-show="!showPicker"
        :class="{'smiley-loading': isSmileyLoading}"
        class="icon icon-smiley"
        src="~assets/images/icons/smiley.svg">
      <img
        v-show="showPicker"
        :class="{'close-loading': isCloseLoading}"
        class="icon icon-close"
        src="~assets/images/icons/close.svg">
    </a>
    <!-- picker toggle button end -->

    <!-- picker popup -->
    <transition name="fade">
      <picker
        v-if="showPicker || alreadyShowPicker"
        v-show="showPicker"
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
        @select="addEmoji" />
    </transition>
    <!-- picker popup end -->
  </div>
</template>

<script>
  import { Picker } from 'emoji-mart-vue'
  import { mixin as clickaway } from 'vue-clickaway'
  import emojiMixin from '@/mixins/emoji'

  export default {
    components: {
      Picker,
    },
    mixins: [ clickaway, emojiMixin ],
    data() {
      return {
        alreadyShowPicker: false,
        showPicker: false,
        isSmileyLoading: false,
        isCloseLoading: false,
      }
    },
    methods: {
      /**
       * toggle picker popup
       */
      tooglePicker() {
        // prevent duplicate click
        // while loading
        if (this.isCloseLoading || this.isSmileyLoading) {
          return
        }

        // add loading
        if (this.showPicker) {
          this.isCloseLoading = true
        } else {
          this.isSmileyLoading = true
        }

        setTimeout(() => {
          this.showPicker = !this.showPicker

          // show picker popup
          if (this.showPicker) {
            this.$emit('show-picker')
            this.alreadyShowPicker = true
          }

          // remove loading
          setTimeout(() => {
            if (this.showPicker) {
              this.isSmileyLoading = false
            } else {
              this.isCloseLoading = false
            }
          }, 100)
        }, 400)
      },

      /**
       * click anyway to close emoji picker
       */
      clickaway() {
        this.showPicker = false
      },

      /**
       * on add emoji
       */
      addEmoji(emoji) {
        this.$emit('select', emoji)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/components/emojipicker";
</style>

<style lang="scss">
  @import "~assets/scss/components/emojimart";
</style>


