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
      <edge-checkbox title="stroke bold + large + color" :stroke-bold="true" size="large" color="red" />
      <edge-checkbox title="stroke bold + large + color + disabled" :stroke-bold="true" size="large" color="red" :disabled="true" />
      <edge-checkbox title="stroke light" :stroke-light="true" />
      <edge-checkbox title="stroke light + small" :stroke-light="true" size="small" />
      <edge-checkbox title="stroke light + small + color" :stroke-light="true" size="small" color="indigo"/>
      <edge-checkbox title="stroke light + small + color + disabled" :stroke-light="true" size="small" color="indigo" :disabled="true"/>
      <edge-checkbox title="stroke light + small + color + disabled + checked" :stroke-light="true" size="small" color="indigo" disabled checked />
      <hr>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color primary" color="primary"/>
        <edge-checkbox title="color primary-light" color="primary-light"/>
        <edge-checkbox title="color primary-dark" color="primary-dark"/>
        <edge-checkbox title="color + disabled" color="primary" :disabled="true"/>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color red" color="red"/>
        <edge-checkbox title="color red-light" color="red-light"/>
        <edge-checkbox title="color red-dark" color="red-dark"/>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color lime" color="lime"/>
        <edge-checkbox title="color lime-light" color="lime-light"/>
        <edge-checkbox title="color lime-dark" color="lime-dark"/>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color violet" color="violet"/>
        <edge-checkbox title="color violet-light" color="violet-light"/>
        <edge-checkbox title="color violet-dark" color="violet-dark"/>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color indigo" color="indigo"/>
        <edge-checkbox title="color indigo-light" color="indigo-light"/>
        <edge-checkbox title="color indigo-dark" color="indigo-dark"/>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center">
        <edge-checkbox title="color indigo + get value(true/false)" color="indigo" name="testValue" v-model="testValue"/>
        <div style="font-weight: 600">
          {{testValue}}
        </div>
        <edge-checkbox title="color indigo-light + get value(setting value)" color="indigo-light" value="so cool!" name="testValue2" v-model="testValue2" return-mode="value"/>
        <div style="font-weight: 600">
          {{testValue2}}
        </div>
        <edge-checkbox title="checked" color="indigo-light" :checked="true"/>
      </div>
      <hr>
      <edge-checkbox fill title="fill mode" />
      <edge-checkbox fill title="fill mode + primary" color="primary" />
      <edge-checkbox fill title="fill mode + primary + large" color="primary" size="large"/>
      <edge-checkbox fill title="fill mode + primary + small" color="primary" size="small" />
      <edge-checkbox fill title="fill mode + primary + disabled" color="primary" disabled />
      <edge-checkbox fill title="fill mode + violet-dark" color="violet-dark" />
      <div style="background-color: #e6e6e6">
        <edge-checkbox fill title="fill mode + violet-dark" color="violet-dark" />
      </div>
    </div>
  </div>
</template>

<script>
import EdgeCheckbox from './EdgeCheckbox'
export default {
  name: 'HelloWorld',
  components: { EdgeCheckbox },
  props: {
    msg: String
  },

  data () {
    return {
      testValue: false,
      testValue2: null
    }
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
