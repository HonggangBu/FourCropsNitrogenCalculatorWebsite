$(function () {
    "use strict";

    const tdIDArray = ['cornPrice', 'cornNitrogenPrice', 'cornOrganicMatter', 'cornSoilTestNitrate', 'cornPreviousCrop', 'cornIrrigation', 'cornRegion', 'cornTillageType', 'cornSoilTexture'];
    DisplayResult('cornNote', tdIDArray, 'cornResult', '30');
    GeneratePDF('cornPDF', 'cornContent', 'CornNitrogenRecommendation.pdf');
});
