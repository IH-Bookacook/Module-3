<template>
  <div>
      <h1>Additions récentes...</h1>
      <ul class="container">
          <li v-for="master in masters" :key="master._id" >
              <master-card :master="master"></master-card>    
          </li>
      </ul>
     </div>
</template>

<script>
import { getMasters } from "@/api/master";
import MasterCard from "@/components/MasterCard";

export default {
  components: {
    MasterCard
  },
  data() {
    return {
      masters: []
    };
  },
  methods: {},
  created() {
    getMasters({ num: 20, sort: "createdAt", order: "desc" }).then(
      masters => (this.masters = masters)
    );
  }
};
</script>

<style>
.container {
  display: block;
  margin-bottom: 34px;
  display: flex;
  align-items: center;
}
</style>
