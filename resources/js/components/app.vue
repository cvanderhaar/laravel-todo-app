<template>
    <v-app>
      <v-container>
        <v-text-field
          label="New Task"
          v-model="newTask"
          @keyup.enter="addTask"
        ></v-text-field>
  
        <v-list>
          <v-list-item
            v-for="(task, i) in tasks"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
  
            <v-list-item-action>
              <v-icon
                @click="deleteTask(i)"
              >
                delete
              </v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
      }
    },
    methods: {
      addTask() {
        axios.post('/api/tasks', { title: this.newTask, completed: false })
          .then(response => {
            this.tasks.push(response.data)
            this.newTask = ''
          })
      },
      deleteTask(index) {
        axios.delete(`/api/tasks/${this.tasks[index].id}`)
          .then(response => {
            this.tasks.splice(index, 1)
          })
      },
    },
    mounted() {
      axios.get('/api/tasks')
        .then(response => {
          this.tasks = response.data
        })
    },
  }
  </script>
  