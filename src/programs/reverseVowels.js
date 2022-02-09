// Find vowels in string
function find_vowels(str) {
  const list = Array.from(str);
  const vowelsList = list.filter((item) => "aeiouAEIOU".includes(item));
  changeIndex(vowelsList.reverse(), list);
}

// Replace vowels with the vowelsList array
function changeIndex(vowelsList, list) {
  const newStr = list.map((item, index) => {
    if ("aeiouAEIOU".includes(item)) {
      const n = vowelsList[0];
      vowelsList.shift();
      return n;
    } else {
      return item;
    }
  });
  console.log(newStr.join(""));
}

find_vowels("eutopia");
