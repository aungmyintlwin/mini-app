import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"


function Friend() {
  return (
    <Layout>
        <div>
            <h1>Friend</h1>
            <Link to="/">Go to Home</Link>
        </div>
    </Layout>
  )
}

export default Friend