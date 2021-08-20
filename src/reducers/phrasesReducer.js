// Action Types
import {
  FETCH_PHRASE_SUCCESS,
  DELETE_PHRASE_SUCCESS,
  UPDATE_PHRASE_SUCCESS,
} from '../actions/actionTypes';

import { getNewState } from '../shared/utils/frontend';

// Initial State
// keep it empty to begin with.
const initialState = {
  phrases: []
};

////////////////////////////////////////////////////////////////////////////////
// i honestly do not understand this well enough.

export default function phrasesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHRASE_SUCCESS: {
      const { payload: phrase } = action;

      const newPhrases = [...state.phrases, phrase];

      return getNewState(state, {
        phrases: newPhrases
      });
    }

    case DELETE_PHRASE_SUCCESS: {
      const { payload: deletedPhrase } = action;

      const filteredPhrases = state.phrases.filter(phrase => phrase.key !== deletedPhrase.key);

      return getNewState(state, {
        phrases: filteredPhrases
      });
    }

    case UPDATE_PHRASE_SUCCESS: {
      const { payload: updatedPhrase } = action;

      const index = state.phrases.findIndex(
        phrase => phrase.key === updatedPhrase.key
      );

      state.phrases[index] = updatedPhrase;

      return getNewState({}, {
        phrases: state.phrases
      });
    }

    default:
     return state;
  }
};
