import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Функція для вибору значення пошукового терміну зі стану
export const selectNameFilter = state => state.filters.name;

// Функція для вибору значення пошукового терміну для експорту
export const selectSearchTerm = state => state.filters.name;

export default filtersSlice.reducer;


/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name;

export default filtersSlice.reducer; */