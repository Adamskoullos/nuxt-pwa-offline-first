<template>
  <v-row class="max-width mx-auto">
    <v-col>
      <!-- Show the main content div if state has data and there is no error -->
      <div class="task-list" v-if="!isLoading && !error">
        <div class="task" v-for="todo in filteredTodos" :key="todo.id">
          <NuxtLink
            :to="`${route}/${todo.id}`"
            :class="{ strike: todo.complete }"
            v-if="!todo.update"
          >
            {{ todo.text }}
          </NuxtLink>
          <!-- The below form shows if the user has clicked to edit a task to update the text -->
          <form v-if="todo.update" @submit.prevent="handleUpdateText(todo)">
            <input type="text" v-model="text" class="update-todo" />
            <div class="edit-buttons">
              <button>
                <span class="material-icons-outlined edit save">
                  save
                </span>
              </button>
              <span
                class="material-icons-outlined edit back"
                v-if="todo.update"
                @click="handleUpdate({ ...todo })"
              >
                backspace
              </span>
            </div>
          </form>
          <div class="todo-actions">
            <span
              class="material-icons outline"
              v-if="!todo.complete && !todo.update"
              @click="handleComplete(todo)"
              >check_box_outline_blank</span
            >
            <span
              class="material-icons"
              v-if="todo.complete && !todo.update"
              @click="handleComplete(todo)"
              >check_box</span
            >
            <span
              class="material-icons edit"
              @click="handleUpdate({ ...todo })"
              v-if="!todo.update"
              >edit</span
            >
            <span
              class="material-icons edit"
              @click="handleDelete(todo)"
              v-if="!todo.update"
              >delete</span
            >
          </div>
        </div>
      </div>
      <!-- The below loader only shows on initial load while Heroku is spinning up after that while state.todos has a value it will not show -->
      <div v-if="isLoading && !error && !todos[0]">
        <Loader />
      </div>
      <!-- If there is an issue fetching data this message will show to let the user know -->
      <div v-if="error" class="error">
        <h1>{{ error }}</h1>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["module", "isLoading", "todos", "error", "filteredTodos", "route"],
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleComplete(todo) {
      this.$store.dispatch(this.module + "/toggleComplete", todo);
    },
    handleDelete(todo) {
      this.$store.dispatch(this.module + "/deleteTodo", todo);
    },
    handleUpdate(todo) {
      this.text = todo.text;
      const newArr = [];
      todo.update = !todo.update;

      [...this.todos].map(task => {
        if (todo.id == task.id) {
          newArr.push(todo);
        } else {
          newArr.push(task);
        }
      });
      this.$store.dispatch(this.module + "/updateTodo", newArr);
    },
    handleUpdateText(todo) {
      const data = {
        todo: todo,
        text: this.text
      };
      this.$store.dispatch(this.module + "/updateTodoText", data);
    }
  }
};
</script>

<style lang="scss" scoped>
div.error {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: auto;
    font-size: 30px;
    font-weight: 400;
  }
}
.task-list {
  max-width: 900px;
  margin: auto;

  .task {
    //   background: gray;
    display: flex;
    align-items: center;
    justify-content: stretch;
    // margin: 10px;

    a {
      flex: 1;
      margin: 10px 10px 10px 0;
      padding: 10px;
      background: #ecf0f3;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #505050;
      box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      text-decoration: none;
    }
    a:hover {
      background: #ecf0f3d3;
    }
    a.strike {
      text-decoration: line-through;
    }
    form {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: stretch;

      input {
        flex: 1 1;
        margin-right: 5px;
        border: 2px solid #ecf0f391;
      }
      .edit-buttons {
        display: flex;
      }

      button {
        border: none;
        background: rgba(255, 255, 255, 0);
        display: flex;
        align-items: center;
        transition: all ease 0.2s;

        span {
          font-size: 34px !important;
        }
      }
    }
    input {
      flex: 1;
      margin: 10px 10px 10px 0;
      padding: 8px;
      background: #ecf0f391;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #505050;
      box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.4);
      transition: 0.2s;
    }
    input:focus {
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
      transform: scale(1.005);
      transition: 0.2s;
      outline: none;
    }
    .todo-actions {
      display: flex;
      align-items: center;
    }

    span {
      margin: auto 5px;
      font-size: 32px;
      color: #81e597;
      border-radius: 4px;
      cursor: pointer;
      transition: all ease 0.2s;
    }
    span:hover {
      transform: scale(1.1);
      transition: all ease 0.2s;
    }

    span.outline {
      color: #474747b0;
      cursor: pointer;
    }
    span.outline:hover {
      color: #ecf0f3;
    }
    span.edit {
      font-size: 26px;
      color: #474747b0;
      cursor: pointer;
    }
    span.edit:hover {
      color: #ecf0f3;
    }
    span.edit.back {
      font-size: 28px;
      color: #474747b0;
      margin-right: 35px;
      margin-left: 0;
    }
    span.edit.back:hover {
      color: #ecf0f3;
    }
    span.edit.save {
      font-size: 28px;
      color: #81e597;
    }
    span.edit.save:hover {
      font-size: 28px;
      color: #81e597;
      transform: scale(1.07);
      transition: all ease 0.2s;
    }
  }
}
@media (min-width: 200px) and (max-width: 499px) {
  .task-list .task {
    flex-wrap: wrap;
    p {
      flex: 1 1;
      min-width: 250px;
    }
  }
  form {
    flex-wrap: wrap;
    input {
      flex: 1;
      min-width: 250px;
    }
    .edit-buttons {
      margin: auto;

      .back {
        margin-right: 0;
      }
    }
    span.edit.back {
      margin-right: 0 !important;
    }
    button {
      margin: auto;
    }
  }
  .todo-actions {
    margin: auto;
  }
}
</style>
