export default function validate(inputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@$!%?.&])[A-Za-z\d@$!%?.&]{6,10}$/;
    let errors={};
    (!inputs.email) ? errors.email = "Introduce an email adress" : errors.email = "";
    (inputs.email.length > 35) ? errors.email = "Email adress can't be longer than 35 characters" : errors.email = "";
    (!regexEmail.test(inputs.email)) ? errors.email ="Invalid email adress" : errors.email = "";
    (regexPassword.test(inputs.password)) ? errors.password = "Password should have between 6-10 characters and at least one number" : errors.password = "";
    return errors;
}

