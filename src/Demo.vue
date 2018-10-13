<template>
  <div id="app">
    <picker-area
      v-model="textValue"
      placeholder="Hello" />
    <p>Textarea: {{ textValue }}</p>
    <br><br>
    <br><br>
    <br><br>
    <picker-area
      v-model="inputValue"
      :inline="true"
      picker-position="top"
      placeholder="World" />
    <p>Input: {{ inputValue }}</p>
  </div>
</template>

<script>
import PickerArea from '@/components/PickerArea'

export default {
  name: 'app',
  components: {
    PickerArea,
  },
  data() {
    return {
      textValue: '',
      inputValue: '',
    }
  }
}
</script>

<style>
  #app {
    padding: 10rem 5rem;
  }
</style>
