// https://www.hackerrank.com/challenges/abbr/problem

const abbreviation = memo((string, match, stringIndex = 0, matchIndex = 0) => {
  const stringLength = string.length;
  const matchLength = match.length;
  if (stringLength - stringIndex < matchLength - matchIndex) return "NO";
  if (matchLength === matchIndex) {
    for (let i = stringIndex, l = stringLength; i < l; i++) {
      if (isUpperCase(string[i])) return "NO";
    }
    return "YES";
  }
  const firstString = string[stringIndex];
  const firstMatch = match[matchIndex];
  const isStringUpper = isUpperCase(firstString);
  const isMatchUpper = isUpperCase(firstMatch);
  if (
    firstString === firstMatch ||
    (isMatchUpper && equal(firstString, firstMatch))
  ) {
    const result = abbreviation(string, match, stringIndex + 1, matchIndex + 1);
    if (result === "YES") return "YES";
  }
  if (!isStringUpper) {
    return abbreviation(string, match, stringIndex + 1, matchIndex);
  }
  return "NO";
});

function memo(fn) {
  const cache = new Map();
  return function (...args) {
    const argsString = args.toString();
    const cacheValue = cache.get(argsString);
    if (cacheValue) {
      return cacheValue;
    }
    const result = fn.apply(null, args);
    cache.set(argsString, result);
    return result;
  };
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function equal(a, b) {
  return a.toUpperCase() === b.toUpperCase();
}

console.log(
  abbreviation(
    "hHhAhhcahhacaccacccahhchhcHcahaahhchhhchaachcaCchhchcaccccchhhcaahhhhcaacchccCaahhaahachhacaahhaachhhaaaCalhhchaccaAahHcchcazhachhhaaahaahhaacchAahccacahahhcHhccahaachAchahacaahcahacaahcahacaHhccccaahaahacaachcchhahhacchahhhaahcacacachhahchcaAhhcaahchHhhaacHcacahaccccaaahacCHhChchhhahhchcahaaCccccahhcaachhhacaaahcaaaccccaacaaHachaahcchaahhchhhcahahahhcaachhchacahhahahahAahaAcchahaahcaaaaahhChacahcacachacahcchHcaahchhcahaachnachhhhcachchahhhacHhCcaHhhhcaCccccaaahcahacahchahcaachcchaachahhhhhhhhcahhacacCcchahccaaaaaHhhccaAaaaCchahhccaahhacaccchhcahhcahaahhgacahcahhchcaaAccchahhhaahhccaaHcchaccacahHahChachhcaaacAhacacaacacchhchchacchchcacchachacaahachccchhhaccahcacchaccaahaaaccccccaaaaaaaHhcahcchmcHchcchaaahaccchaaachchHahcaccaaccahcacacahAhaacaacaccaccaaacahhhcacAhaCchcaacCcccachhchchcchhchahchchahchchhchcacaachahhccacachaAhaaachchhchchchhaachahaahahachhaaaccacahhcacchhhaaachaaacAahhcachchachhhcacchacaaChCahhhccahChaachhcahacchanaaacchhhccacacchcahccchAcahacaaachhacchachccaaHacaacAhahcCh",
    "HAHHCHAACCCAHCHHAHHAHCACCHCCHHCAAHHCACCCAHHHACAAHHHHCHHCAHHAHHAAAHAACAAHAHHCAHAHACHACHCHACACHAAHHAAAHCAHHACACAACHHHCHAHCAHCHHHAHAHACCAAAHCHHCHHCCAACCCCAACHACAACAAHACHCHAHHACCHCAHHHAAACHACAACHCACACAHHCCHAHACCCACCAACHCHHHCCCCCHCCAHHCAAHHAHHHHHHHAACCCCAHCCAAAAAHHHAAAACCAHHCAHACACCHHCHAHAHHCHAACHHHHHCCHCCAHAHCHCAAACCACCCCHACCACHHACHHACACHACCAACCCCAAAAHHAHCHHHCCAHCCHACHHAHCCACACCHAHAAACACCCCAHCCAHACCCCCCHCCHHCHHHHCHCHCAHHHACHAHAACCCAAAACHAACAAAHHAAHAAAHACHHCACHCCHCHAACHACACHHCCCCCAHCACHAAAHCHCAHACAAC"
  )
);
