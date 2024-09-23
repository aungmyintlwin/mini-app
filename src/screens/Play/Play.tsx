import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"


function Play() {
  return (
    <Layout>
        <div>
            <h1>Play</h1>
            <Link to="/">Go to Home</Link>
        </div>
    </Layout>
  )
}

export default Play