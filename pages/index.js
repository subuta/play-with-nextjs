import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { styled } from 'react-free-style'
import connext from '../hoc/connext'
import Head from 'next/head'

const withStyles = styled({
  Link: {
    color: 'red'
  }
})

const Index = withStyles((props) => {
  return (
    <Layout>
      <Head>
        <title>hoge</title>
      </Head>
      <h1 onClick={props.increment}>Batman TV Shows({props.counter})</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id} className={props.styles.Link}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
})

Index.getInitialProps = async function(ctx) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return {
    shows: data
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = {
  increment: () => ({ type: 'increment' }),
  decrement: () => ({ type: 'decrement' })
}

export default connext(mapStateToProps, mapDispatchToProps)(Index)