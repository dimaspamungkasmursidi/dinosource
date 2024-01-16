// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    // const error = useRouteError();
    return ( 
        <div id="error-page">
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-secondary px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
            <Link to="/"
                class="relative inline-block text-sm font-medium text-secondary group active:text-secondary focus:outline-none focus:ring"
            >
                <span
                class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <router-link to="/">Go Home</router-link>
                </span>
            </Link>
            </button>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </main>
        </div>
     );
}
 
export default ErrorPage;