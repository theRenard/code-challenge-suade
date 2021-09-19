<template>
  <div class="person-card">
    <div class="details" @click="$emit('personClick', person)">
      <h4> {{ person.name }} </h4>
      <b>Age:</b> {{ person.age }} <br/>
      <b>Eye Color:</b> {{ person.eyeColour }} <br/>
      <b>Gender:</b> {{ person.gender }} <br/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        default: () => {},
      },
    },
    emits: {
      personClick: {
        arg: 'person',
        event: 'personClick',
      },
    },
  };
</script>

<style scoped>
  .person-card {
    background: #e4e4e4;
    min-width: 100px;
    float: left;
    width: 300px;
    margin: 10px;
    padding: 10px;
  }
</style>
