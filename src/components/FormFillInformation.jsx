import { useState } from "react"

import { YourInfoDataInput } from "./formFillInformation subcomponents/YourInfoDataInput"
import { PaymentPlanDataInput } from "./formFillInformation subcomponents/PaymentPlanDataInput"
import { AddOns } from "./formFillInformation subcomponents/AddOnsInput"
import { Checkout } from "./formFillInformation subcomponents/CheckOut"

import { checkInputFields } from "./formFillInformation subcomponents/YourInfoDataInput"
import { isPaymentPlanSelected } from "./formFillInformation subcomponents/PaymentPlanDataInput"
import { isInstallmentSelected } from "./formFillInformation subcomponents/PaymentPlanDataInput"

export const Form_Fill_Information = () => {

    const [isActiveYourInfo, changeStateYourInfo] = useState(true);
    const [isActivePaymentPlan, changeStatePaymentPlan] = useState(false);
    const [isActiveAddOns, changeStateAddOns] = useState(false);
    const [isActiveCheckout, changeStateCheckout] = useState(false);

    const [installment, setInstallment] = useState("");

    const toggleModal = () => {
        if (isActiveYourInfo) {
            let inputFieldsFilled = checkInputFields();

            if (true) { // inputFieldsFilled >= 3
                changeStateYourInfo(!isActiveYourInfo);
                changeStatePaymentPlan(!isActivePaymentPlan);
            }

        } else if (isActivePaymentPlan) {

            let paymentPlanSelected = isPaymentPlanSelected;

            if (paymentPlanSelected) {
                changeStatePaymentPlan(!isActivePaymentPlan);
                changeStateAddOns(!isActiveAddOns);

                setInstallment(isInstallmentSelected)
            } else {
                console.log("Select an option");
            }

        } else if (isActiveAddOns) {
            changeStateAddOns(!isActiveAddOns);
            changeStateCheckout(!isActiveCheckout);
        }
    }

    return (
        <div id="form-fill-information-section">
            <div id="form-data-input-section">
                {isActiveYourInfo && (<YourInfoDataInput />)}
                {isActivePaymentPlan && (<PaymentPlanDataInput />)}
                {isActiveAddOns && (<AddOns installments={installment} />)}
                {isActiveCheckout && (<Checkout />)}
            </div>
            <div id="form-submit-data-section">
                <button id="button-submit-data" onClick={toggleModal}>
                    <span>Next Step</span>
                </button>
            </div>
        </div>
    )
}