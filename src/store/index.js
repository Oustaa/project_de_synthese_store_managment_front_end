import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../features/auth-slice";
import storeSlice from "../features/store-slice";
import uiSlice from "../features/ui-slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    store: storeSlice,
    ui: uiSlice,
  },
});
