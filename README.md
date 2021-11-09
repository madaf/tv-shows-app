# TV Shows App

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### To run tests
```
npm run test:unit path/to/file
```

## Functionality

The data that is being fetched from [TVmaze](https://www.tvmaze.com/api) is being sorted based on the rating.
You can filter the list based on the genre or by searching for a (partial) title.

You can see the app here: https://tv-shows-app.netlify.app/.

The app is built with VueJS 2. The structure is divided in two views (`TvShowsView.vue` and `TvShowDetailsView.vue`) and two components (`TvShowRow.vue` and `TvShowTable.vue`). State management is done through Vuex. For styling, `scss` was used and for unit testing - `Jest`.

* `npm` version: `8.1.0`
* `node` version: `16.13.0`
