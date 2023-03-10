// Total 9 basic before-credit nitrogen recommendation tables for conventional tillage are provided
// the 9 tables are the results of the combination of productivity (3 types) and region (3 regions)
// Each minimal no-till recommendation equals corresponding conventional till recommendation plus 20 lbs/acre
// Eastern or western ND long-term no-till recommendation equals corresponding eastern or western ND conventional till recommendation minus 50 lbs/acre
// Langdon area long-term no-till recommendation equals corresponding Langdon conventional till recommendation minus 30 lbs/acre



// wheat eastern ND low productivity conventional till
var wheatEastLowConventionaltill = [
    [142, 130, 120, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [154, 130, 130, 117, 92, 77, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [162, 146, 130, 130, 115, 96, 77, 72, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [167, 153, 140, 130, 129, 114, 99, 82, 77, 60, 44, 0, 0, 0, 0, 0, 0, 0, 0],
    [171, 159, 147, 136, 130, 127, 114, 101, 87, 77, 71, 52, 30, 0, 0, 0, 0, 0, 0],
    [173, 163, 153, 143, 133, 130, 124, 113, 102, 90, 77, 77, 46, 29, 0, 0, 0, 0, 0],
    [175, 166, 157, 148, 139, 130, 130, 123, 113, 103, 93, 82, 77, 70, 57, 43, 29, 13, 0],
    [175, 169, 161, 153, 145, 137, 130, 130, 121, 113, 104, 95, 86, 77, 75, 64, 53, 41, 28],
    [175, 171, 164, 156, 149, 142, 134, 130, 128, 120, 112, 104, 96, 88, 80, 77, 69, 60, 50],
    [175, 175, 164, 157, 155, 144, 137, 130, 128, 125, 119, 110, 103, 95, 88, 80, 75, 72, 63],
    [175, 175, 166, 160, 155, 147, 141, 135, 128, 128, 123, 117, 112, 103, 96, 90, 83, 77, 76],
    [175, 175, 168, 162, 156, 151, 145, 139, 133, 128, 128, 122, 116, 110, 104, 97, 91, 85, 78],
    [175, 175, 170, 164, 159, 153, 148, 142, 137, 131, 128, 127, 121, 116, 110, 104, 98, 92, 86]
];

// wheat Langdon low productivity conventional till
var wheatLangdonLowConventionaltill = [
    [112, 100, 90, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [124, 100, 100, 87, 62, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [132, 116, 100, 100, 85, 66, 47, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [137, 123, 110, 100, 99, 84, 69, 52, 47, 30, 14, 0, 0, 0, 0, 0, 0, 0, 0],
    [141, 129, 117, 106, 100, 97, 84, 71, 57, 47, 41, 22, 0, 0, 0, 0, 0, 0, 0],
    [143, 133, 123, 113, 103, 100, 94, 83, 72, 60, 47, 47, 16, 0, 0, 0, 0, 0, 0],
    [145, 136, 127, 138, 109, 100, 100, 93, 83, 73, 63, 52, 47, 40, 17, 13, 0, 0, 0],
    [145, 139, 131, 123, 115, 107, 100, 100, 91, 83, 74, 65, 56, 47, 35, 34, 23, 11, 0],
    [145, 141, 134, 126, 119, 112, 104, 100, 98, 90, 82, 74, 66, 58, 50, 47, 39, 30, 20],
    [145, 145, 134, 127, 125, 114, 107, 100, 98, 95, 89, 80, 73, 65, 58, 50, 45, 42, 33],
    [145, 145, 136, 130, 125, 117, 111, 105, 98, 98, 93, 87, 82, 73, 66, 60, 53, 47, 46],
    [145, 145, 138, 132, 123, 121, 115, 109, 103, 98, 98, 92, 86, 80, 74, 67, 61, 55, 48],
    [145, 145, 140, 134, 129, 123, 118, 112, 104, 101, 98, 97, 91, 86, 80, 74, 68, 62, 56]
];

// wheat western low productivity conventional till
var wheatWestLowConventionaltill = [
    [99, 95, 93, 76, 59, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [102, 97, 95, 85, 68, 60, 54, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [105, 99, 97, 90, 72, 64, 60, 52, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [108, 103, 98, 93, 78, 68, 66, 60, 52, 50, 45, 28, 9, 0, 0, 0, 0, 0, 0],
    [111, 107, 100, 96, 86, 74, 72, 65, 58, 58, 52, 51, 39, 26, 11, 0, 0, 0, 0],
    [114, 110, 103, 99, 90, 82, 77, 70, 64, 66, 57, 55, 45, 35, 25, 13, 0, 0, 0],
    [117, 112, 106, 100, 93, 86, 82, 77, 72, 73, 64, 60, 52, 46, 35, 41, 33, 15, 10],
    [120, 114, 109, 103, 96, 92, 88, 84, 80, 77, 68, 62, 59, 54, 45, 34, 23, 20, 15],
    [120, 116, 110, 105, 100, 95, 93, 90, 86, 84, 79, 74, 68, 63, 56, 47, 42, 38, 20],
    [120, 118, 112, 107, 102, 98, 96, 94, 92, 88, 83, 79, 74, 69, 64, 59, 48, 45, 40],
    [120, 120, 114, 108, 104, 101, 98, 96, 94, 92, 86, 83, 78, 73, 69, 65, 60, 56, 50],
    [120, 120, 120, 111, 107, 104, 100, 97, 96, 95, 90, 86, 82, 78, 74, 70, 65, 61, 58],
    [120, 120, 120, 120, 112, 103, 101, 98, 97, 96, 93, 89, 85, 82, 78, 74, 70, 66, 62]
];



//////////////////////////////////////////////////////////////////////////////////////

// wheat eastern ND Medium productivity conventional till
var wheatEastMediumConventionaltill = [
    [178, 150, 120, 117, 100, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [182, 161, 141, 118, 118, 103, 72, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [183, 167, 150, 133, 120, 118, 103, 82, 57, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [184, 171, 157, 143, 128, 118, 118, 105, 86, 69, 49, 28, 0, 0, 0, 0, 0, 0, 0],
    [185, 173, 162, 150, 137, 125, 118, 118, 118, 91, 76, 60, 44, 27, 8, 0, 0, 0, 0],
    [186, 176, 165, 155, 144, 133, 122, 118, 118, 105, 93, 81, 68, 54, 40, 26, 11, 0, 0],
    [186, 177, 168, 159, 149, 140, 130, 121, 118, 118, 118, 95, 84, 73, 62, 50, 38, 26, 13],
    [187, 178, 170, 162, 155, 145, 136, 130, 119, 118, 118, 105, 96, 87, 77, 68, 57, 47, 36],
    [187, 179, 172, 164, 158, 149, 141, 134, 126, 118, 118, 118, 106, 97, 89, 80, 71, 61, 53],
    [187, 180, 173, 166, 160, 153, 146, 138, 131, 124, 118, 118, 118, 106, 98, 90, 83, 75, 67],
    [187, 181, 175, 168, 162, 155, 149, 143, 136, 129, 123, 122, 118, 113, 106, 99, 92, 85, 77],
    [188, 182, 176, 170, 164, 158, 152, 146, 140, 135, 128, 122, 118, 118, 118, 106, 99, 93, 86],
    [188, 182, 177, 171, 166, 160, 154, 149, 143, 138, 132, 126, 121, 118, 118, 118, 106, 100, 94]
];

// wheat Langdon medium productivity conventional till
var wheatLangdonMediumConventionaltill = [
    [130, 125, 120, 115, 110, 100, 80, 50, 50, 30, 20, 15, 10, 0, 0, 0, 0, 0, 0],
    [135, 130, 125, 120, 115, 100, 90, 80, 70, 50, 40, 30, 25, 0, 0, 0, 0, 0, 0],
    [140, 135, 130, 125, 120, 115, 100, 90, 80, 60, 50, 40, 35, 10, 0, 0, 0, 0, 0],
    [145, 140, 135, 130, 120, 115, 105, 95, 85, 65, 60, 50, 45, 25, 10, 0, 0, 0, 0],
    [150, 145, 140, 135, 125, 120, 110, 100, 95, 70, 70, 60, 55, 35, 30, 20, 10, 0, 0],
    [155, 150, 145, 140, 130, 125, 115, 105, 100, 80, 80, 70, 65, 45, 40, 30, 20, 15, 0],
    [160, 155, 150, 145, 135, 130, 120, 110, 105, 90, 90, 80, 75, 55, 50, 40, 30, 25, 10],
    [165, 160, 155, 150, 145, 135, 125, 120, 110, 100, 95, 85, 80, 65, 60, 50, 40, 35, 20],
    [175, 170, 165, 155, 150, 140, 130, 125, 115, 110, 100, 90, 85, 75, 65, 60, 50, 40, 30],
    [178, 171, 165, 157, 150, 143, 136, 128, 121, 114, 107, 99, 92, 84, 77, 69, 62, 54, 46],
    [178, 172, 165, 159, 152, 146, 139, 132, 126, 119, 112, 106, 99, 92, 86, 78, 72, 65, 58],
    [178, 172, 166, 160, 154, 148, 142, 136, 130, 124, 118, 111, 105, 99, 93, 86, 80, 74, 67],
    [178, 173, 167, 162, 156, 150, 145, 139, 133, 128, 122, 116, 110, 104, 99, 93, 87, 81, 75]
];

// wheat western medium productivity conventional till
var wheatWestMediumConventionaltill = [
    [148, 139, 139, 138, 121, 102, 102, 101, 60, 50, 30, 15, 0, 0, 0, 0, 0, 0, 0],
    [162, 139, 139, 139, 139, 138, 115, 102, 102, 101, 80, 60, 40, 20, 0, 0, 0, 0, 0],
    [172, 153, 139, 139, 139, 138, 117, 102, 102, 101, 80, 65, 55, 45, 30, 10, 0, 0, 0],
    [178, 162, 146, 139, 139, 138, 134, 114, 102, 102, 101, 90, 70, 50, 40, 30, 20, 0, 0],
    [182, 169, 155, 141, 139, 139, 138, 130, 113, 102, 102, 101, 96, 65, 50, 40, 30, 20, 0],
    [186, 174, 162, 149, 139, 139, 139, 138, 127, 113, 102, 102, 101, 98, 76, 48, 35, 25, 15],
    [188, 178, 167, 156, 145, 139, 139, 139, 136, 125, 113, 102, 102, 101, 100, 83, 63, 38, 20],
    [190, 181, 171, 162, 151, 142, 139, 139, 137, 135, 124, 112, 102, 102, 101, 101, 87, 71, 53],
    [192, 183, 174, 165, 157, 148, 139, 139, 139, 138, 132, 122, 112, 102, 102, 101, 101, 90, 77],
    [194, 186, 177, 169, 161, 153, 145, 139, 139, 139, 138, 130, 121, 112, 103, 102, 101, 101, 92],
    [194, 187, 180, 172, 165, 157, 150, 142, 139, 139, 138, 138, 129, 121, 112, 103, 102, 101, 102],
    [196, 189, 183, 176, 168, 162, 154, 147, 140, 139, 139, 138, 135, 127, 119, 112, 105, 102, 102],
    [196, 190, 184, 177, 171, 164, 158, 151, 145, 139, 139, 139, 138, 133, 126, 119, 111, 104, 102]
];


// wheat eastern ND high productivity conventional till
var wheatEastHighConventionaltill = [
    [218, 202, 185, 167, 148, 147, 145, 129, 109, 81, 50, 35, 20, 10, 0, 0, 0, 0, 0],
    [227, 213, 199, 184, 169, 154, 147, 147, 137, 123, 106, 85, 65, 40, 30, 15, 0, 0, 0],
    [233, 221, 209, 196, 184, 171, 158, 147, 147, 143, 131, 118, 104, 86, 63, 40, 30, 20, 10],
    [237, 227, 216, 205, 195, 184, 173, 161, 150, 147, 147, 137, 127, 115, 102, 88, 70, 43, 30],
    [241, 231, 222, 212, 203, 193, 184, 174, 164, 153, 147, 147, 142, 133, 123, 112, 101, 88, 74],
    [244, 235, 227, 218, 210, 205, 193, 183, 175, 165, 156, 147, 147, 146, 137, 129, 120, 110, 100],
    [246, 238, 231, 223, 215, 207, 199, 191, 183, 174, 167, 159, 149, 147, 147, 141, 133, 125, 117],
    [248, 241, 234, 227, 220, 212, 205, 198, 191, 184, 176, 168, 161, 153, 147, 147, 144, 137, 130],
    [250, 243, 237, 230, 223, 217, 210, 203, 197, 190, 183, 176, 169, 162, 155, 148, 147, 147, 141],
    [250, 245, 239, 233, 227, 221, 214, 208, 201, 196, 189, 183, 177, 170, 164, 157, 151, 147, 147],
    [250, 247, 241, 235, 230, 224, 218, 212, 206, 201, 195, 194, 183, 176, 171, 165, 159, 153, 147],
    [250, 247, 243, 237, 232, 227, 221, 216, 210, 205, 199, 194, 188, 183, 177, 172, 166, 160, 155],
    [250, 250, 245, 239, 234, 229, 224, 219, 214, 209, 204, 198, 193, 188, 183, 178, 172, 167, 162]
];

// wheat Langdon high productivity conventional till
var wheatLangdonHighConventionaltill = [
    [167, 165, 163, 160, 155, 148, 135, 120, 101, 77, 35, 20, 0, 0, 0, 0, 0, 0, 0],
    [172, 168, 165, 162, 156, 150, 141, 131, 121, 110, 98, 84, 50, 30, 20, 0, 0, 0, 0],
    [177, 170, 168, 164, 157, 151, 144, 137, 130, 122, 114, 105, 96, 86, 76, 65, 52, 30, 10],
    [178, 172, 170, 168, 158, 152, 146, 140, 134, 128, 122, 116, 109, 102, 95, 88, 80, 72, 50],
    [178, 174, 172, 170, 160, 152, 147, 143, 139, 133, 128, 121, 117, 112, 106, 101, 95, 89, 83],
    [178, 175, 173, 171, 161, 152, 147, 144, 142, 136, 131, 127, 123, 118, 114, 109, 104, 99, 94],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 133, 131, 127, 123, 119, 115, 111, 107, 103],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 126, 123, 119, 116, 112, 109],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 129, 126, 123, 120, 117, 113],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 129, 127, 126, 123, 120, 117],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 129, 127, 126, 126, 123, 121],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 129, 127, 126, 126, 125, 123],
    [178, 176, 174, 172, 162, 154, 149, 146, 142, 138, 134, 133, 130, 129, 127, 126, 126, 125, 124]
];

// wheat western high productivity conventional till
var wheatWestHighConventionaltill = [
    [164, 157, 127, 95, 61, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [164, 164, 147, 125, 101, 77, 52, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [172, 164, 159, 141, 123, 104, 85, 66, 46, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [178, 164, 164, 152, 137, 122, 106, 91, 75, 59, 43, 26, 0, 0, 0, 0, 0, 0, 0],
    [182, 169, 165, 158, 147, 134, 122, 108, 95, 81, 68, 54, 27, 0, 0, 0, 0, 0, 0],
    [185, 174, 166, 164, 154, 143, 132, 120, 109, 98, 86, 74, 63, 51, 39, 27, 0, 0, 0],
    [187, 177, 168, 164, 160, 155, 140, 130, 120, 110, 100, 90, 79, 69, 59, 48, 38, 27, 0],
    [189, 180, 170, 164, 164, 156, 147, 138, 129, 120, 111, 102, 92, 83, 74, 65, 55, 46, 37],
    [190, 181, 175, 167, 164, 160, 152, 144, 136, 128, 120, 111, 103, 95, 86, 78, 70, 61, 53],
    [192, 184, 177, 170, 164, 164, 157, 149, 142, 134, 127, 119, 112, 103, 97, 89, 81, 74, 66],
    [193, 186, 180, 172, 166, 164, 160, 154, 147, 140, 133, 128, 119, 112, 105, 98, 91, 84, 77],
    [194, 187, 181, 175, 169, 164, 164, 157, 151, 145, 138, 133, 125, 119, 113, 106, 100, 93, 87],
    [195, 189, 183, 177, 171, 164, 164, 161, 155, 149, 143, 137, 131, 125, 119, 113, 107, 101, 95]
];