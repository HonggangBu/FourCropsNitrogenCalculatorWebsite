$(function () {
    "use strict";

    const tdIDArray = ['barleyPrice', 'barleyNitrogenPrice', 'barleyOrganicMatter', 'barleySoilTestNitrate', 'barleyPreviousCrop', 'barleyRegion', 'barleyTillageType'];
    DisplayResult('barleyNote', tdIDArray, 'barleyResult', '15');
    GeneratePDF('barleyPDF', 'barleyContent', 'BarleyNitrogenRecommendation.pdf');
});
