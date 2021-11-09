<template>
  <div class="shows">
    <h1 class="shows__title">TV Shows by rating</h1>
    <div class="shows__filters">
      <form class="shows__search-wrap" data-test="shows-form" @submit.prevent="searchShow">
        <input
          class="shows__search-bar"
          type="text"
          placeholder="Search a TV Show"
          v-model="searchedInputValue"
        />
        <input class="shows__search-submit" type="submit" value="Search" />
      </form>
        <select v-model="selectedGenre" class="shows__dropdown">
          <option>All TV Shows</option>
          <option
            v-for="genre in allGenres"
            :key="genre"
            >
              {{ genre }}
          </option>
        </select>
    </div>
    <div class=shows__table-wrapper>
      <TvShowTable
        :tv-shows-by-rating="filteredShowsBySearch"
      />
    </div>
  </div>
</template>

<script>
import { FETCH_ALL_TV_SHOWS } from '../store/action.types.js'
import { mapGetters } from 'vuex'

import TvShowTable from '../components/TvShowTable.vue'

export default {
  name: 'TvShowsView',

  components: {
    TvShowTable
  },

  data() {
    return {
      shows: null,
      selectedGenre: 'All TV Shows',
      searchedShow: '',
      searchedInputValue: '',
    }
  },

  computed: {
    ...mapGetters(['tvShowsByRating', 'allGenres']),

    filteredShowsByGenre() {
      if (this.selectedGenre !== 'All TV Shows'){
      return this.tvShowsByRating.filter(show => show.genres.includes(this.selectedGenre))
    } else {
      return this.tvShowsByRating
    }},

    filteredShowsBySearch() {
      return this.filteredShowsByGenre.filter(show => show.name.toLowerCase().includes(this.searchedShow.toLowerCase()))
    }
  },

  async created() {
    this.loadInitialState()
  },

  methods: {
    async loadInitialState() {
      await this.$store.dispatch(FETCH_ALL_TV_SHOWS)
    },

    searchShow() {
      this.searchedShow = this.searchedInputValue
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/mixin.scss";

.shows {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 700px;
}

.shows__title {
  font-size: 3em;
  text-align: center;
}

.shows__filters {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: calc($unit-size*4);
  @include small-breakpoint {
    flex-direction: row;
  }
}

.shows__search-wrap {
  max-width: 300px;
  position: relative;
  width: 100%;
}

.shows__search-submit {
  background-color: $color-main;
  border: none;
  color: $color-light;
  font-weight: 700;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
}

.shows__search-bar {
  background-color: $color-light;
  border: none;
  padding-bottom: calc($unit-size*2);
  padding-left: calc($unit-size*2);
  padding-right: calc($unit-size*2);
  padding-top: calc($unit-size*2);
  width: calc(75%  - $unit-size*4);
}

.shows__dropdown {
  background-color: $color-main;
  border: none;
  color: $color-light;
  font-weight: 700;
  height: 31px;
  margin-top: calc($unit-size*3);
  max-width: 300px;
  width: 100%;
  @include small-breakpoint {
    max-width: fit-content;
    margin-top: 0;
  }
}

.shows__table-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
