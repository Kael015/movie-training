'use server'

import satellite from "../satellite"


export const getMovie = async (params?: any, type?: any) => {
  let response = {}
  await satellite
    .get(`/${type}`, {
      params: params,
    })
    .then(res => {
      response = { status: 'success', data: res }
    })
    .catch(error => {
      response = { status: 'error', data: error }
    })
    .finally(() => {})

  return response
}