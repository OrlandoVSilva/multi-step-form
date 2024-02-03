import { useEffect } from "react"
import { useState } from "react";

import { AddOnsMonthlyOptions } from "./addOns components/AddOnsMonthlyOptions";
import { AddOnsYearlyOptions } from "./addOns components/AddOnsYearlyOptions";

export const AddOns = (props) => {
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

        step3Circle.style.backgroundColor = "hsl(206, 94%, 95%)";
        step3Number.style.color = "hsl(213, 96%, 18%)";

        step4Circle.style.backgroundColor = "transparent";
        step4Number.style.color = "white";

    }, [])

    const monthlyOrYearlyInstallment = props.installments;
    let monthlyInstallment;
    let yearlyInstallment;

    if (monthlyOrYearlyInstallment == "monthly") {
        //console.log("monthlyOrYearlyInstallment " + monthlyOrYearlyInstallment);
        monthlyInstallment = true
        yearlyInstallment = false
    } else {
        //console.log("monthlyOrYearlyInstallment " + monthlyOrYearlyInstallment);
        monthlyInstallment = false
        yearlyInstallment = true
    }

    return (
        <div id="add-ons-input">
            <div id="add-ons-header">
                <p>Pick add-ons</p>
                <p>Add-ons help enhance your gaming experience</p>
            </div>

            {/*--- Monthly Add-Ons Options ---*/}
            {monthlyInstallment && <AddOnsMonthlyOptions />}
            {/*--- Monthly Add-Ons Options ---*/}

            {/*--- Yearly Add-Ons Options ---*/}
            {yearlyInstallment && <AddOnsYearlyOptions />}
            {/*--- Yearly Add-Ons Options ---*/}
        </div>
    )
}