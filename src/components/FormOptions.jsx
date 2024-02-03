export const Form_Options = () => {
    return (
        <div id="form-options-section">
            <Option number="1" step="STEP 1" step_category="YOUR INFO" id="step1Circle" idNumber="step1Number" />
            <Option number="2" step="STEP 2" step_category="SELECT PLAN" id="step2Circle" idNumber="step2Number" />
            <Option number="3" step="STEP 3" step_category="ADD-ONS" id="step3Circle" idNumber="step3Number" />
            <Option number="4" step="STEP 4" step_category="SUMMARY" id="step4Circle" idNumber="step4Number" />
        </div>
    )
}

const Option = (props) => {
    return (
        <div className="option">
            <div className="option-number-icon">
                <div className="option-number" id={props.id}>
                    <span id={props.idNumber}>{props.number}</span>
                </div>
            </div>
            <div className="option-description">
                <p className="steps">{props.step}</p>
                <p className="steps-category">{props.step_category}</p>
            </div>
        </div>
    )
}