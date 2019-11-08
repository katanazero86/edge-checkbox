<template>
  <div class="edge-checkbox-flex-container-row edge-checkbox-flex-container-align-center">
    <label class="edge-checkbox-flex-container-row edge-checkbox-flex-container-align-center" :class="[disabled ? 'edge-checkbox-disabled' : '']">
      <input type="checkbox" :name="name" :id="id" :value="value" :disabled="disabled" :checked="checked">
      <div class="edge-checkbox-check-icon">
        <template v-if="strokeLight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="0.5"
                  d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
          </svg>
        </template>
        <template v-else-if="strokeBold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="2.5"
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
export default {
  name: 'edgeCheckbox',
  props: {
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    strokeLight: { type: Boolean, default: false },
    strokeBold: { type: Boolean, default: false },
    title: { type: String, default: '' },
    size: { type: String, default: 'normal' }

  }
}
</script>

<style lang="scss" src="../assets/scss/edgeCheckbox/index.scss"></style>
<style lang="scss" scoped>
  @import '../assets/scss/variable/edgeVariable';

</style>
