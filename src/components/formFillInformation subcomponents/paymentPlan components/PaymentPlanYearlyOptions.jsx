import { useEffect } from "react"
import { updatePlanOption } from "../PaymentPlanDataInput";

export const PaymentPlanYearlyOptions = () => {
    useEffect(() => {
        const yearlyOptionArcade = document.getElementById("yearly-arcade");
        const yearlyOptionAdvanced = document.getElementById("yearly-advanced");
        const yearlyOptionPro = document.getElementById("yearly-pro");

        let isArcadeSelected = false;
        let isAdvancedSelected = false;
        let isProSelected = false;

        updatePlanOption(false);

        yearlyOptionArcade.addEventListener("click", () => {
            if (!isArcadeSelected) {
                yearlyOptionArcade.style.border = "1px solid blue";
                yearlyOptionArcade.style.backgroundColor = "hsl(228, 100%, 95%)";

                yearlyOptionAdvanced.style.border = "1px solid gray";
                yearlyOptionAdvanced.style.backgroundColor = "white";

                yearlyOptionPro.style.border = "1px solid gray";
                yearlyOptionPro.style.backgroundColor = "white";

                isArcadeSelected = !isArcadeSelected
                isAdvancedSelected = false
                isProSelected = false

                updatePlanOption(true);

            } else if (isArcadeSelected) {
                yearlyOptionArcade.style.border = "1px solid gray";
                yearlyOptionArcade.style.backgroundColor = "white";

                isArcadeSelected = !isArcadeSelected
                updatePlanOption(false);
            }
        });

        yearlyOptionAdvanced.addEventListener("click", () => {
            if (!isAdvancedSelected) {
                yearlyOptionArcade.style.border = "1px solid gray";
                yearlyOptionArcade.style.backgroundColor = "white";

                yearlyOptionAdvanced.style.border = "1px solid blue";
                yearlyOptionAdvanced.style.backgroundColor = "hsl(228, 100%, 95%)";

                yearlyOptionPro.style.border = "1px solid gray";
                yearlyOptionPro.style.backgroundColor = "white";

                isArcadeSelected = false
                isAdvancedSelected = !isAdvancedSelected
                isProSelected = false

                updatePlanOption(true);

            } else if (isAdvancedSelected) {
                yearlyOptionAdvanced.style.border = "1px solid gray";
                yearlyOptionAdvanced.style.backgroundColor = "white";

                isAdvancedSelected = !isAdvancedSelected
                updatePlanOption(false);
            }
        });

        yearlyOptionPro.addEventListener("click", () => {
            if (!isProSelected) {
                yearlyOptionArcade.style.border = "1px solid gray";
                yearlyOptionArcade.style.backgroundColor = "white";

                yearlyOptionAdvanced.style.border = "1px solid gray";
                yearlyOptionAdvanced.style.backgroundColor = "white";

                yearlyOptionPro.style.border = "1px solid blue";
                yearlyOptionPro.style.backgroundColor = "hsl(228, 100%, 95%)";

                isArcadeSelected = false
                isAdvancedSelected = false
                isProSelected = !isProSelected

                updatePlanOption(true);

            } else if (isProSelected) {
                yearlyOptionPro.style.border = "1px solid gray";
                yearlyOptionPro.style.backgroundColor = "white";

                isProSelected = !isProSelected
                updatePlanOption(false);
            }
        });
    }, []);

    return (
        <div id="payment-plan-yearly-options">
            <div className="yearly-card arcade" id="yearly-arcade">
                <div className="yearly-card-icon arcade-icon"></div>
                <div className="yearly-card-pricing">
                    <p>Arcade</p>
                    <p>$90/yr</p>
                    <p>2 months free</p>
                </div>
            </div>
            <div className="yearly-card advanced" id="yearly-advanced">
                <div className="yearly-card-icon advanced-icon"></div>
                <div className="yearly-card-pricing">
                    <p>Advanced</p>
                    <p>$120/yr</p>
                    <p>2 months free</p>
                </div>
            </div>
            <div className="yearly-card pro" id="yearly-pro">
                <div className="yearly-card-icon pro-icon"></div>
                <div className="yearly-card-pricing">
                    <p>Pro</p>
                    <p>$150/yr</p>
                    <p>2 months free</p>
                </div>
            </div>
        </div>
    )
}