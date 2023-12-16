import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/PostsSlice/"
import usersReducer from "./features/users/UserSlice/"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})


