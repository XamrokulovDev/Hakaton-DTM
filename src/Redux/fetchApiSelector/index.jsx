import { createSelector } from 'reselect';

const selectFetchState = (state) => state.fetch;

export const selectSections = createSelector(
  [selectFetchState],
  (fetchState) => fetchState ? fetchState.sections : []
);

export const selectStatus = createSelector(
  [selectFetchState],
  (fetchState) => fetchState ? fetchState.status : null
);

export const selectError = createSelector(
  [selectFetchState],
  (fetchState) => fetchState ? fetchState.error : null
);