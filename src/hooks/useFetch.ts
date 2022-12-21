import { useCallback, useState } from 'react';

export const UseFetch = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  
  const request = useCallback(async (url: RequestInfo | URL, options: RequestInit | undefined) => {
    let response: any;
    let json: any;
    
    const checkResponse = (response: any) => {
      if (!response.ok) throw Error(json.message)
    }
    
    try {
      setError('')
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      checkResponse(response)
    } catch (error: any) {
      json = null
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
      return {response, json}
    }
  }, [])
  
  return {data, error, loading, request};
};
