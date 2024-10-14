import Main from './pages/Main.tsx';
import { BrowserRouter as Router, RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { routes } from './Assests/routes.js';
// import Error from './components/Error/error.tsx';
// import SuspenseLoader from './components/Suspense_Loader/suspenseLoader.tsx'
import { Suspense, lazy } from 'react';

const Error = lazy(() => import('./components/Error/error.tsx'))
const SuspenseLoader = lazy(() => import('./components/Suspense_Loader/suspenseLoader.tsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<Error />} />
        <Route path={`${routes.view.path}`} element={<routes.view.element />} errorElement={<Error />} />
      </Route>
      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)


function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
