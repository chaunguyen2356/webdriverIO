class Ultilities {
  generateRandomName = () => {
    // Disclaimer: This function simulates name generation and might not produce entirely realistic Vietnamese names.
    let gender = "random";
    // Define Vietnamese first name lists (replace with more extensive data if desired)
    const maleNames = ["Nam", "Long", "Minh", "Huy", "Trung"];
    const femaleNames = ["Lan", "Mai", "Hoa", "Huong", "Nga"];

    // Choose gender randomly or based on the provided argument
    const isMale =
      gender === "male" || (gender === "random" && Math.random() < 0.5);

    // Select a random name from the appropriate list
    const nameList = isMale ? maleNames : femaleNames;
    const name = nameList[Math.floor(Math.random() * nameList.length)];

    // Optionally add a random middle name (uncommon in Vietnamese names)
    const middleNames = ["Công", "Dinh", "Quynh", "Ngoc", "Xuân"];
    const middleName = nameList[Math.floor(Math.random() * nameList.length)]; // Uncomment for middle names

    // Generate a random Vietnamese surname (limited options)
    const surnames = ["Nguyen", "Tran", "Le", "Pham", "Vo"];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];

    // Combine name(s) and surname
    const fullName = `${surname} ${middleName} ${name}`; // Uncomment middle name line for inclusion
    // const fullName = `${name} ${surname}`; // Uncomment middle name line for inclusion

    return fullName.toString();
  };

  generateRandomEmail = (type) => {
    // Define character sets for different parts of the email
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const digits = "0123456789";
    const specialChars = "!#$%&'*+/=?^_`{|}~-";

    // Generate random lengths for each part
    const usernameLength = Math.floor(Math.random() * (17 - 5 + 1)) + 12; // Random between 10 and 15 characters
    const domainLength = Math.floor(Math.random() * (8 - 6 + 1)) + 6; // Random between 6 and 8 characters

    // Generate random username
    let username = "";
    for (let i = 0; i < usernameLength; i++) {
      const charSet = Math.random() < 0.5 ? lowercaseLetters : uppercaseLetters;
      username += charSet[Math.floor(Math.random() * charSet.length)];
    }

    // Generate random domain
    let randomDomain = "";
    for (let i = 0; i < domainLength; i++) {
      randomDomain +=
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    type ? randomDomain : (randomDomain = "yopmail");

    // Combine username and domain with separator
    const email = `${username}@${randomDomain}.com`;

    // Optionally add random special characters (not recommended for real email usage)
    // const randomSpecialChars = specialChars[Math.floor(Math.random() * specialChars.length)];
    // email += randomSpecialChars;

    return email;
  };

  generateRandomVNPhone = () => {
    // Define valid Vietnamese mobile network prefixes
    let mobilePrefixes = ["09"]; // Not support "03", "05", "06", "07", "08",

    // Generate random mobile prefix
    let prefix =
      mobilePrefixes[Math.floor(Math.random() * mobilePrefixes.length)];

    // Generate random digits for the remaining part
    let remainingDigits = "";
    for (let i = 0; i < 8; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
    }
    console.log(`${prefix}${remainingDigits}`);
    // Combine prefix and remaining digits
    return `${prefix}${remainingDigits}`;
  };

  generateRandomLocation = () => {
    const districts = [
      "District 1",
      "District 3",
      "District 7",
      "Phu Nhuan District",
      "Thu Duc District",
      "Binh Thanh District",
      "Go Vap District",
    ];
    const citys = ["HCM City", "Da Nang City", "Ha Noi City", "Hue City"];

    const streetNames = [
      "Nguyen Van Giai",
      "Le Loi",
      "Pham Ngu Lao",
      "Dong Khoi",
      "Dien Bien Phu",
      "Nguyen Trai",
      "Tran Hung Dao",
      "Vo Van Tan",
    ];
    const wards = [
      "Ward 1",
      "Ward 3",
      "Ward 7",
      "Ward 2",
      "Ward 4",
      "Ward 8",
      "Ward 5",
      "Ward 6",
      "Ward 9",
    ];

    // Randomly select district and street
    const district = districts[Math.floor(Math.random() * districts.length)];
    const street = streetNames[Math.floor(Math.random() * streetNames.length)];
    const ward = wards[Math.floor(Math.random() * wards.length)];
    const city = citys[Math.floor(Math.random() * citys.length)];

    // Simulate address format
    return `${generateIntNumber(
      0,
      2000
    )} ${street} , ${ward} , ${district} , ${city}`;
  };

  generateIntNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  };

  generateBoolean = () => {
    return Boolean(Math.round(Math.random()));
  };

  generateFloatNumber = (min, max) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  generateString = ({ length, condition, options }) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    if (condition) {
      let randomNumber = generateIntNumber(0, options.length);
      options.forEach((element, index) => {
        randomNumber === index ? (result = element) : null;
      });
    } else {
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
    }

    return result;
  };

  categoriesUrl = (host) => {
    const link = host.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
    )[1];

    const subdomain = link.split(".")[0];
    const domain = link.split(".")[1];
    const topLevelDomain = link.split(".")[2];

    return {
      link: link,
      sub_domain: subdomain,
      domain: domain,
      top_level_domain: topLevelDomain,
    };
  };

  getStorage = (type, key) => {
    if (type === "local") {
      return localStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  };
  setStorage = (type, key, value) => {
    type === "local"
      ? localStorage.setItem(key, value)
      : sessionStorage.setItem(key, value);
  };
}

export default new Ultilities();
