import './App.scss'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import PostsPage from "./Pages/PostsPages/PostsPage.jsx";
import Layout from "./Layout/Layout.jsx";
import Error404 from "./Mistakes/Error404.jsx";
// import { CustomThemeProvider } from './themeContext'

export default function App() {
  return (
    <>
        <Routes>
            <Route path="/" component={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path='*' element={<Error404 />}></Route>
            </Route>
        </Routes>
    </>
  )
}

