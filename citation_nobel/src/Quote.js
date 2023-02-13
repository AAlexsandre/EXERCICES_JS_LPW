const Quote = (props) => {
    return (
        <>
            <q>{props.quote}</q>
            <p>{props.author}</p>
        </>
    );
}

export default Quote;