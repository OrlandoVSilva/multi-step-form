import { useEffect } from "react";
import { updatePlanOption } from "../PaymentPlanDataInput";

export const PaymentPlanMonthlyOptions = () => {
    useEffect(() => {
        const monthlyOptionArcade = document.getElementById("monthly-arcade");
        const monthlyOptionAdvanced = document.getElementById("monthly-advanced");
        const monthlyOptionPro = document.getElementById("monthly-pro");

        let isArcadeSelected = false;
        let isAdvancedSelected = false;
        let isProSelected = false;

        updatePlanOption(false);

        monthlyOptionArcade.addEventListener("click", () => {
            if (!isArcadeSelected) {
                monthlyOptionArcade.style.border = "1px solid blue";
                monthlyOptionArcade.style.backgroundColor = "hsl(228, 100%, 95%)";

                monthlyOptionAdvanced.style.border = "1px solid gray";
                monthlyOptionAdvanced.style.backgroundColor = "white";

                monthlyOptionPro.style.border = "1px solid gray";
                monthlyOptionPro.style.backgroundColor = "white";

                isArcadeSelected = !isArcadeSelected
                isAdvancedSelected = false
                isProSelected = false

                updatePlanOption(true);

            } else if (isArcadeSelected) {
                monthlyOptionArcade.style.border = "1px solid gray";
                monthlyOptionArcade.style.backgroundColor = "white";

                isArcadeSelected = !isArcadeSelected;
                updatePlanOption(false);
            }
        });

        monthlyOptionAdvanced.addEventListener("click", () => {
            if (!isAdvancedSelected) {
                monthlyOptionArcade.style.border = "1px solid gray";
                monthlyOptionArcade.style.backgroundColor = "white";

                monthlyOptionAdvanced.style.border = "1px solid blue";
                monthlyOptionAdvanced.style.backgroundColor = "hsl(228, 100%, 95%)";

                monthlyOptionPro.style.border = "1px solid gray";
                monthlyOptionPro.style.backgroundColor = "white";

                isArcadeSelected = false;
                isAdvancedSelected = !isAdvancedSelected;
                isProSelected = false;

                updatePlanOption(true);

            } else if (isAdvancedSelected) {
                monthlyOptionAdvanced.style.border = "1px solid gray";
                monthlyOptionAdvanced.style.backgroundColor = "white";

                isAdvancedSelected = !isAdvancedSelected
                updatePlanOption(false);
            }
        });

        monthlyOptionPro.addEventListener("click", () => {
            if (!isProSelected) {
                monthlyOptionArcade.style.border = "1px solid gray";
                monthlyOptionArcade.style.backgroundColor = "white";

                monthlyOptionAdvanced.style.border = "1px solid gray";
                monthlyOptionAdvanced.style.backgroundColor = "white";

                monthlyOptionPro.style.border = "1px solid blue";
                monthlyOptionPro.style.backgroundColor = "hsl(228, 100%, 95%)";

                isArcadeSelected = false
                isAdvancedSelected = false
                isProSelected = !isProSelected

                updatePlanOption(true);
            } else if (isProSelected) {
                monthlyOptionPro.style.border = "1px solid gray";
                monthlyOptionPro.style.backgroundColor = "white";

                isProSelected = !isProSelected
                updatePlanOption(false);
            }
        });

    }, [])

    return (
        <div id="payment-plan-monthly-options">
            <div className="monthly-card arcade" id="monthly-arcade">
                <div className="monthly-card-icon arcade-icon"></div>
                <div className="monthly-card-pricing">
                    <p>Arcade</p>
                    <p>$9/mo</p>
                </div>
            </div>
            <div className="monthly-card advanced" id="monthly-advanced">
                <div className="monthly-card-icon advanced-icon"></div>
                <div className="monthly-card-pricing">
                    <p>Advanced</p>
                    <p>$12/mo</p>
                </div>
            </div>
            <div className="monthly-card pro" id="monthly-pro">
                <div className="monthly-card-icon pro-icon"></div>
                <div className="monthly-card-pricing">
                    <p>Pro</p>
                    <p>$15/mo</p>
                </div>
            </div>
        </div>
    )
}