import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slices/portfolioSlice";
import teamReducer from "./slices/teamSlice";
import contactReducer from "./slices/contactSlice";
import blogReducer from "./slices/blogSlice";
import testimonialReducer from "./slices/testimonialSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    team: teamReducer,
    contact: contactReducer,
    blog: blogReducer,
    testimonial: testimonialReducer,
  },
});
