//Importing packages from React-router-dom -- Following what documentation says
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

//Deleted the logo
import './App.css';

//In order to have our files from JS run, you've gotta import them to here
import List from './pages/list';
import Article from './pages/article';

//Pass a function -- List-- through the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);

//You can call the functions from List and Article inside the "HTML"
function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
