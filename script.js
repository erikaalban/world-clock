function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los-Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let sydney = document.querySelector("#sydney");
  let sydneyDateElement = sydney.querySelector(".date");
  let sydneyTimeElement = sydney.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}

updateTime();
setInterval(updateTime, 1000);
