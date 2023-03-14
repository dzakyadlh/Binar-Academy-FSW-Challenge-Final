import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/Login/reducer";
import gamelistReducer from "../pages/GameList/reducer";
import registerReducer from "../pages/Register/reducer";
import profileReducer from "../pages/Profile/reducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    games: gamelistReducer,
    register: registerReducer,
    profile: profileReducer,
  },
});
