import { useEffect } from 'react';
import { useState } from 'react';
import { PaymentPlanMonthlyOptions } from './paymentPlan components/PaymentPlanMonthlyOptions';
import { PaymentPlanYearlyOptions } from './paymentPlan components/PaymentPlanYearlyOptions';

export var isPaymentPlanSelected = false;
export var isInstallmentSelected = "monthly"; // by default is monthly
const installmentOptions = ["monthly", "yearly"];

export const updatePlanOption = (wasOptionSelected) => {
    isPaymentPlanSelected = wasOptionSelected;
}

export const PaymentPlanDataInput = () => {

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

        step2Circle.style.backgroundColor = "hsl(206, 94%, 95%)";
        step2Number.style.color = "hsl(213, 96%, 18%)";

        step3Circle.style.backgroundColor = "transparent";
        step3Number.style.color = "white";

        step4Circle.style.backgroundColor = "transparent";
        step4Number.style.color = "white";

    }, [])

    const [monthlyIsActive, toggleMonthly] = useState(true);
    const [yearlyIsActive, toggleYearly] = useState(false);

    const monthlyYearlySwitch = () => {
        const slider = document.getElementById("slider");

        if (monthlyIsActive) {
            toggleMonthly(!monthlyIsActive);
            toggleYearly(!yearlyIsActive);

            slider.style.justifyContent = "flex-end"
            isInstallmentSelected = installmentOptions[1];

        } else if (yearlyIsActive) {
            toggleMonthly(!monthlyIsActive);
            toggleYearly(!yearlyIsActive);

            slider.style.justifyContent = "flex-start"
            isInstallmentSelected = installmentOptions[0];
        }
    }

    return (
        <div id="payment-plan-data-input">
            <div id="payment-plan-header">
                <p>Select your plan</p>
                <p>You have the option of monthly or yearly billing.</p>
            </div>

            {monthlyIsActive && (<PaymentPlanMonthlyOptions />)}
            {yearlyIsActive && (<PaymentPlanYearlyOptions />)}

            <div id="payment-plan-monthly-yearly-slider">
                <p>Monthly</p>
                <div id="slider" onClick={monthlyYearlySwitch}>
                    <div id="slider-ball"></div>
                </div>
                <p>Yearly</p>
            </div>
        </div>
    )
}