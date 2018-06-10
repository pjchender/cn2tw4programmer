function sortedObjectByKey(terms) {
  let counter = 0;
  let sortedTerms = {};
  for (let category in terms) {
    Object.keys(terms[category])
    .sort()
    .forEach(key => {
      if (!sortedTerms[category]) {
        sortedTerms[category] = {}
      }
      counter++
      sortedTerms[category][key] = terms[category][key];
    });
  }

  return {
    sortedTerms,
    counter
  };
}

module.exports = sortedObjectByKey;
