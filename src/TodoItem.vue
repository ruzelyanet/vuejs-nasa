
<template>
  <li class="tasks__item">{{ item.number | capitalize}} {{ item.title | capitalize}}</li>
</template>

<script>
export default {
  name: "task",

  props: {
    title: String,
    number: Number,
    completed: Boolean
  },

  data() {
    return {
      item: {
        title: this.title,
        number: this.number,
        completed: this.completed
      }
    };
  },

  filters: {
    lowercase(value) {
      return value.lowerCase();
    }
  }
};
</script>