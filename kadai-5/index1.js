const profile = {
  firstName: "Yuto",
  familyName: "OkaOka",
  age: 21,
  major: "Japanese",
  hobby: "Game",
  job: "Student",
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
  const key = keys[i];
  const value = profile[key];
  const text = "私の" + key + "は、" + value + "です。";
  console.log(text);
}

for (let key of keys) {
  const value = profile[key];
  const text = "私の" + key + "は、" + value + "です。";
  console.log(text);
}