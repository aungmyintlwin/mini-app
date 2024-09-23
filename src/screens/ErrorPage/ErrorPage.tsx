import { Link, useRouteError } from "react-router-dom"
import Layout from "../../components/layout/Layout"


function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <Layout>
        <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
          <Link to="/">Go to Home</Link>
        </div>
    </Layout>
  )
}

export default ErrorPage