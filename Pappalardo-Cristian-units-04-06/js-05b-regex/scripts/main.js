const patterns = {
	email: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,4}$/,
	phone: /^(?:\+?\d{1,3}[\s-]?)?(?:\d[\s-]?){6,14}\d$/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
	url: /^(https?|ftp):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[A-Za-z0-9._~%!$&'()*+,;=:@\/-]*)?(?:\?[A-Za-z0-9._~%!$&'()*+,;=:@\/?-]*)?(?:#[A-Za-z0-9._~%!$&'()*+,;=:@\/?-]*)?$/,
};

const validateEmail = (value) => patterns.email.test(value);
const validatePhone = (value) => patterns.phone.test(value);
const validatePassword = (value) => patterns.password.test(value);
const validateUrl = (value) => patterns.url.test(value);

console.log(validateEmail("test@example.com"));
console.log(validatePhone("+34 600-123-456"));
console.log(validatePassword("Aa1!abcd"));
console.log(validateUrl("https://example.com/path?x=1#top"));
