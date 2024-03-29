import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import advertsReducer from "./adverts/slice";
import favoritesReducer from "./favorites/slice";
import filterReducer from "./filter/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
