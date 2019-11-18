<template>
  <div class="edge-checkbox-flex-container-row edge-checkbox-flex-container-align-center edge-checkbox-wrap">
    <label class="edge-checkbox-flex-container-row edge-checkbox-flex-container-align-center" :class="[
    disabled && 'edge-checkbox-disabled',
    size && `edge-checkbox-${size}`,
    color && `edge-checkbox-${color}`,
    fill && `edge-checkbox-fill`,
    fillBorderColor && `edge-checkbox-fill-${fillBorderColor}`
    ]">
      <input type="checkbox" :name="name" :id="id" :value="value" :disabled="disabled" :checked="checked" @change="onChange">
      <div class="edge-checkbox-check-icon">
        <template v-if="strokeLight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="1.0"
                  d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
          </svg>
        </template>
        <template v-else-if="strokeBold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="2.0"
                  d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="1.5"
                  d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
          </svg>
        </template>
      </div>
      <span>{{title}}</span>
    </label>
  </div>
</template>

<script>

const colorValueArray = ['primary-light', 'primary', 'primary-dark', 'red-light', 'red', 'red-dark', 'lime-light', 'lime', 'lime-dark', 'violet-light', 'violet', 'violet-dark', 'indigo-light', 'indigo', 'indigo-dark']
const sizeValueArray = ['small', 'large']

export default {
  name: 'EdgeCheckbox',
  props: {
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    strokeLight: { type: Boolean, default: false },
    strokeBold: { type: Boolean, default: false },
    title: { type: String, default: '' },
    size: { type: String,
      default: '',
      validator: function (sizeValue) {
        if (sizeValue === '') {
          return true
        } else {
          return sizeValueArray.indexOf(sizeValue) !== -1
        }
      } },
    color: { type: String,
      default: '',
      validator: function (colorValue) {
        if (colorValue === '') {
          return true
        } else {
          return colorValueArray.indexOf(colorValue) !== -1
        }
      } },
    returnMode: { type: String, default: 'checked' },
    fill: { type: Boolean,
      default: false,
      validator: function (fillValue) {
        if (typeof fillValue !== 'boolean') {
          return false
        } else {
          return true
        }
      } }
  },

  model: {
    prop: 'checked',
    event: 'change'
  },

  methods: {
    onChange (e) {
      if (this.returnMode === 'checked') {
        this.$emit('change', e.target.checked)
      }

      if (this.returnMode === 'value') {
        if (e.target.checked) {
          this.$emit('change', e.target.value)
        } else {
          this.$emit('change', null)
        }
      }
    }
  }

}
</script>

<style lang="scss" src="../assets/scss/edgeCheckbox/index.scss"></style>
<style lang="scss" scoped>
  @import '../assets/scss/variable/edgeVariable';

</style>
