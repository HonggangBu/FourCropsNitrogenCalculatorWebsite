
//////////////////////  MAIN FUNCTION  /////////////////////////////
$(function () {
    "use strict";

    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });

    // main navigation buttons click/switch
    SwitchActiveLink();

    // auto collapse the main collapsible nav button
    AutoCollapseCollapsibleNavBtn();


    //sunflower functions//
    GetSunflowerNewDataTables();
    AddOptions($("#sfNitrogenPriceSelect"), 0.2, 0.1, 2.0, 1, 4); // auto add nitrogen cost list
    OnSunflowerCalculateBtnClicked(); // on Sunflower Calculate Btn Clicked, display result

    //corn functions//
    AddOptions($("#cornPriceSelect"), 2, 1, 12, 0, 6); // auto add corn price list
    AddOptions($("#cornNitrogenPriceSelect"), 0.2, 0.1, 2.0, 1, 4); // auto add nitrogen cost list
    OnCornRegionChange(); // hide or show tillage div and soil texture div when region selection is changed 
    OnCornTillChange(); // hide or show the division of soil texture based on the change of tillage selection
    OnCornIrrigationChange(); // hide or show the division of non-irrigation calculation part in response to user selection of irrigated/non-irrigated
    OnCornCalculateBtnClicked(); // on corn Calculate Btn Clicked, display result

    //wheat & durum functions//
    AddOptions($("#wheatPriceSelect"), 3, 1, 15, 0, 8); // auto add wheat price list
    AddOptions($("#wheatNitrogenPriceSelect"), 0.2, 0.1, 2.0, 1, 4); // auto add nitrogen cost list
    OnWheatCalculateBtnClicked(); // on wheat Calculate Btn Clicked, display result

    //barley functions//
    GetBarleyNewDataTables();
    AddOptions($("#barleyPriceSelect"), 3, 1, 10, 0, 4); // auto add barley price list
    AddOptions($("#barleyNitrogenPriceSelect"), 0.2, 0.1, 2.0, 1, 4); // auto add nitrogen cost list
    OnBarleyCalculateBtnClicked(); // on barley Calculate Btn Clicked, display result

    // Get the element with id="defaultOpen" in the About section and click on it
    document.getElementById("defaultOpen").click();

    // pop the zoomable map when user clicks on the image
    ImagePopup();
});

// #region All Sub Functions


// #region Common Sub Functions
/**
 * Opens a specific tab and displays its content while hiding others.
 * Specifically, this function is used to control the navigations in the "About" page
 * 
 * @param {Event} evt - The event object triggered by the tab click.
 * @param {string} tabName - The ID of the tab content to be displayed.
 *
 * @returns {void} This function does not return a value. It modifies the DOM to show the selected tab's content.
 *
 * @description
 * The `openTab` function is used to manage the display of tabbed content on a webpage. When a tab is clicked,
 * it hides all other tab contents and displays the content associated with the clicked tab. It also updates
 * the active tab's styling by adding the "active" class to the clicked tab and removing it from others.
 *
 * @example
 * // HTML structure:
 * // <button class="tablinks" onclick="openTab(event, 'Tab1')">Tab 1</button>
 * // <div id="Tab1" class="tabcontent">Content for Tab 1</div>
 *
 * // JavaScript usage:
 * openTab(event, 'Tab1');
 */function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/**
 * Switches the active link and displays the corresponding content.
 * set main navigaion bar active button
 * and show or hide corresponding contents

 * @returns { void} This function does not return a value.It directly modifies the DOM by adding or removing classes from elements.
 */
function SwitchActiveLink() {
    const navBtns = document.getElementById("navBtns");
    const links = navBtns.getElementsByClassName("nav-link");
    //const sections = ["about", "corn", "wheat", "sunflower", "barley"];
    const sections = document.getElementsByClassName("section"); // Get all elements with the class "section"

    Array.from(links).forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from current active link
            document.querySelector(".nav-link.active").classList.remove("active");

            // Add active class to clicked link
            this.classList.add("active");

            // Hide all sections
            Array.from(sections).forEach(section => {
                section.style.display = "none";
            });

            // Show the corresponding section
            const targetSection = this.getAttribute("data-target");
            document.getElementById(targetSection).style.display = "block";
        });
    });
}

/**
 * Automatically collapses the main collapsible navigation button when a link is clicked.
 * 
 * @returns {void}
 */
function AutoCollapseCollapsibleNavBtn() {
    var navLinks = document.querySelectorAll('.nav-link');
    var navCollapse = document.getElementById('collapsibleNavbar');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
}

/**
 * Pops up the map when the user clicks on the image, allowing zooming and closing.
 * 
 * @returns {void}
 */
function ImagePopup() {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popupImage');
    var closeBtn = document.getElementsByClassName('close')[0];

    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup-trigger')) {
            popup.style.display = "flex"; // Use flex display to center the content
            popupImage.src = event.target.src;
        }
    });

    closeBtn.onclick = function () {
        popup.style.display = "none";
    }

    popup.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }

    // Optional: Add zoom functionality
    var scale = 1;
    popupImage.onwheel = function (event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            scale += 0.1;
        } else {
            scale -= 0.1;
        }
        scale = Math.min(Math.max(0.5, scale), 3); // Set limits for zoom
        popupImage.style.transform = `scale(${scale})`;
    }
}

// dynamically add select control (drop list) options
/**
 * Adds options to a select control (drop-down list) dynamically.
 *
 * @param {HTMLElement} selectControl - The DOM element representing the select control to which options will be added.
 * @param {number} startValue - The initial numeric value for the first option.
 * @param {number} increment - The amount by which each subsequent option's value will increase.
 * @param {number} endValue - The maximum numeric value for the options.
 * @param {number} precision - The number of decimal places to which each option's value should be rounded.
 * @param {number} selectedIndex - The index of the option that should be selected by default.
 *
 * @returns {void} This function does not return a value. It directly modifies the DOM by appending options to the select control.
 *
 * @example
 * // Adds options ranging from 0 to 10 with an increment of 1 and a precision of 2 decimal places,
 * // and selects the option at index 5 by default.
 * AddOptions(mySelectElement, 0, 1, 10, 2, 5);
 */
function AddOptions(selectControl, startValue, increment, endValue, precision, selectedIndex) {
    var optTemp, v;
    var len = Math.floor((endValue - startValue) / increment) + 1;
    for (let i = 0; i < len; i++) {
        v = startValue + i * increment;
        v = Number(v).toFixed(precision);
        if (i == selectedIndex) {
            optTemp = "<option selected = 'true' value= i>" + v + "</option>";
        }
        else {
            optTemp = "<option value= i>" + v + "</option>";
        }

        selectControl.append(optTemp);
    }
}

/**
 * Retrieves the nitrate credit value from a specified input control.
 *
 * This function accesses an HTML input element by its ID, retrieves its current value,
 * and processes it as the nitrate credit for soil testing purposes.
 *
 * @param {string} inputControlId - The ID of the HTML input element from which to retrieve the nitrate credit value.
 *
 * @returns {number|string} The value of the nitrate credit from the specified input control. The return type depends on the input's value type.
 *
 * @description
 * The `GetSoilTestNitrateCredit` function is designed to interact with the DOM to fetch the value of a specific input control.
 * It uses jQuery to select the input element by its ID and retrieve its current value. This value is intended to represent
 * the nitrate credit obtained from soil testing, which can be used in further calculations or displayed to the user.
 *
 * @example
 * // Assuming there is an input element with ID 'nitrateInput' in the HTML:
 * let nitrateCredit = GetSoilTestNitrateCredit('nitrateInput');
 * console.log(nitrateCredit); // Outputs the value of the input element with ID 'nitrateInput'
 */
function GetSoilTestNitrateCredit(inputControlId) {
    let v = $("#" + inputControlId).val();
    return v > 0 ? v : 0;
}

/**
 * Returns the previous crop nitrogen credit value.
 * 
 * @param {string} SelectGroupId - The ID of the select group control.
 * @returns {string} Previous crop nitrogen credit value.
 */
function GetPreviousCropNitrogenCredit(SelectGroupId) {
    let gc = "#" + SelectGroupId;
    //var selectedIndex = $(gc).prop("selectedIndex");
    return $(gc).val();
}

/**
 * Retrieves the value from an input control.
 * 
 * @param {string} inputControlId - The ID of the input control.
 * @returns {number} The value of the input control, or 0 if the value is not greater than 0.
 */
function GetInputValue(inputControlId) {
    let v = $("#" + inputControlId).val();
    return v > 0 ? v : 0;
}

/**
 * Calculates and returns the soil organic matter nitrogen credit.
 * 
 * @param {string} inputControlId - The ID of a specific percentage organic matter input control for organic matter percentage.
 * @returns {number} The calculated organic matter credit based on the input value.
 */
function GetOrganicMatterCredit(inputControlId) {
    let inputValue = $("#" + inputControlId).val();
    var thresholdLow = 6.0;
    var thresholdHigh = 7.0;
    var credit = 0;
    if ((inputValue >= thresholdLow) && (inputValue < thresholdHigh)) {
        credit += 50;
    }
    if (inputValue >= thresholdHigh) {
        credit += 100;
    }
    return credit;
}

/**
 * Retrieves the base value from a matrix or table based on crop price and nitrogen price indices.
 * 
 * @param {Array} baseTable - The base table containing the values.
 * @param {string} cropPriceSelectControlId - The ID of the crop price select control.
 * @param {string} nitrogenPriceSelectControlId - The ID of the nitrogen price select control.
 * @returns {number} The base value from the table corresponding to the selected indices.
 */
function GetBaseValue(baseTable, cropPriceSelectControlId, nitrogenPriceSelectControlId) {
    let baseValue;
    let cropPriceIndex = parseInt($("#" + cropPriceSelectControlId).prop("selectedIndex"));
    let nitrogenPriceIndex = parseInt($("#" + nitrogenPriceSelectControlId).prop("selectedIndex"));
    baseValue = baseTable[cropPriceIndex][nitrogenPriceIndex];
    return baseValue;
}

/**
 * Retrieves a modified new base value from a data table by adding a difference to the base value.
 * 
 * @param {Array} baseTable - The base table containing the values.
 * @param {string} cropPriceSelectControlId - The ID of the crop price select control.
 * @param {string} nitrogenPriceSelectControlId - The ID of the nitrogen price select control.
 * @param {number} difference - The difference to add to the base value.
 * @returns {number} The modified base value.
 */
function GetNewBaseValue(baseTable, cropPriceSelectControlId, nitrogenPriceSelectControlId, difference) {
    let v = GetBaseValue(baseTable, cropPriceSelectControlId, nitrogenPriceSelectControlId);
    /* if (v > 0) {
        v += difference;
    } */
    v += difference;
    return v;
}

/**
 * This is the main function for calculating the final result.
 * Calculates the final result by subtracting credits from the base value.
 * 
 * @param {number} baseValue - The base value before credits.
 * @param {number} soilTestNitrateCredit - The soil test nitrate credit.
 * @param {number} organicMatterCredit - The organic matter credit.
 * @param {number} prevCropCredit - The previous crop credit.
 * @returns {number} The final result after subtracting credits, or 0 if the result is negative.
 */
function GetFinalResult(baseValue, soilTestNitrateCredit, organicMatterCredit, prevCropCredit) {
    let v = Math.round(baseValue - soilTestNitrateCredit - organicMatterCredit - prevCropCredit);
    return v > 0 ? v : 0;
}

/**
 * Calculates new table values based on an existing table and a desired difference.
 * 
 * @param {Array} existingTable - The existing table to modify.
 * @param {number} difference - The difference to add to each value in the table.
 * @returns {Array} A new table with modified values.
 */
function GetNewTable(existingTable, difference) {
    let newTable = JSON.parse(JSON.stringify(existingTable)); //deep copy, only copy value without reference
    let rowNum = existingTable.length;
    let colNum = existingTable[0].length;
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (newTable[i][j] > 0) {
                newTable[i][j] += difference;
                if (newTable[i][j] < 0) {
                    newTable[i][j] = 0;
                }
            }
        }
    }
    return newTable;
}


/**
 * Sends an array of values to another page via URL parameters.
 * 
 * @param {Array} valuesArray - The array of values to send.
 * @param {string} targetPage - The target page to which the values will be sent.
 * @returns {void}
 */
function sendValues(valuesArray, targetPage) {
    // Convert array to JSON string and encode it
    const encodedValues = encodeURIComponent(JSON.stringify(valuesArray));

    // Pass the encoded array in the URL
    const url = `${targetPage}?data=${encodedValues}`;

    window.open(url, '_blank'); // Open in a new tab
}

/**
 * Retrieves the text of the selected radio button.
 * 
 * @param {string} radioName - The name of the radio button group.
 * @returns {string|null} The text of the selected radio button, or null if none is selected.
 */
function GetSelectedRadioText(radioName) {
    // Get all radio buttons with the specified name
    var radioButtons = document.querySelectorAll(`input[name="${radioName}"]`);

    // Loop through the radio buttons to find the selected one
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // Return the text content of the associated label
            return radioButtons[i].labels[0].textContent.trim();
        }
    }

    // Return null if no radio button is selected
    return null;
}


/**
 * Retrieves the text of the selected option in a select control.
 * 
 * @param {string} selectID - The ID of the select control.
 * @returns {string} The text of the selected option.
 */
function GetSelectedOptionText(selectID) {
    var selectElement = document.getElementById(selectID);

    // Get the selected option's text
    return selectElement.options[selectElement.selectedIndex].text;
}
// #endregion


// #region Sunflower Sub Functions
/**
 * Calculates the rest of the sunflower base table values based on existing table values.
 * 
 * @returns {void}
 */
function GetSunflowerNewDataTables() {
    const sfConvTillDiff = 50;
    const sfMinNotillDiff = 20;
    const sfLangdonDiff = -40;
    sunflowerWesternOilseedConventionaltill = GetNewTable(sunflowerWesternOilseedLongtermnotill, sfConvTillDiff);
    sunflowerWesternConfectionConventionaltill = GetNewTable(sunflowerWesternConfectionLongtermnotill, sfConvTillDiff);
    sunflowerWesternConfectionMinimalnotill = GetNewTable(sunflowerWesternConfectionConventionaltill, sfMinNotillDiff);
    sunflowerWesternOilseedMinimalnotill = GetNewTable(sunflowerWesternOilseedConventionaltill, sfMinNotillDiff);
    sunflowerEasternConfectionMinimalnotill = GetNewTable(sunflowerEasternConfectionConventionaltill, sfMinNotillDiff);
    sunflowerEasternOilseedMinimalnotill = GetNewTable(sunflowerEasternOilseedConventionaltill, sfMinNotillDiff);
    sunflowerLangdonConfectionConventionaltill = GetNewTable(sunflowerEasternConfectionConventionaltill, sfLangdonDiff);
    sunflowerLangdonOilseedConventionaltill = GetNewTable(sunflowerEasternOilseedConventionaltill, sfLangdonDiff);
    sunflowerLangdonConfectionLongtermnotill = GetNewTable(sunflowerEasternConfectionLongtermnotill, sfLangdonDiff);
    sunflowerLangdonOilseedLongtermnotill = GetNewTable(sunflowerEasternOilseedLongtermnotill, sfLangdonDiff);
    sunflowerLangdonConfectionMinimalnotill = GetNewTable(sunflowerEasternConfectionMinimalnotill, sfLangdonDiff);
    sunflowerLangdonOilseedMinimalnotill = GetNewTable(sunflowerEasternOilseedMinimalnotill, sfLangdonDiff);
}

/**
 * Retrieves the string combination of sunflower region, type, and tillage based on user selection.
 * 
 * @returns {string} The combination of user selections for sunflower region, type, and tillage.
 */
function GetSunflowerRegionTillageSeedSelectionCombination() {
    let selections = "";
    selections = $("input[name='sfRegion']:checked").val() + "_"
        + $("input[name='sfType']:checked").val() + "_"
        + $("input[name='sfTillage']:checked").val();
    return selections;
}

/**
 * Retrieves the sunflower base table (N recommendation table before credits) based on user selection.
 * 
 * @param {string} userSelection - The user's selection for sunflower region, type, and tillage.
 * @returns {Array} The base table corresponding to the user's selection.
 */
function GetSunflowerValueTable(userSelection) {
    let tb;
    switch (userSelection) {
        case "west_confection_longNoTill":
            //tb = sunflowerWesternConfectionLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternConfectionLongtermnotill));
            break;
        case "west_confection_convTill":
            //tb = sunflowerWesternConfectionConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternConfectionConventionaltill));
            break;
        case "west_confection_minNoTill":
            //tb = sunflowerWesternConfectionMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternConfectionMinimalnotill));
            break;
        case "west_oilseed_longNoTill":
            //tb = sunflowerWesternOilseedLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternOilseedLongtermnotill));
            break;
        case "west_oilseed_convTill":
            //tb = sunflowerWesternOilseedConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternOilseedConventionaltill));
            break;
        case "west_oilseed_minNoTill":
            //tb = sunflowerWesternOilseedMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerWesternOilseedMinimalnotill));
            break;
        case "east_confection_longNoTill":
            //tb = sunflowerEasternConfectionLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternConfectionLongtermnotill));
            break;
        case "east_confection_convTill":
            //tb = sunflowerEasternConfectionConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternConfectionConventionaltill));
            break;
        case "east_confection_minNoTill":
            //tb = sunflowerEasternConfectionMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternConfectionMinimalnotill));
            break;
        case "east_oilseed_longNoTill":
            //tb = sunflowerEasternOilseedLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternOilseedLongtermnotill));
            break;
        case "east_oilseed_convTill":
            //tb = sunflowerEasternOilseedConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternOilseedConventionaltill));
            break;
        case "east_oilseed_minNoTill":
            //tb = sunflowerEasternOilseedMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerEasternOilseedMinimalnotill));
            break;
        case "langdon_confection_longNoTill":
            //tb = sunflowerLangdonConfectionLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonConfectionLongtermnotill));
            break;
        case "langdon_confection_convTill":
            //tb = sunflowerLangdonConfectionConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonConfectionConventionaltill));
            break;
        case "langdon_confection_minNoTill":
            //tb = sunflowerLangdonConfectionMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonConfectionMinimalnotill));
            break;
        case "langdon_oilseed_longNoTill":
            //tb = sunflowerLangdonOilseedLongtermnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonOilseedLongtermnotill));
            break;
        case "langdon_oilseed_convTill":
            //tb = sunflowerLangdonOilseedConventionaltill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonOilseedConventionaltill));
            break;
        case "langdon_oilseed_minNoTill":
            //tb = sunflowerLangdonOilseedMinimalnotill.slice();
            tb = JSON.parse(JSON.stringify(sunflowerLangdonOilseedMinimalnotill));
            break;
        default:
            alert("Something is wrong!");
    }
    return tb;
}

/**
 * Collects sunflower data for display in PDF.
 * 
 * @param {number} calculatedResult - The calculated result to be displayed.
 * @returns {Array} An array containing the collected data for display.
 */
function CollectSunflowerData(calculatedResult) {
    const value1 = GetSelectedOptionText("sfPriceSelect");
    const value2 = GetSelectedOptionText("sfNitrogenPriceSelect");
    const value3 = GetInputValue("sfOrganicMatterInput");
    const value4 = GetInputValue("sfSoilTestNitrateInput");
    const value5 = GetSelectedOptionText("sfPreviousCropSelect");
    const value6 = GetSelectedRadioText("sfRegion");
    const value7 = GetSelectedRadioText("sfTillage");
    const value8 = GetSelectedRadioText("sfType");

    return [calculatedResult, value1, value2, value3, value4, value5, value6, value7, value8];
}

/**
 * Handles the sunflower calculate button click event, calculates the result, and displays it.
 * 
 * @returns {void}
 */
function OnSunflowerCalculateBtnClicked() {
    $("#sfCalculateBtn").click(function () {
        let userSelectionStr = GetSunflowerRegionTillageSeedSelectionCombination();
        let baseValueTable = GetSunflowerValueTable(userSelectionStr);
        let finalResult = GetFinalResult(GetBaseValue(baseValueTable, "sfPriceSelect", "sfNitrogenPriceSelect"), GetSoilTestNitrateCredit("sfSoilTestNitrateInput"),
            GetOrganicMatterCredit("sfOrganicMatterInput"), GetPreviousCropNitrogenCredit("sfPreviousCropSelect"));

        sendValues(CollectSunflowerData(finalResult), 'htmls/sunflowerResult.html');
    });
}

// #endregion


// #region Corn SUB FUNCTIONS

/**
 * Hide or show division based on irrigation default selection or selection change.
 * 
 * @returns {void}
 */
function OnCornIrrigationChange() {
    CornIrrigationResponse();
    $("input[name='cornIrrigation']").on("change", function () {
        CornIrrigationResponse();
    });
}

/**
 * Hides or shows the non-irrigation related division based on irrigation selection.
 * 
 * @returns {void}
 */
function CornIrrigationResponse() {
    if ($("input[name='cornIrrigation']:checked").val() === 'nonIrrigated') {
        $("#nonIrrigationRelatedDiv").show();
    }
    else {
        $("#nonIrrigationRelatedDiv").hide();
    }
}

/**
 * Hides or shows the tillage and soil texture divisions based on region selection.
 * 
 * @returns {void}
 */
function OnCornRegionChange() {
    CornRegionResponse();
    $("input[name='cornRegion']").on("change", function () {
        CornRegionResponse();
    });
}

// hide or show tillage div and soil texture div based on region selection 
/**
 * Hides or shows the tillage and soil texture divisions based on region selection.
 * sub function of "OnCornRegionChange()"
 * 
 * @returns {void}
 */
function CornRegionResponse() {
    if ($("input[name='cornRegion']:checked").val() === 'westND') {
        $("#tillDiv").hide();
        $("#soilTextureDiv").hide();
    }
    else if ($("input[name='cornRegion']:checked").val() === 'eastND') {
        $("#tillDiv").show();
        CornTillResponse();
    }
    else {
        $("#tillDiv").show();
        $("#soilTextureDiv").hide();
    }
}


/**
 * Hides or shows the soil texture division based on tillage selection.
 * 
 * @returns {void}
 */
function OnCornTillChange() {
    CornTillResponse();
    $("input[name='cornTill']").on("change", function () {
        CornTillResponse();
    });
}

/**
 * Hides or shows the soil texture division based on tillage selection.
 * subfunction of "OnCornTillChange"
 * 
 * @returns {void}
 */
function CornTillResponse() {
    if ($("input[name='cornRegion']:checked").val() === 'eastND') {
        if ($("input[name='cornTill']:checked").val() === 'longNoTill') {
            $("#soilTextureDiv").hide();
        }
        else {
            $("#soilTextureDiv").show();
        }
    }
}

/**
 * Retrieves the string combination of corn irrigation, region, tillage, and soil texture based on user selection.
 * 
 * @returns {string} The combination of user selections for corn irrigation, region, tillage, and soil texture.
 */
function GetCornUserSelectionStringCombination() {
    let str = "";
    if ($("input[name='cornIrrigation']:checked").val() == "irrigated") {
        str = "irrigated";
    }
    else {
        if ($("input[name='cornRegion']:checked").val() == "westND") {
            str = "westND";
        }
        else {
            str = $("input[name='cornRegion']:checked").val() + "_" + $("input[name='cornTill']:checked").val();
            if (($("input[name='cornRegion']:checked").val() == "eastND") && ($("input[name='cornTill']:checked").val() != "longNoTill")) {
                str += "_" + $("input[name='cornSoilTexture']:checked").val();
            }
        }
    }
    return str;
}


/**
 * Retrieves the corn nitrogen recommendation base value before credits from the corresponding base table.
 * 
 * @param {string} userCornSelection - The user's selection for corn irrigation, region, tillage, and soil texture.
 * @returns {number} The base value corresponding to the user's selection.
 */
function GetCornBaseValue(userCornSelection) {
    let v = 0;
    const minNoTillDiff = 20;
    const longNoTillDiff = -50;
    switch (userCornSelection) {
        case "irrigated":
            v = GetBaseValue(cornIrrigated, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "westND":
            v = GetBaseValue(cornWestLongNoTill, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "langdon_longNoTill":
            v = GetNewBaseValue(cornLangdonConvTill, "cornPriceSelect", "cornNitrogenPriceSelect", longNoTillDiff);
            break;
        case "langdon_convTill":
            v = GetBaseValue(cornLangdonConvTill, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "langdon_minNoTill":
            v = GetNewBaseValue(cornLangdonConvTill, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
        case "centralND_longNoTill":
            v = GetNewBaseValue(cornCentralConvTill, "cornPriceSelect", "cornNitrogenPriceSelect", longNoTillDiff);
            break;
        case "centralND_convTill":
            v = GetBaseValue(cornCentralConvTill, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "centralND_minNoTill":
            v = GetNewBaseValue(cornCentralConvTill, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
        case "eastND_longNoTill":
            v = GetBaseValue(cornEastLongNoTill, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "eastND_convTill_mediumTextureLowRisk":
            v = GetBaseValue(cornEastConvTillMediumTextureLowRisk, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "eastND_convTill_highClayLowRisk":
            v = GetBaseValue(cornEastConvTillHighClayLowRisk, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "eastND_convTill_highClayHighRisk":
            v = GetBaseValue(cornEastConvTillHighClayHighRisk, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "eastND_convTill_mediumTextureHighRisk":
            v = GetBaseValue(cornEastConvTillMediumTextureHighRisk, "cornPriceSelect", "cornNitrogenPriceSelect");
            break;
        case "eastND_minNoTill_mediumTextureLowRisk":
            v = GetNewBaseValue(cornEastConvTillMediumTextureLowRisk, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
        case "eastND_minNoTill_highClayLowRisk":
            v = GetNewBaseValue(cornEastConvTillHighClayLowRisk, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
        case "eastND_minNoTill_highClayHighRisk":
            v = GetNewBaseValue(cornEastConvTillHighClayHighRisk, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
        case "eastND_minNoTill_mediumTextureHighRisk":
            v = GetNewBaseValue(cornEastConvTillMediumTextureHighRisk, "cornPriceSelect", "cornNitrogenPriceSelect", minNoTillDiff);
            break;
    }
    return v;
}


/**
 * Collects corn data for display in PDF.
 * 
 * @param {number} calculatedResult - The calculated result to be displayed.
 * @returns {Array} An array containing the collected data for display.
 */
function CollectCornData(calculatedResult) {
    const value1 = GetSelectedOptionText("cornPriceSelect");
    const value2 = GetSelectedOptionText("cornNitrogenPriceSelect");
    const value3 = GetInputValue("cornOrganicMatterInput");
    const value4 = GetInputValue("cornSoilTestNitrateInput");
    const value5 = GetSelectedOptionText("cornPreviousCropSelect");
    const value6 = GetSelectedRadioText("cornIrrigation");
    let value7 = 'N/A';
    let value8 = 'N/A';
    let value9 = 'N/A';

    if ($("input[name='cornIrrigation']:checked").val() == "irrigated") {
        value7 = 'N/A';
        value8 = 'N/A';
        value9 = 'N/A';
    }
    else {
        if ($("input[name='cornRegion']:checked").val() == "westND") {
            value7 = GetSelectedRadioText("cornRegion");
            value8 = 'N/A';
            value9 = 'N/A';
        }
        else {
            value7 = GetSelectedRadioText("cornRegion");
            value8 = GetSelectedRadioText("cornTill");
            value9 = 'N/A';
            if (($("input[name='cornRegion']:checked").val() == "eastND") && ($("input[name='cornTill']:checked").val() != "longNoTill")) {
                value9 = GetSelectedRadioText("cornSoilTexture");
            }
        }
    }

    return [calculatedResult, value1, value2, value3, value4, value5, value6, value7, value8, value9];
}



/**
 * Handles the corn calculate button click event, calculates the result, and displays it.
 * 
 * @returns {void}
 */
function OnCornCalculateBtnClicked() {
    $("#cornCalculateBtn").click(function () {
        let userSelectionStr = GetCornUserSelectionStringCombination();
        //alert(userSelectionStr);
        let baseValue = GetCornBaseValue(userSelectionStr);
        //alert(baseValue);
        let finalResult = GetFinalResult(baseValue, GetSoilTestNitrateCredit("cornSoilTestNitrateInput"),
            GetOrganicMatterCredit("cornOrganicMatterInput"), GetPreviousCropNitrogenCredit("cornPreviousCropSelect"));

        sendValues(CollectCornData(finalResult), 'htmls/cornResult.html');
    });
}
// #endregion


// #region Wheat Sub Functions
/**
 * Retrieves the string combination of wheat region, historical productivity, and tillage type based on user selection.
 * 
 * @returns {string} The combination of user selections for wheat region, productivity, and tillage.
 */
function GetWheatRegionTillageProductivitySelectionCombination() {
    let selections = "";
    selections = $("input[name='wheatRegion']:checked").val() + "_"
        + $("input[name='wheatProductivity']:checked").val() + "_"
        + $("input[name='wheatTillage']:checked").val();
    return selections;
}

/**
 * Retrieves the actual and exact base value based on user selections.
 * The returned value equals the base value from one of the nine base tables plus tillage credit.
 * That means tillage credit is already included in the returned value.
 * 
 * @param {string} userSelection - The user's selection for wheat region, productivity, and tillage.
 * @returns {number} The base value corresponding to the user's selection.
 */
function GetWheatBaseValue(userSelection) {
    const minNotillDiff = 20;
    const eastWestLongNotillDiff = -50; // Easter medium long-term no-till is an exception
    const langdonLongNotillDiff = -30;
    let v = 0;

    switch (userSelection) {
        case "east_low_convTill":
            v = GetBaseValue(wheatEastLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "east_low_minNoTill":
            v = GetNewBaseValue(wheatEastLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "east_low_longNoTill":
            v = GetNewBaseValue(wheatEastLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "west_low_convTill":
            v = GetBaseValue(wheatWestLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "west_low_minNoTill":
            v = GetNewBaseValue(wheatWestLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "west_low_longNoTill":
            v = GetNewBaseValue(wheatWestLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "langdon_low_convTill":
            v = GetBaseValue(wheatLangdonLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "langdon_low_minNoTill":
            v = GetNewBaseValue(wheatLangdonLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "langdon_low_longNoTill":
            v = GetNewBaseValue(wheatLangdonLowConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", langdonLongNotillDiff);
            break;

        case "east_medium_convTill":
            v = GetBaseValue(wheatEastMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "east_medium_minNoTill":
            v = GetNewBaseValue(wheatEastMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "east_medium_longNoTill":
            v = GetNewBaseValue(wheatEastMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "west_medium_convTill":
            v = GetBaseValue(wheatWestMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "west_medium_minNoTill":
            v = GetNewBaseValue(wheatWestMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "west_medium_longNoTill":
            v = GetNewBaseValue(wheatWestMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "langdon_medium_convTill":
            v = GetBaseValue(wheatLangdonMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "langdon_medium_minNoTill":
            v = GetNewBaseValue(wheatLangdonMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "langdon_medium_longNoTill":
            v = GetNewBaseValue(wheatLangdonMediumConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", langdonLongNotillDiff);
            break;

        case "east_high_convTill":
            v = GetBaseValue(wheatEastHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "east_high_minNoTill":
            v = GetNewBaseValue(wheatEastHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "east_high_longNoTill":
            v = GetNewBaseValue(wheatEastHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "west_high_convTill":
            v = GetBaseValue(wheatWestHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "west_high_minNoTill":
            v = GetNewBaseValue(wheatWestHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "west_high_longNoTill":
            v = GetNewBaseValue(wheatWestHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", eastWestLongNotillDiff);
            break;
        case "langdon_high_convTill":
            v = GetBaseValue(wheatLangdonHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect");
            break;
        case "langdon_high_minNoTill":
            v = GetNewBaseValue(wheatLangdonHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", minNotillDiff);
            break;
        case "langdon_high_longNoTill":
            v = GetNewBaseValue(wheatLangdonHighConventionaltill, "wheatPriceSelect", "wheatNitrogenPriceSelect", langdonLongNotillDiff);
            break;
        default:
            alert("Something is wrong!");
    }
    return v;
}

/**
 * Collects wheat/durum data for display in PDF.
 * 
 * @param {number} calculatedResult - The calculated result to be displayed.
 * @returns {Array} An array containing the collected data for display.
 */
function CollectWheatData(calculatedResult) {
    const value1 = GetSelectedOptionText("wheatPriceSelect");
    const value2 = GetSelectedOptionText("wheatNitrogenPriceSelect");
    const value3 = GetInputValue("wheatOrganicMatterInput");
    const value4 = GetInputValue("wheatSoilTestNitrateInput");
    const value5 = GetSelectedOptionText("wheatPreviousCropSelect");
    const value6 = GetSelectedRadioText("wheatRegion");
    const value7 = GetSelectedRadioText("wheatTillage");
    const value8 = GetSelectedRadioText("wheatProductivity");

    return [calculatedResult, value1, value2, value3, value4, value5, value6, value7, value8];
}


/**
 * Handles the wheat calculate button click event, calculates the result, and displays it.
 * 
 * @returns {void}
 */
function OnWheatCalculateBtnClicked() {
    $("#wheatCalculateBtn").click(function () {
        let userSelectionStr = GetWheatRegionTillageProductivitySelectionCombination();
        let baseValue = GetWheatBaseValue(userSelectionStr);
        let finalResult = GetFinalResult(baseValue, GetSoilTestNitrateCredit("wheatSoilTestNitrateInput"),
            GetOrganicMatterCredit("wheatOrganicMatterInput"), GetPreviousCropNitrogenCredit("wheatPreviousCropSelect"));

        sendValues(CollectWheatData(finalResult), 'htmls/wheatResult.html');
    });
}
// #endregion


// #region Barley Sub Functions
/**
 * Calculates the rest of the barley base table values based on existing table values.
 * 
 * @returns {void}
 */
function GetBarleyNewDataTables() {
    const barleyLongNoTillDiff = -50;
    const barleyLangdonDiff = -30;
    barleyEastLongtermnotill = GetNewTable(barleyEastConventionaltill, barleyLongNoTillDiff);
    barleyWestLongtermnotill = GetNewTable(barleyWestConventionaltill, barleyLongNoTillDiff);
    barleyLangdonConventionaltill = GetNewTable(barleyEastConventionaltill, barleyLangdonDiff);
    barleyLangdonLongtermnotill = GetNewTable(barleyLangdonConventionaltill, barleyLongNoTillDiff);
}

/**
 * Retrieves the string combination of barley region and tillage type based on user selection.
 * 
 * @returns {string} The combination of user selections for barley region and tillage.
 */
function GetBarleyRegionTillageSelectionCombination() {
    let selections = "";
    selections = $("input[name='barleyRegion']:checked").val() + "_"
        + $("input[name='barleyTillage']:checked").val();
    return selections;
}

/**
 * Retrieves the barley base table (N recommendation table before credits) based on user selection.
 * 
 * @param {string} userSelection - The user's selection for barley region and tillage.
 * @returns {Array} The base table corresponding to the user's selection.
 */
function GetBarleyValueTable(userSelection) {
    let tb;
    switch (userSelection) {
        case "east_longNoTill":
            tb = JSON.parse(JSON.stringify(barleyEastLongtermnotill));
            break;
        case "east_convTill":
            tb = JSON.parse(JSON.stringify(barleyEastConventionaltill));
            break;
        case "west_longNoTill":
            tb = JSON.parse(JSON.stringify(barleyWestLongtermnotill));
            break;
        case "west_convTill":
            tb = JSON.parse(JSON.stringify(barleyWestConventionaltill));
            break;
        case "langdon_convTill":
            tb = JSON.parse(JSON.stringify(barleyLangdonConventionaltill));
            break;
        case "langdon_longNoTill":
            tb = JSON.parse(JSON.stringify(barleyLangdonLongtermnotill));
            break;
        default:
            alert("Something is wrong!");
    }
    return tb;
}

/**
 * Collects barley data for display in PDF.
 * 
 * @param {number} calculatedResult - The calculated result to be displayed.
 * @returns {Array} An array containing the collected data for display.
 */
function CollectBarleyData(calculatedResult) {
    const value1 = GetSelectedOptionText("barleyPriceSelect");
    const value2 = GetSelectedOptionText("barleyNitrogenPriceSelect");
    const value3 = GetInputValue("barleyOrganicMatterInput");
    const value4 = GetInputValue("barleySoilTestNitrateInput");
    const value5 = GetSelectedOptionText("barleyPreviousCropSelect");
    const value6 = GetSelectedRadioText("barleyRegion");
    const value7 = GetSelectedRadioText("barleyTillage");

    return [calculatedResult, value1, value2, value3, value4, value5, value6, value7];
}

/**
 * Handles the barley calculate button click event, calculates the result, and displays it.
 * 
 * @returns {void}
 */
function OnBarleyCalculateBtnClicked() {
    $("#barleyCalculateBtn").click(function () {
        let userSelectionStr = GetBarleyRegionTillageSelectionCombination();
        let baseValueTable = GetBarleyValueTable(userSelectionStr);
        let finalResult = GetFinalResult(GetBaseValue(baseValueTable, "barleyPriceSelect", "barleyNitrogenPriceSelect"), GetSoilTestNitrateCredit("barleySoilTestNitrateInput"),
            GetOrganicMatterCredit("barleyOrganicMatterInput"), GetPreviousCropNitrogenCredit("barleyPreviousCropSelect"));

        sendValues(CollectBarleyData(finalResult), 'htmls/barleyResult.html');
    });
}

// #endregion
// #endregion