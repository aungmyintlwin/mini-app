import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"


function Home() {
  return (
    <Layout>
        <div>
            <h1>Home</h1>
            <Link to="/user">Go to User</Link>
        </div>
    </Layout>
  )
}

export default Home