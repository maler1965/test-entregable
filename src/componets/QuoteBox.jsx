
import "./styles/QuoteBox.css"

const QuoteBox = ({ phrase, handleChangeQuote }) => { //phrase viene trayendo el dato props que nesecita aqui para funcionar el codigo
    return (
        <section className="quoteBox">

            <button className="quoteBox__btn" onClick={handleChangeQuote}> Try you luck</button>

            <article className="quoteBox__phrase">
                <p>{phrase} </p>  {/* phrase trae el dato del padre*/}
            </article>

        </section>
    )
}

export default QuoteBox