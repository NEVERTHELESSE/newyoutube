import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homeskeleton from "./loading/Homeskeleton";

const Home=lazy(()=>
  import('./home/Home')
)

function App() {
  return (
    <BrowserRouter>
    {/* <Suspense fallback={<h1>loading</h1>}> */}

      <Routes>
        <Route path="/" element={<Suspense fallback={(<Homeskeleton limit={20}/>)}><Home /></Suspense>} />
      </Routes>
    {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
