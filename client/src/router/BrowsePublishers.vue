<template>
  <div>
      <h1>Additions récentes...</h1>
      <ul class="container">
          <li v-for="publisher in publishers" :key="publisher._id" >
              <publisher-card :publisher="publisher"></publisher-card>    
          </li>
      </ul>
     </div>
</template>

<script>
import { getPublishers } from "@/api/publisher";
import PublisherCard from "@/components/PublisherCard";

export default {
  components: {
    PublisherCard
  },
  data() {
    return {
      publishers: []
    };
  },
  methods: {},
  created() {
    getPublishers({ num: 20, sort: "name", order: "asc" }).then(
      publishers => (this.publishers = publishers)
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
