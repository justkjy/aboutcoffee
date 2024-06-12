import Home from "../pages/home";
import PostPage from "../pages/posts"
import { Route, Routes, Navigate } from "react-router-dom";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:id" element={<PostPage/>} />
            </Routes>
        </>
    );
}