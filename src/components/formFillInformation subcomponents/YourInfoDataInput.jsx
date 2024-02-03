import React, { useEffect } from 'react';

export const YourInfoDataInput = () => {

    useEffect(() => {
        const step1Circle = document.getElementById("step1Circle");
        const step1Number = document.getElementById("step1Number");

        const step2Circle = document.getElementById("step2Circle");
        const step2Number = document.getElementById("step2Number");

        const step3Circle = document.getElementById("step3Circle");
        const step3Number = document.getElementById("step3Number");

        const step4Circle = document.getElementById("step4Circle");
        const step4Number = document.getElementById("step4Number");

        step1Circle.style.backgroundColor = "hsl(206, 94%, 95%)";
        step1Number.style.color = "hsl(213, 96%, 18%)";

        step2Circle.style.backgroundColor = "transparent";
        step2Number.style.color = "white";

        step3Circle.style.backgroundColor = "transparent";
        step3Number.style.color = "white";

        step4Circle.style.backgroundColor = "transparent";
        step4Number.style.color = "white";

    }, [])

    return (
        <div id="your-info-data-input">
            <div id="your-info-header">
                <p>Personal info</p>
                <p>Please provide your name, email address and phone number.</p>
            </div>
            <div id="your-info-name">
                <div className="input-labels">
                    <p>Name</p>
                    <p>This field is required</p>
                </div>
                <div className="input-textField">
                    <input type="text" className="textField" placeholder="e.g. Stephen King"></input>
                </div>
            </div>
            <div id="your-info-email">
                <div className="input-labels">
                    <p>Email Address</p>
                    <p>This field is required</p>
                </div>
                <div className="input-textField">
                    <input type="text" className="textField" placeholder="e.g. stephenking@lorem.com"></input>
                </div>
            </div>
            <div id="your-info-phoneNumber">
                <div className="input-labels">
                    <p>Phone Number</p>
                    <p>This field is required</p>
                </div>
                <div className="input-textField">
                    <input type="text" className="textField" placeholder="e.g. +1 234 567 890"></input>
                </div>
            </div>
        </div>
    )
}

export const checkInputFields = () => {
    const inputFields = document.getElementsByClassName("textField");
    var inputFieldsFilled = 0;

    for (let i = 0; i < inputFields.length; i++) {
        let inputField = inputFields[i]; // Input textboxes
        let inputFieldValue = inputField.value; // The value of the textboxes

        let inputFieldDiv = inputField.parentNode; // The parent element of the textboxes
        let inputLabelDiv = inputFieldDiv.previousSibling; // The sibling element (that holds the labels) of the parent element of the textboxes
        let hiddenLabel = inputLabelDiv.lastChild;

        if (inputFieldValue.length <= 0) {
            hiddenLabel.style.color = "red";
            hiddenLabel.style.display = "block";
            inputField.style.border = "1px solid red";
        } else {
            hiddenLabel.style.color = "red";
            hiddenLabel.style.display = "none";
            inputField.style.border = "1px solid lightgray";

            inputFieldsFilled++;
        }
    }
    return inputFieldsFilled;
}