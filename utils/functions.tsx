import Router from 'next/router'

export function navigate(page_name: string = '', query: string = '') {
  Router.push({
    pathname: `/${page_name}`,
    query: query
  })
}
