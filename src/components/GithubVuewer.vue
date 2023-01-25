<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubConteudo :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubConteudo from './GithubConteudo';
  
  export default {
    components: {
      GithubRepo,
      GithubConteudo,
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>








