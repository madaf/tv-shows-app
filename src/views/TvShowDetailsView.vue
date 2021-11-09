<template>
  <div class="show-details">
    <h1 class="show-details__title">{{ tvShow.name }}</h1>
    <span class="show-details__date">
      <time
        :datetime="tvShow.premiered"
        class="show-details__time"
      >
        {{ tvShow.premiered }}
      </time> -  
      <time
        :datetime="tvShow.ended"
        class="show-details__time"
      >
        {{ tvShow.ended }}
      </time>
    </span>
    <div class="show-details__description-wrap">
      <img
        :src="tvShow.image.medium"
        :alt="tvShow.name"
      >
      <div v-html="tvShow.summary" class="show-details__description"></div>
    </div>
    <span class="show-details__genres">Genres: {{ genres }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TvShowDetailsView',

  props: {
      showName: {
          required: true,
          type: String
      }
  },
  computed: {
    ...mapGetters(['selectedShow']),

    tvShow() {
        return this.selectedShow(this.showName)
    },

    genres() {
      return this.tvShow.genres.join(', ')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/mixin.scss";

.show-details {
  margin: auto;
  max-width: 700px;
  text-align: center;

  @include small-breakpoint {
    text-align: start;
  }
}

.show-details__title {
  color: $color-secondary;
  font-size: 3em;
  margin: 0;
}

.show-details__time {
  color: $color-main;
  font-weight: 700;
}

.show-details__description-wrap {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: calc($unit-size*4);
  margin-top: calc($unit-size*4);

  @include small-breakpoint {
    flex-direction: row;
  }
}

.show-details__description {
  margin-left: 0;
  @include small-breakpoint {
    margin-left: calc($unit-size*3);
  }
}

.show-details__genres {
  color: $color-main;
  font-weight: 700;
}
</style>
