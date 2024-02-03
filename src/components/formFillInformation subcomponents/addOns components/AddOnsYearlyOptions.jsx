import { useEffect } from "react"

export const AddOnsYearlyOptions = () => {

    useEffect(() => {
        const onlineServiceCheck = document.getElementById("online-service-yearly");
        const largerStorageCheck = document.getElementById("larger-storage-yearly");
        const customizableProfileCheck = document.getElementById("customizable-profile-yearly");

        // --- Target the parent = Targer the installments ---
        const onlineServiceCheckboxParent = onlineServiceCheck.parentNode; // this is the parent of the checkbox element
        const onlineServiceInstallmentParent = onlineServiceCheckboxParent.parentNode; // this is the parent of that parent (making it target the whole installment/option)

        const largerStorageCheckboxParent = largerStorageCheck.parentNode;
        const largerStorageInstallmentParent = largerStorageCheckboxParent.parentNode;

        const customizableProfileCheckboxParent = customizableProfileCheck.parentNode;
        const customizableProfileInstallmentParent = customizableProfileCheckboxParent.parentNode;
        // --- Target the parent = Targer the installments ---

        let onlineServiceValue = false;
        let largerStorageValue = false;
        let customizableProfileValue = false;

        const setOnlineService = () => {
            onlineServiceValue = !onlineServiceValue;
        }

        const setLargerStorage = () => {
            largerStorageValue = !largerStorageValue;
        }

        const setCustomizableProfile = () => {
            customizableProfileValue = !customizableProfileValue;
        }

        onlineServiceCheck.addEventListener("click", () => {

            if (!onlineServiceValue) {
                onlineServiceCheck.style.backgroundColor = "hsl(243, 100%, 62%)";
                onlineServiceCheck.style.backgroundImage = "url('src/multi-step-form-main/assets/images/icon-checkmark.svg')";
                onlineServiceCheck.style.backgroundPosition = "center";
                onlineServiceCheck.style.backgroundSize = "80%";
                onlineServiceCheck.style.backgroundRepeat = "no-repeat";

                onlineServiceInstallmentParent.style.backgroundColor = "hsl(228, 100%, 95%)";
                onlineServiceInstallmentParent.style.border = "1px solid blue";

                setOnlineService(!onlineServiceValue);
            } else {
                onlineServiceCheck.style.backgroundColor = "transparent";
                onlineServiceCheck.style.backgroundImage = "none";

                onlineServiceInstallmentParent.style.backgroundColor = "white";
                onlineServiceInstallmentParent.style.border = "1px solid gray";

                setOnlineService(!onlineServiceValue);
            }

        });

        largerStorageCheck.addEventListener("click", () => {
            if (!largerStorageValue) {
                largerStorageCheck.style.backgroundColor = "hsl(243, 100%, 62%)";
                largerStorageCheck.style.backgroundImage = "url('src/multi-step-form-main/assets/images/icon-checkmark.svg')";
                largerStorageCheck.style.backgroundPosition = "center";
                largerStorageCheck.style.backgroundSize = "80%";
                largerStorageCheck.style.backgroundRepeat = "no-repeat";

                largerStorageInstallmentParent.style.backgroundColor = "hsl(228, 100%, 95%)";
                largerStorageInstallmentParent.style.border = "1px solid blue";

                setLargerStorage(!largerStorageValue);
            } else {
                largerStorageCheck.style.backgroundColor = "white";
                largerStorageCheck.style.backgroundImage = "none";

                largerStorageInstallmentParent.style.backgroundColor = "white";
                largerStorageInstallmentParent.style.border = "1px solid gray";

                setLargerStorage(!largerStorageValue);
            }
        });

        customizableProfileCheck.addEventListener("click", () => {
            if (!customizableProfileValue) {
                customizableProfileCheck.style.backgroundColor = "hsl(243, 100%, 62%)";
                customizableProfileCheck.style.backgroundImage = "url('src/multi-step-form-main/assets/images/icon-checkmark.svg')";
                customizableProfileCheck.style.backgroundPosition = "center";
                customizableProfileCheck.style.backgroundSize = "80%";
                customizableProfileCheck.style.backgroundRepeat = "no-repeat";

                customizableProfileInstallmentParent.style.backgroundColor = "hsl(228, 100%, 95%)";
                customizableProfileInstallmentParent.style.border = "1px solid blue";

                setCustomizableProfile(!customizableProfileValue);
            } else {
                customizableProfileCheck.style.backgroundColor = "transparent";
                customizableProfileCheck.style.backgroundImage = "none";

                customizableProfileInstallmentParent.style.backgroundColor = "white";
                customizableProfileInstallmentParent.style.border = "1px solid gray";

                setCustomizableProfile(!customizableProfileValue);
            }
        });
    }, []);

    return (
        <div id="add-ons-yearly-options">
            <div className="options-card" id="option-online-service">
                <div className="checkbox-section">
                    <div className="checkbox" id="online-service-yearly"></div>
                </div>
                <div className="checkbox-label">
                    <p>Online service</p>
                    <p>Access to multiplayer games</p>
                </div>
                <div className="checkbox-pricing">
                    <p>+10$/yr</p>
                </div>
            </div>
            <div className="options-card" id="option-larger-storage">
                <div className="checkbox-section">
                    <div className="checkbox" id="larger-storage-yearly"></div>
                </div>
                <div className="checkbox-label">
                    <p>Larger storage</p>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <div className="checkbox-pricing">
                    <p>+20$/yr</p>
                </div>
            </div>
            <div className="options-card" id="option-customizable-profile">
                <div className="checkbox-section">
                    <div className="checkbox" id="customizable-profile-yearly"></div>
                </div>
                <div className="checkbox-label">
                    <p>Customizable profile</p>
                    <p>Custom theme on your profile</p>
                </div>
                <div className="checkbox-pricing">
                    <p>+20$/yr</p>
                </div>
            </div>
        </div>
    )
}