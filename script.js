// Functions
// async function getWeather(zip) {
//   const apiKey = "9b496d216be38721e1b8d845cd464d84";
//   const units = "imperial";
//   const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
//   const res = await fetch(path);
//   const json = await res.json();
//   console.log(json);
//   return json;
// }

// functions based on the following

// zipcode:
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export async function getWeatherByZip(apikey, zip, unit = "imperial") {
  const path = `${BASE_URL}zip=${zip}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

// City:
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export async function getWeatherByCityName(apikey, city, unit = "imperial") {
  const path = `${BASE_URL}q=${city}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

// ID:
export async function weatherForId(apikey, id, unit = "imperial") {
  const path = `${BASE_URL}id=${id}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

// Geo
export async function getWeatherByGeo(apikey, coords, unit = "imperial") {
  const path = `${BASE_URL}lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

