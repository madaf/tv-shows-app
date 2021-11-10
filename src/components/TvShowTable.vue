<template>
  <table class="shows-table">
    <thead>
      <tr class="shows-table__head-row">
        <th class="shows-table__th-image"></th>
        <th>Rank & Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody class="shows-table__body">
      <TvShowRow
        v-for="(show, index) in tvShowsByRating"
        :key="show.id"
        :show-name="show.name"
        :show-image="show.image.medium"
        :show-rating="show.rating.average"
        :show-ranking="index + 1"
        class="shows-table__body-row"
      />
    </tbody>
  </table>
</template>

<script>
import TvShowRow from './TvShowRow.vue'

export default {
  name: 'TvShowTable',

  components: {
    TvShowRow
  },

  props: {
    tvShowsByRating: {
      required: true,
      type: Array
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";

.shows-table {
  border-spacing: 0;
  text-align: left;
  width: 100%;
}


.shows-table__body-row:nth-of-type(even) {
  background-color: $color-light;
}

.shows-table__head-row {
  color: $color-secondary;
  font-weight: 700;

  th {
    border-bottom: 2px solid $color-secondary;
  }
}

.shows-table__th-image {
  padding-right: calc($unit-size*3);
  width: 50px;
}
</style>
