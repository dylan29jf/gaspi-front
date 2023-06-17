import { createBrowserRouter } from "react-router-dom";
import { EditProviders, Home, NewProviders, Providers } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/providers",
    element: <Providers />
  },
  {
    path: "/providers/new-provider",
    element: <NewProviders />
  },
  {
    path: "/providers/edit-provider/:id",
    element: <EditProviders />
  },
]);
