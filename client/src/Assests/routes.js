// import Emails from "../components/Email/email.tsx";
// import Main from "../pages/Main.tsx";

//We areusing lazy loading here to keep app performance better it will only loads the current page in the browser
import { lazy } from "react";

const Main = lazy(() => import('../pages/Main.tsx'));
const Emails = lazy(() => import('../components/Email/email.tsx'));
const ViewEmail = lazy(()=> import('../components/ViewEmail/viewEmail.tsx'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    },
    invalid: {
        path: '/*',              //* means anything which doesn't match to any url
        element: Emails
    }
};

export { routes };