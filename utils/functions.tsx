import Router from 'next/router'

export function navigate(page_name = '', query = null) {
  Router.push({
    pathname: `/${page_name}`,
    query: query
  })
}
