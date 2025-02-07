
// Function to get query parameters and decode to an array
function GetDecodedValues() {
    const params = new URLSearchParams(window.location.search);
    const encodedValues = params.get('data');

    if (encodedValues) {
        return JSON.parse(decodeURIComponent(encodedValues));
    }
    else {
        return null;
    }
}

// Function to generate and download PDF
function GeneratePDF(downloadPdfBtnID, contentID, fileName) {
    btn = document.getElementById(downloadPdfBtnID);
    btn.addEventListener('click', function () {
        btn.style.display = 'none';
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        html2canvas(document.getElementById(contentID), {
            scale: 2,
            //useCORS: true // Allow cross-origin images
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190; // Adjust image width
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            doc.addImage(imgData, 'png', 10, 10, imgWidth, imgHeight);
            doc.save(fileName); // Download PDF
            btn.style.display = 'block';
        });
    });
}

// Function to display the result and parameter values in PDF
function DisplayResult(noteID, tdIDArray, resultDivID, plusMinusValue) {
    // define the common text
    const noteText = `This recommendation is calculated from the web application 
"North Dakota Crop Nitrogen Recommendation Calculators", which is developed and maintained 
by the School of Natural Resource Sciences, North Dakota State University.
For more information, please visit <a 
href="https://www.ndsu.edu/pubweb/soils/FourCropsNitrogenCalculatorWebApp/" 
target="_blank">https://www.ndsu.edu/pubweb/soils/FourCropsNitrogenCalculatorWebApp/</a>`;

    document.getElementById(noteID).innerHTML = noteText;
    const resultDiv = document.getElementById(resultDivID);
    const n = tdIDArray.length;

    // Get the decoded array from the URL
    const valuesArray = GetDecodedValues();

    if (valuesArray) {
        //resultDiv.innerHTML = `${valuesArray[0]} ± 30   lbs/acre`;
        resultDiv.innerHTML = `${valuesArray[0]}  ± ` + plusMinusValue + `  lbs/acre`;

        for (let i = 0; i < n; i++) {
            document.getElementById(tdIDArray[i]).innerHTML = valuesArray[i + 1];
        }
    } else {
        resultDiv.innerHTML = "No Data";

        for (let i = 0; i < n; i++) {
            document.getElementById(tdIDArray[i]).innerHTML = "N/A";
        }
    }
}

