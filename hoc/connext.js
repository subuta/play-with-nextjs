import React from 'react'
import { Provider, connect } from 'react-redux'
import Head from 'next/head'
import _ from 'lodash'
import createStore from '../store'

// 各requestの度にstoreをresetする仕組み。
// it auto-creates Redux store when getInitialProps is called by Next.js and then passes this store down to React Redux's Provider, which is used to wrap the original component, also automatically. On the client side it also takes care of using same store every time, whereas on server new store is created for each request.
const store = createStore()

// https://github.com/blakeembrey/react-free-style
const customScript = (initialState = {}) => `
  window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
`

export default function (...args) {
  return (Component) => {
    const Connected = connect.apply(this, args)(Component)

    let render = (props) => {
      return (
        <Provider store={store}>
          <React.Fragment>
            <Head>
              <script dangerouslySetInnerHTML={{__html: customScript(props.initialState)}}/>
            </Head>

            <Connected {...props} />
          </React.Fragment>
        </Provider>
      )
    }

    render.getInitialProps = async (ctx) => {
      const fn = Component.getInitialProps || _.noop

      // inject redux methods to ctx
      ctx.getState = store.getState
      ctx.dispatch = store.dispatch

      const props = await fn(ctx)
      const initialState = store.getState()

      // return final props.
      return {
        ...props,
        initialState
      }
    }

    return render
  }
}