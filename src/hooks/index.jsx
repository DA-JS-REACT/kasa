import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const fetchOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Accept: 'application/json',
                },
            }
            try {
                const response = await fetch(url, fetchOptions)

                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
            // fetch(url, fetchOptions)
            //     .then((res) => {
            //         console.log(res)
            //         if (res.ok) {
            //             setLoading(false)
            //             return res.json()
            //         }
            //     })
            //     .then(
            //         (result) => {
            //             setData(result)
            //         },
            //         (error) => {
            //             setLoading(true)
            //             setError(error)
            //         }
            //     )
        }

        fetchData()
    }, [])

    return { isLoading, data, error }
}
