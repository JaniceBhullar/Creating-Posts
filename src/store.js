import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./features/posts/PostSlice/"
import UsersReducer from "./features/users/UserSlice/"

export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer
    }
})


