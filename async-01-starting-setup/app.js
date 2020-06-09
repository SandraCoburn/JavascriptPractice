const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (postData) => {
      setTimeout(() => {
        console.log(postData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  console.log("Clicked!... getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 1000000; i++) {
//   result += i;
// }
// console.log(result);
