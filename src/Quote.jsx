import useGetQuote from "./hooks/useGetQuote";

function Quote() {
    const quoteData = useGetQuote();
    return (
        <>
            <h1>The Quote of the day is:</h1>
            {
                quoteData &&
                <>
                    <p className='quote'>"{quoteData.quote}"</p>
                    <p className='author-subject'>Spoken by {quoteData.author}</p>
                </>
            }

        </>
    );
}

export default Quote;