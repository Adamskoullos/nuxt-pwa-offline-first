<template>
  <v-row class="max-width mx-auto">
    <v-col>
      <form class="container-add-task" @submit.prevent="handleSubmit">
        <h3 class="font-weight-regular">Create a new task</h3>
        <div class="input-div d-flex align-center justify-stretch">
          <input type="text" v-model="task" class="py-2 px-2" />
          <button class="ms-3 px-2 py-1">Add</button>
        </div>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["module"],
  data() {
    return {
      task: ""
    };
  },
  methods: {
    handleSubmit() {
      const newTodo = {
        id: Math.floor(Math.random() * 100000000 + 1),
        text: this.task,
        complete: false,
        update: false
      };
      this.$store.dispatch(this.module + "/addTodo", newTodo);
      this.task = "";
    }
  }
};
</script>

<style lang="scss">
.container-add-task {
  .input-div {
    input {
      flex: 1 1;
      background: #ecf0f3;
      border: none;
      font-size: 1.3rem;
      box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
      transition: 0.2s;
    }
    input:focus {
      box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.4);
      outline: none;
      transform: scale(1.005);
      transition: 0.2s;
    }
    button {
      background: #81e597;
      border: none;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      color: rgb(88, 88, 88);
      cursor: pointer;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
      transition: all ease 0.2s;
    }
    button:hover {
      transform: scale(1.05);
      transition: all ease 0.2s;
    }
  }
}
@media (min-width: 200px) and (max-width: 499px) {
  form.container-add-task {
    margin: 10px;

    h3 {
      text-align: center;
    }

    .input-div {
      flex: 1;
      flex-wrap: wrap;
      justify-content: center;

      input {
        margin: 10px 0;
      }
    }
  }
}
</style>
