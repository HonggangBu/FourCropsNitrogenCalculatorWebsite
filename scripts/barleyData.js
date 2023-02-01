// Total 2 basic before-credit nitrogen recommendation tables for conventional tillage are provided
// The two basic data tables: East region conventional tillage and West region conventional tilage
// There are total 6 tables including the two basic tables: combinations of 3 regions and 2 tillage types
// Long-term no-till equals conventional tillage less 50, with a minimum value of ‘0’
// langdon region is the same as in the eastern region less 30 pounds N per acre, with a minimum value of ‘0’


var barleyEastConventionaltill = [
    [145, 138, 131, 125, 117, 110, 104, 97, 89, 82, 75, 68, 61, 54, 46, 40, 33, 26, 19],
    [148, 144, 137, 132, 127, 122, 117, 111, 106, 101, 96, 91, 85, 80, 75, 70, 65, 59, 54],
    [150, 146, 142, 137, 133, 129, 125, 121, 117, 112, 108, 104, 100, 96, 92, 87, 83, 79, 75],
    [151, 148, 144, 141, 137, 134, 131, 127, 124, 120, 117, 113, 110, 106, 103, 99, 96, 92, 89],
    [152, 149, 146, 146, 140, 137, 135, 132, 129, 126, 123, 120, 117, 114, 111, 108, 105, 102, 99],
    [153, 151, 148, 148, 143, 140, 137, 135, 132, 130, 127, 124, 122, 119, 117, 114, 111, 109, 106],
    [154, 152, 149, 149, 144, 142, 140, 137, 135, 133, 131, 128, 126, 124, 121, 120, 117, 114, 112],
    [154, 152, 150, 150, 146, 144, 142, 140, 137, 135, 133, 131, 131, 127, 125, 123, 121, 119, 117]
];

var barleyWestConventionaltill = [
    [140, 130, 120, 102, 103, 94, 84, 74, 65, 55, 46, 38, 28, 19, 10, 0, 0, 0, 0],
    [144, 137, 131, 124, 117, 110, 102, 96, 89, 82, 75, 68, 61, 54, 47, 40, 32, 26, 19],
    [147, 142, 136, 131, 125, 120, 114, 108, 102, 97, 92, 86, 81, 75, 69, 64, 58, 53, 47],
    [149, 144, 140, 135, 131, 126, 121, 117, 112, 109, 103, 98, 94, 89, 84, 80, 75, 70, 65],
    [150, 146, 143, 138, 135, 131, 127, 123, 119, 115, 111, 107, 103, 99, 95, 91, 87, 83, 79],
    [151, 148, 144, 141, 137, 134, 132, 127, 124, 120, 117, 113, 110, 106, 103, 99, 96, 92, 89],
    [152, 149, 146, 143, 140, 137, 134, 131, 127, 124, 121, 118, 115, 112, 109, 106, 103, 100, 97],
    [153, 150, 147, 144, 142, 139, 136, 133, 131, 128, 125, 123, 119, 117, 114, 111, 108, 106, 103]
];

// barleyEastLongtermnotill = barleyEastConventionaltill - 50;
// value >= 0
var barleyEastLongtermnotill;

// barleyWestLongtermnotill = barleyWestConventionaltill - 50;
// value >= 0
var barleyWestLongtermnotill;

// barleyLangdonConventionaltill = barleyEastConventialtill - 30;
// value >= 0
var barleyLangdonConventionaltill;

// barleyLangdonLongtermnotill = barleyLangdonConventionaltill - 50;
// value >= 0
var barleyLangdonLongtermnotill;