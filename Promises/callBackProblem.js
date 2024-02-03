const getContinents = (callback) => {
  setTimeout(() => {
    let continent = "Asia";
    console.log(continent);
    callback(continent);
  }, 1000);
};

const getCountries = (continent, callback) => {
  setTimeout(() => {
    let country = "India";
    console.log(country);
    callback(country);
  }, 1000);
};

const getStates = (country, callback) => {
  setTimeout(() => {
    let state = "Tamilnadu";
    console.log(state);
    callback(state);
  }, 1000);
};

const getCities = (state, callback) => {
  setTimeout(() => {
    let city = "Chennai";
    console.log(city);
    callback(city);
  }, 1000);
};

const done = () => {
  console.log("DONE!");
};

const getAddress = () => {
  getContinents((continent) => {
    getCountries(continent, (country) => {
      getStates(country, (state) => {
        getCities(state, () => {
          done();
        });
      });
    });
  });
};

getAddress();
