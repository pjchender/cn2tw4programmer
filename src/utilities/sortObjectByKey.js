function sortedObjectByKey(terms) {
  let sortedTerms = {};
  Object.keys(terms)
    .sort()
    .forEach(key => {
      sortedTerms[key] = terms[key];
    });
  return sortedTerms;
}
module.exports = sortedObjectByKey;
