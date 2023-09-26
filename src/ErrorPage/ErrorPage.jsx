import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen">
            <div className="">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="font-semibold text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
     <Link to='/'>  <button className="btn bg-red-100">Back to Home</button></Link>
    </div>
    </div>
    
  );
};

export default ErrorPage;
