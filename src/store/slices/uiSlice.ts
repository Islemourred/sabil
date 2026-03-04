import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  downloadModalOpen: boolean;
  activeSection: string;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  downloadModalOpen: false,
  activeSection: "home",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    setDownloadModalOpen(state, action: PayloadAction<boolean>) {
      state.downloadModalOpen = action.payload;
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setMobileMenuOpen, setDownloadModalOpen, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
