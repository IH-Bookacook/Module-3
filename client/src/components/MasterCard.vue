<template>
    <div>
        <div>

        </div>
        <div>
            <p>{{master.title}}</p>
            <p>{{master.credits[0]}}</p>
            <p>{{master.series}}</p>
            <p>{{master.addedBy}}</p>
        </div>
    </div>
    
</template>

<script>
export default {
  props: {
    master: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
/* div flex col
img display block fixed width / height
h3 title class master title

*/
</style>
