module.exports = {
  email: function (email) {
    const emailRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return emailRegex.test(email); // 정규식을 만족한다면 ture를 반환하겠지
  },
};
