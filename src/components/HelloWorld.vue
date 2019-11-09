<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <edge-checkbox title="test"/>
      <edge-checkbox title="disabled test" :disabled="true" />
      <edge-checkbox title="small test" size="small" />
      <edge-checkbox title="large test" size="large" />
      <hr>
      <edge-checkbox title="stroke bold" :stroke-bold="true" />
      <edge-checkbox title="stroke bold + large" :stroke-bold="true" size="large" />
      <edge-checkbox title="stroke light" :stroke-light="true" />
      <edge-checkbox title="stroke light + small" :stroke-light="true" size="small" />
      <hr>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color test" color="primary"/>
        <edge-checkbox title="color test" color="primary-light"/>
        <edge-checkbox title="color test" color="primary-dark"/>
      </div>
    </div>
  </div>
</template>

<script>
import EdgeCheckbox from './edgeCheckbox'
export default {
  name: 'HelloWorld',
  components: { EdgeCheckbox },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
