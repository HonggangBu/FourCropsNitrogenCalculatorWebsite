$(function () {
    "use strict";

    const tdIDArray = ['wheatPrice', 'wheatNitrogenPrice', 'wheatOrganicMatter', 'wheatSoilTestNitrate', 'wheatPreviousCrop', 'wheatRegion', 'wheatTillageType', 'wheatProductivity'];
    DisplayResult('wheatNote', tdIDArray, 'wheatResult', '30');
    GeneratePDF('wheatPDF', 'wheatContent', 'WheatNitrogenRecommendation.pdf');
});
