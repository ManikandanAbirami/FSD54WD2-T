async function getAddress() {
  try {
    country = await getCountries();
    state = await getStates();
    city = await getCities();
    done();
  } catch (error) {
    console.log("Error occurred: ", error);
  }
}

const getContinents = new Promise((resolve, reject) => {
  setTimeout(() => {
    let continent = "Asia";
    console.log(continent);
    resolve(continent);
  }, 1000);
});

const getCountries = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let country = "India";
      console.log(country);
      resolve(country);
    }, 1000);
  });
};

const getStates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let state = "Tamilnadu";
      console.log(state);
      //   resolve(state);
      reject("Error in states.");
    }, 1000);
  });
};

const getCities = () => {
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

getAddress();
