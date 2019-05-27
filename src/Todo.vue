<template>
  <ul>
    <li v-for="(todo, key) in todos" v-bind:key="key">
      <div>{{ todo.title }} {{ todo.numbesr }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          title: "Title",
          number: 1
        },
        {
          title: "Title",
          number: 2
        },
        {
          title: "Title",
          number: 3
        },
        {
          title: "Title",
          number: 5
        }
      ]
    };
  }
};
</script>

<style scope>
ul {
  list-style: none;
}

ul li {
  margin-bottom: 20px;
}
</style>