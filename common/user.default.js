const user = require("../common/user.default.json");

export default {
  usernameForTestFirstLogin: user.USER_FOR_SKALE_ACCOUNT.username,
  passwordForTestFirstLogin: user.USER_FOR_SKALE_ACCOUNT.password,

  usernameForTestSecondLogin: user.USER_FOR_SKALE_ACCOUNT_2.username,
  passwordForTestSecondLogin: user.USER_FOR_SKALE_ACCOUNT_2.password,

  usernameRegex: [user.USERNAME_FOR_REGEX.EMAIL, user.USERNAME_FOR_REGEX.PHONE],
  passwordRegex: user.PASSWORD_FOR_REGEX.PASSWORD,
};
