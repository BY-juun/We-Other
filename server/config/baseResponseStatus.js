module.exports = {
    //성공  
    SUCCESS: { isSuccess: true, code: 1000, message: "성공" }, //조회
    SIGN_UP_SUCCESS: { isSuccess: true, code: 1100, message: "회원가입에 성공하였습니다." },
    EMAIL_CONFIRM_SUCCESS: { isSuccess: true, code: 1101, message: "사용가능한 이메일입니다." },
    NICKNAME_CONFIRM_SUCCESS: { isSuccess: true, code: 1102, message: "사용가능한 닉네임입니다." },
    SIGN_IN_SUCCESS: { isSuccess: true, code: 1103, message: "로그인에 성공하였습니다." },
    NEED_SIGN_UP: { isSuccess: true, code: 1104, message: "회원가입이 필요한 계정입니다." },
    FIND_PASSWORD_SUCCESS: { isSuccess: true, code: 1105, message: "해당 핸드폰 번호로 임시 비밀번호를 발송하였습니다." },
    PASSWORD_CORRESPOND_SUCCESS: { isSuccess: true, code: 1106, message: "비밀번호가 일치합니다." },
    PASSWORD_UPDATE_SUCCESS: { isSuccess: true, code: 1107, message: "비밀번호가 변경되었습니다." },
    NICKNAME_UPDATE_SUCCESS: { isSuccess: true, code: 1108, message: "닉네임이 변경되었습니다." },
    USER_INFO_UPDATE_SUCCESS: { isSuccess: true, code: 1109, message: "회원정보가 변경되었습니다." },
    USER_DROP_SUCCESS: { isSuccess: true, code: 1110, message: "회원탈퇴에 성공하였습니다." },
    VERIFICATION_SUCCESS: { isSuccess: true, code: 1111, message: "토큰 검증에 성공하였습니다." },


    //실패
    PARAMS_NOT_EXACT: { isSuccess: false, code: 3000, message: "입력되지 않은 인자가 존재합니다. " },
    TOKEN_EXPIRED: { isSuccess: false, code: 2000, message: "토큰이 만료되었습니다. " },
    TOKEN_NOT_VALID: { isSuccess: false, code: 2001, message: " 유효하지 않은 토큰입니다.  " },
    DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },

}