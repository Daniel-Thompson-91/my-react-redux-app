import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [
      { text: 'Water plants', isDone: false },
      { text: 'Make Dinner', isDone: false },
      { text: 'Finish final project', isDone: false },
    ],
    doneEntries: []
  },
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
    }
  }
});

export const {
  addJournalEntry,
  removeEntry,
  toggleEntryDone
} = journalSlice.actions;

export default journalSlice.reducer;
