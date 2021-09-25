<template>
  <v-row class="pt-3">
    <v-col class="filter-buttons d-flex align-center justify-center">
      <span
        class="material-icons outline my-auto mx-3"
        :class="{ activeTab: filter == 'incomplete' }"
        @click="handleFilter('incomplete')"
        >check_box_outline_blank</span
      >
      <span
        class="material-icons outline my-auto mx-3"
        :class="{ activeTab: filter == 'complete' }"
        @click="handleFilter('complete')"
        >check_box</span
      >
      <span
        class="material-icons-outlined outline my-auto mx-3"
        :class="{ activeTab: filter == 'all' }"
        @click="handleFilter('all')"
      >
        all_inclusive
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["module", "filter"],
  methods: {
    handleFilter(input) {
      this.$store.dispatch(this.module + "/filterTodoList", input);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-buttons {
  flex: 1;

  span {
    font-size: 2.5rem;
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
  span.activeTab {
    color: #81e597;
  }
}
</style>
