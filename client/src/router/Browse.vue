<template>
  <div>
      <h1>Additions récentes...</h1>
      <ul>
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
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
