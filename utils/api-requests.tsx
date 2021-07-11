import { mkPostReq } from '../lib'

export async function sendEmail(payload: any) {
  let results: any = {}

  // console.log("Requesting: ", url);

  var result = await mkPostReq({
    endpoint: `/api/send-email`,
    method: 'post',
    token: '',
    data: JSON.stringify(payload),
    isJSON: true,
    sameSite: true
  })
  console.log('email result', result)

  if (result.code === 200) {
    results.code = result.code
    results.success = true
    results.message = result.message
  } else {
    results.code = result.code || 500
    results.success = false
    results.message = result.message || 'Unexpected error occured'
  }

  return results
}
