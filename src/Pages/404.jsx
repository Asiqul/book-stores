import { useRouteError } from 'react-router-dom';
import useTitle from '../Utils/Hooks/useTitle';

function ErrorPage() {
    const error = useRouteError();
    useTitle(error.statusText || 'Oops!');

    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}
export default ErrorPage;
