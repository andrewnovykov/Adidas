const valid = (name, email, password, cf_password ) => {
    if(!name || !email || !password || !cf_password)
    return 'please ass all fields'

    if(!validateEmail(email))
    return "invalid email";

    if(password.length < 6)
    return 'Password must be more than 6 symbols'

    if (password !== cf_password) return "Passwords did not match";

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default valid