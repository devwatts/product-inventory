export const checkNumber = (number) => {
    let pattern = /^[6-9]\d{9}$/;
    return pattern.test(number);
}

export const checkOTP = (otp) => {
    let pattern = /^[0-9]\d{5}$/;
    return pattern.test(otp);
}