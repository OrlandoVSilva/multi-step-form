import { useEffect } from "react"

export const Checkout = () => {
    useEffect(() => {
        const step1Circle = document.getElementById("step1Circle");
        const step1Number = document.getElementById("step1Number");

        const step2Circle = document.getElementById("step2Circle");
        const step2Number = document.getElementById("step2Number");

        const step3Circle = document.getElementById("step3Circle");
        const step3Number = document.getElementById("step3Number");

        const step4Circle = document.getElementById("step4Circle");
        const step4Number = document.getElementById("step4Number");

        step1Circle.style.backgroundColor = "transparent";
        step1Number.style.color = "white";

        step2Circle.style.backgroundColor = "transparent";
        step2Number.style.color = "white";

        step3Circle.style.backgroundColor = "transparent";
        step3Number.style.color = "white";

        step4Circle.style.backgroundColor = "hsl(206, 94%, 95%)";
        step4Number.style.color = "hsl(213, 96%, 18%)";
    }, [])

    return (
        <div id="checkout">
            <div id="checkout-header">
                <p>Finishing up</p>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            {/*--- Monthly CheckOut Options ---*/}
            <div id="checkout-monthly-options">
                <div className="charges"></div>
                <div className="total"></div>
            </div>
            {/*--- Monthly CheckOut Options ---*/}

            {/*--- Yearly CheckOut Options ---*/}
            {/*--- Yearly CheckOut Options ---*/}
        </div>
    )
}