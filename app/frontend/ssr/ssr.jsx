import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'
import createServer from '@inertiajs/server'

const pages = import.meta.globEagerDefault('../pages/*.jsx')

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  resolve: name => pages[`../pages/${name}.jsx`],
  setup: ({ App, props }) => <App {...props} />,
}))
