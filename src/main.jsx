import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("books.json"),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "book-details/:bookId",
        element: <BookDetails />,
        loader: () => fetch("books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
