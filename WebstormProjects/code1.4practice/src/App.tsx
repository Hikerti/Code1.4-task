import {Route, Routes} from "react-router-dom";
import PostersPage from "./page/PostersPage/PostersPage.tsx";
import Layout from "./components/Layout.tsx";
import AboutPage from "./page/AboutPage/AboutPage.tsx";
import GeoPage from "./page/GeoPage/GeoPage.tsx";
import CreateAdminPosts from "./page/AdminPages/CreateAdminPosts/CreateAdminPosts.tsx";
import LayoutAdmin from "./page/AdminPages/LayoutAdmin.tsx";
import DetailsPage from "./page/DetailsPage/DetailsPage.tsx";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<AboutPage />}></Route>
              <Route path='poster' element={<PostersPage />}></Route>
              <Route path='wheredowefind' element={<GeoPage />}></Route>
              <Route path='poster/:index' element={<DetailsPage />}></Route>
          </Route>
          <Route path='/admin' element={<LayoutAdmin/>}>
              <Route path='posts' element={<CreateAdminPosts/>}></Route>
          </Route>
      </Routes>
   </>
  )
}

export default App
