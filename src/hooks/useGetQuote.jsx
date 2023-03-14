import { useEffect, useState } from "react";
import axios from 'axios'


function useGetQuote() {
    const [quoteData, setQuoteData] = useState();
    useEffect(() => {
      
        axios.get("https://api.api-ninjas.com/v1/quotes", {
            params: {
              'limit': 1,
            },
            headers: {
              'X-Api-Key': import.meta.env.VITE_API_KEY
            },
          }).then((res) => {
            setQuoteData(res.data[0])
          }).catch(err => {
            console.log(err)
            alert("Error getting the quote of the day...")
          })

    }, [])
    
    return quoteData;
}

export default useGetQuote;