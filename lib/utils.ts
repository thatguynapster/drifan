import Router from 'next/router'

/** navigate pages */
export const navigate = (pagename: string = '', query = {}, sameSite = true) => {
  console.log(pagename)
  Router.push({
    pathname: `${sameSite ? '/' : ''}${pagename}`,
    query: query
  })
}

export function validateEmail(email: string) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export async function mkPostReq(payload: {
  endpoint: string
  method: string
  token: string
  data: any
  isJSON: boolean
  queries?: string
  sameSite?: boolean
}) {
  var response = {}

  let url = `${process.env.NEXT_PUBLIC_BASE_URL}${payload.endpoint}?${payload.queries}`

  payload.sameSite && (url = `${payload.endpoint}`)

  const options: {
    method: string
    cors: string
    headers: any
    body: any
  } = {
    method: payload.method,
    cors: 'no-cors',
    headers: {},
    body: payload.data
  }

  payload.isJSON && (options.headers['Content-Type'] = 'application/json')

  const saveItem = await fetch(url, options)
  const results = await saveItem.json()

  return results
}
