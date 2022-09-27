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

//Pass a function that takes an Array of objects -- List-- through the router
const router = createBrowserRouter([
  {
    //Takes us to the first page
    path: "/",
    element: <List />,
  },
  {
    //Basically, when you type in this path, you'll be redirected to another page
    //To see if it works type /article after the url
    path: "/article/:id",
    element: <Article />,
  },
]);

//You can call the functions from List and Article inside the "HTML", it's really JSX

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
