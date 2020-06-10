const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => {
      resolve(success);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(
      (postData) => {
        positionData = postData;
        // console.log(postData)
        return setTimer(2000);
      },
      (err) => {
        console.log(err);
      }
    ) //or you can use a .catch() to handle errors
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
  console.log("Clicked!... getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 1000000; i++) {
//   result += i;
// }
// console.log(result);
