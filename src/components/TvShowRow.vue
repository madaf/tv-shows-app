<template>
  <tr class="show-row">
    <td class="show-row__column">
      <img
        :src="showImage"
        :alt="showName"
        class="show-row__image"
        data-test="show-image"
      >
    </td>
    <td class="show-row__column">
      <span
        class="show-row__ranking"
        data-test="show-ranking"
      >
        {{ showRanking }}.
      </span>
      <span data-test="show-name">
        <router-link :to="{name: 'TvShowDetailsView', params: {showName}}">
        {{ showName }}
        </router-link>
      </span>
    </td>
    <td
      class="show-row__column"
      data-test="show-rating"
    >
      {{ showRating }}
    </td>
  </tr>
</template>

<script>

export default {
  name: 'TvShowRow',
  props: {
    showName: {
      required: true,
      type: String
    },

    showImage: {
      required: false,
      type: String,
      default: ''
    },

    showRating: {
      required: true,
      type: Number
    },

    showRanking: {
      required: true,
      type: Number
    }
  }
}
</script>
<style lang="scss" scoped>
.show-row__image {
  height: auto;
  width: 50px;
}
</style>
