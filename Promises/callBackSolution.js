const getAddress = () => {
  getContinents
    .then((continent) => {
      return getCountries(continent);
    })
    .then((country) => {
      return getStates(country);
    })
    .then((state) => {
      return getCities(state);
    })
    .then(() => {
      return done();
    });
};

const getContinents = new Promise((resolve, reject) => {
  setTimeout(() => {
    let continent = "Asia";
    console.log(continent);
    resolve(continent);
  }, 1000);
});

const getCountries = (continent) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let country = "India";
      console.log(country);
      resolve(country);
    }, 1000);
  });
};

const getStates = (country) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let state = "Tamilnadu";
      console.log(state);
      resolve(state);
    }, 1000);
  });
};

const getCities = (state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let city = "Chennai";
      console.log(city);
      resolve(city);
    }, 1000);
  });
};

const done = () => {
  console.log("DONE!");
};

// getAddress();
