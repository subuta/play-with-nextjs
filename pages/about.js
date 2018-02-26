import Layout from '../components/Layout.js'
import connext from '../hoc/connext'

export default connext()(() => (
  <Layout>
    <p>This is the about page</p>
  </Layout>
))