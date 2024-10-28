import CurrencyCardContainer from "./currencyCard/CurrencyCardContainer"
import "../assets/styles/currency_card.css"
import CurrencyCardPart from "./currencyCard/CurrencyCardPart"
import { MdCompareArrows } from "react-icons/md";

function CurrencyCard() {
    const arrowIcoStyle = {
        fontSize: "3rem",
        fontWeight: "700",
        alignSelf: "flex-end"
    }

    return (

        <CurrencyCardContainer>
            <div className="currency__card--title">
                Exchange
            </div>
            <div className="currency__input--container">
                <CurrencyCardPart inputId="fromInput" />
                <MdCompareArrows style={arrowIcoStyle} />
                <CurrencyCardPart inputId="toInput" />

            </div>
        </CurrencyCardContainer>
    )
}

export default CurrencyCard