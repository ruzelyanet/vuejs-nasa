<template>
  <div>
    <!-- <h1>{{ message }}</h1>
		<app-input 
			:msg="message" 
			@messChange="message = $event"
			v-modal="">
    </app-input>-->

    <pre>{{ info }}</pre>

    <img v-bind:src="info.data.url">

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="input-group">
            <span class="input-group-prepend">
              <input type="checkbox" name="completed" v-model="completed">
            </span>

            <input type="text" v-model="message1" class="form-control">
            <input type="number" v-model="index" class="form-control">

            <div class="input-group-append">
              <button v-on:click="addItem" class="btn btn-primary">Add</button>
            </div>
          </div>

          <div>{{ completed }}</div>
          <div>{{ message1 }}</div>

          <ul>
            <task
              v-for="(item, key) in list"
              v-bind:title="item.title"
              v-bind:number="item.number"
              v-bind:key="key"
              v-bind:class="{completed: item.completed}"
            ></task>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
let url =
  "https://api.nasa.gov/planetary/apod?api_key=NIFHBNo6wy0xBvGUcEiyQWMIgVyPwWwQtxa5WZfU";

import task from "./TodoItem.vue";
import axios from "axios";

export default {
  data() {
    return {
      info: {},
      list: [
        {
          title: "item",
          number: 1,
          completed: true
        },
        {
          title: "items",
          number: 2,
          completed: false
        },
        {
          title: "items",
          number: 3,
          completed: true
        }
      ],

      message1: "",
      completed: true,
      index: Number
    };
  },

  mounted() {
    axios.get(url).then(response => {
      this.info = response;
    });
  },

  methods: {
    addItem() {
      this.list.push({
        title: this.message1,
        number: +this.index,
        completed: this.completed
      });
    }
  },

  components: {
    task
  }
};
</script>