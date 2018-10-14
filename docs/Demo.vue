<template>
  <div id="app" class="container content">
    <h1>Vue Emoji Mart Picker</h1>

    <code>{{ textTemplate }}</code>
    <br><br>
    <div class="columns">
      <div class="column is-8">
        <picker-area
          v-model="textValue"
          placeholder="Hello" />
      </div>
    </div>
    <p>Textarea: {{ textValue }}</p>
    
    <br><br>

    <code>{{ inputTemplate }}</code>
    <br><br>
    <div class="columns">
      <div class="column is-8">
        <picker-area
          v-model="inputValue"
          :inline="true"
          picker-position="top"
          placeholder="World" />
      </div>
    </div>
    <p>Input: {{ inputValue }}</p>
  </div>
</template>

<script>
import PickerArea from '../src'

export default {
  name: 'app',
  components: {
    PickerArea,
  },
  data() {
    return {
      textTemplate: `<picker-area
      v-model="textValue"
      placeholder="Hello" />`,
      inputTemplate: `<picker-area
      v-model="inputValue"
      :inline="true"
      picker-position="top"
      placeholder="World" />`,
      textValue: '',
      inputValue: '',
    }
  }
}
</script>

<style>
  #app {
    font-family: Montserrat, serif;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
</style>
