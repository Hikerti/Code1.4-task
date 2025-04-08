import {Route, Routes} from "react-router-dom";
import PostersPage from "./page/PostersPage/PostersPage.tsx";
import Layout from "./components/Layout.tsx";
import AboutPage from "./page/AboutPage/AboutPage.tsx";
import GeoPage from "./page/GeoPage/GeoPage.tsx";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route path='/' element={<AboutPage />}></Route>
              <Route path='/poster' element={<PostersPage />}></Route>
              <Route path='/wheredowefind' element={<GeoPage />}></Route>
          </Route>
      </Routes>
   </>
  )
}

export default App
