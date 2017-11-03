<template>
  <div>
      <h1>Fiche détaillée</h1>
      <detailed-master-card :master="master"></detailed-master-card>    
  </div>
</template>

<script>
import { getMaster } from "@/api/master";
import DetailedMasterCard from "@/components/DetailedMasterCard";

export default {
  components: {
    DetailedMasterCard
  },
  data() {
    return {
      master: []
    };
  },
  methods: {},
  created() {
    getMaster(this.$route.params.id).then(master => (this.master = master));
  }
};
</script>

<style>

</style>
