const { FONTFAMILY, getFontList, subsets } = require("subset-utils"); 

const fontList = getFontList(FONTFAMILY.Pretendard);
const variable = getFontList(FONTFAMILY.Pretendard, { variable: true });

subsets(
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["glyph",     "woff",  fontList],
  ["glyph",     "woff2", fontList],
  //["dynamic",   "woff",  fontList], no dynamic
  //["dynamic",   "woff2", fontList], no dynamic
  ["variable",  "woff2", variable]
);
