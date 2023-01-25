<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Number</th>
                    <th class="text-left">Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="arquivo in arquivos" :key="arquivo.name">
                    <td>{{ arquivo.type }}</td>
                    <td>{{ arquivo.name }}</td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        loading: false,
        temmais: false,
        currentPage: 1,
        arquivos: []
      }),
      methods: {
        async pegaArquivos(){
          this.loading = true
          const maisarquivos = await api.listaArquivos(this.repo.owner.login, this.repo.name)
          this.arquivos = maisarquivos
          this.loading = false
        }
      },
      watch: {
        repo(){
          this.arquivos = []
          if (this.repo) {
            this.pegaArquivos()
          } else {
            this.arquivos = []
          }
        }
      }
    }
  </script>
  