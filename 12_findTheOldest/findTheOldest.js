const findTheOldest = function(people) {
  const sortedByOldest = people.sort((a,b) => {
    if(a.yearOfDeath === undefined) a.yearOfDeath = (new Date()).getFullYear();
    if(b.yearOfDeath === undefined) b.yearOfDeath = (new Date()).getFullYear();
    const aOld = a.yearOfDeath - a.yearOfBirth;
    const bOld = b.yearOfDeath - b.yearOfBirth;
    return aOld > bOld ? -1 : 1;
  })

  return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;