import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"


function User() {
  return (
    <Layout>
        <div>
        <h1>User</h1>
        <Link to="/">Go to Home</Link>
        </div>
    </Layout>
  )
}

export default User