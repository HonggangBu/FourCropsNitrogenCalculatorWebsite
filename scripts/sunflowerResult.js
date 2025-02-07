$(function () {
    "use strict";

    const tdIDArray = ['sunflowerPrice', 'sfNitrogenPrice', 'sfOrganicMatter', 'sfSoilTestNitrate', 'sfPreviousCrop', 'sfRegion', 'sfTillageType', 'sunflowerType'];
    DisplayResult('sunflowerNote', tdIDArray, 'sfResult', '20');
    GeneratePDF('sunflowerPDF', 'sunflowerContent', 'SunflowerNitrogenRecommendation.pdf');
});
