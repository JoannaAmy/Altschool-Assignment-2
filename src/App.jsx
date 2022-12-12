import Navbar from "./Conponents/Navbar";
import Home from "./Conponents/Home";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./Conponents/Users";
import BlogDetails from "./Conponents/BlogOne";
import NotFound from "./Conponents/NotFound";
import BlogList from "./Conponents/BlogList";
import BlogOne from "./Conponents/BlogOne";
import BlogTwo from "./Conponents/BlogTwo";
import FetchUsers from "./Conponents/FetchUsers";
import ErrorBoundary from "./Conponents/ErrorBoundary";

import Button from "./Conponents/Button";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<FetchUsers                             />} />
          <Route path="/blogs">
            <Route index element={<BlogList />} />
            <Route path="1" element={<BlogOne />} />

            <Route path="2" element={<BlogTwo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
