import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiData } from '../../types/DataType';

const API_KEY = import.meta.env.VITE_X_MASTER_KEY;
const BASE_URL = import.meta.env.VITE_API_PUBLIC_URL;

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.record;
  } catch (error) {
    console.log(error);
  }
});

interface MovieState {
  searchValue: string;
  searchResults: ApiData[];
  bookMarkedMovies: ApiData[];
  allContentData: ApiData[];
  moviesData: ApiData[];
  tvSeriesData: ApiData[];
  recomendedMovies: ApiData[];
  trendingMovies: ApiData[];
  isLoading: boolean;
}

const initialState: MovieState = {
  searchValue: '',
  searchResults: [],

  bookMarkedMovies: [],

  allContentData: [],
  recomendedMovies: [],
  trendingMovies: [],

  moviesData: [],
  tvSeriesData: [],

  isLoading: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchResults: (state, { payload }: PayloadAction<string | undefined>) => {
      if (payload === '/tv-series') {
        const filteredMovies = state.allContentData?.filter(movie => {
          return (
            movie.category === 'TV Series' &&
            movie.title.toLowerCase().includes(state.searchValue.toLowerCase())
          );
        });
        state.searchResults = filteredMovies;
      } else if (payload === '/bookmark-shows') {
        const filteredMovies = state.bookMarkedMovies?.filter(movie => {
          return movie.title.toLowerCase().includes(state.searchValue.toLowerCase());
        });
        state.searchResults = filteredMovies;
      } else if (payload === '/movies') {
        const filteredMovies = state.allContentData?.filter(movie => {
          return (
            movie.category === 'Movie' &&
            movie.title.toLowerCase().includes(state.searchValue.toLowerCase())
          );
        });
        state.searchResults = filteredMovies;
      } else {
        const filteredMovies = state.allContentData?.filter(movie => {
          return movie.title.toLowerCase().includes(state.searchValue.toLowerCase());
        });

        state.searchResults = filteredMovies;
      }
    },

    renderCurrentBookmarks: state => {
      const markedItems = state.allContentData.filter(item => item.isBookmarked);
      state.bookMarkedMovies = markedItems;
    },

    updateRecommended: (state, { payload }) => {
      const markedItem = state.recomendedMovies.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
    },

    updateSearch: (state, { payload }) => {
      const markedItem = state.searchResults.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
    },

    updateTrending: (state, { payload }) => {
      const markedItem = state.trendingMovies?.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
      // state.trendingContent = [state.trendingContent, markedItem]
    },
    updateTvSeries: (state, { payload }: PayloadAction<ApiData | undefined | number>) => {
      const markedItem = state.tvSeriesData.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
    },
    updateMovies: (state, { payload }: PayloadAction<ApiData | undefined | number>) => {
      const markedItem = state.moviesData.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
    },

    updateBookmarkedPage: (
      state,
      { payload }: PayloadAction<ApiData | undefined | number>
    ) => {
      const markedItem = state.bookMarkedMovies.find(item => item.id === payload);
      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }
    },

    updateBookMarkedMovies: (
      state,
      { payload }: PayloadAction<ApiData | undefined | number>
    ) => {
      const markedItem = state.allContentData.find(item => item.id === payload);

      if (markedItem) {
        markedItem.isBookmarked = !markedItem.isBookmarked;
      }

      if (markedItem?.isBookmarked) {
        state.bookMarkedMovies = [...state.bookMarkedMovies, markedItem];
      }

      if (!markedItem?.isBookmarked) {
        const newBookmarks = state.bookMarkedMovies.filter(
          marked => marked.id !== payload
        );
        state.bookMarkedMovies = newBookmarks;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      // all content
      state.allContentData = payload;
      // trending content
      state.trendingMovies = payload.filter((item: ApiData) => {
        return item.isTrending === true;
      });

      // recomended content
      state.recomendedMovies = payload.filter((item: ApiData) => {
        return item.isTrending !== true;
      });

      // movies content
      state.moviesData = payload.filter((item: ApiData) => {
        return item.category === 'Movie';
      });

      // tv series content

      state.tvSeriesData = payload.filter((item: ApiData) => {
        return item.category === 'TV Series';
      });
    });

    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setSearchValue,
  setSearchResults,
  renderCurrentBookmarks,
  updateBookMarkedMovies,
  updateTrending,
  updateMovies,
  updateRecommended,
  updateSearch,
  updateBookmarkedPage,
  updateTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer;
