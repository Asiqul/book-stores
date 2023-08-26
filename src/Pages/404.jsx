import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
export default ErrorPage;
