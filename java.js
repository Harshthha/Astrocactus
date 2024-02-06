const sign_in_btn = document.querySelector("#sign_in_btn");
        const sign_up_btn = document.querySelector("#sign_up_btn");
        const container = document.querySelector(".c");
        const sign_in_btn2 = document.querySelector("#sign_in_btn2");
        const sign_up_btn2 = document.querySelector("#sign_up_btn2");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign_up_mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign_up_mode");
        });

        sign_up_btn2.addEventListener("click", () => {
            container.classList.add("sign_up_mode2");
        });

        sign_in_btn2.addEventListener("click", () => {
            container.classList.remove("sign_up_mode2");
        });

        function validateUsername(username) {
            return username !== '';
        }

        function validateEmail(email) {
            return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email);
        }

        function validatePassword(password) {
            return password !== '' && password.length >= 8;
        }

        function validcheck() {
            const username = document.getElementById("Username").value;
            const email = document.getElementById("email").value;
            const password1 = document.getElementById("pass1").value;
            const password2 = document.getElementById("pass2").value;

            const isNotEmptyUsername = validateUsername(username);
            const isValidEmail = validateEmail(email);
            const isNotEmptyPassword = validatePassword(password1);
            const isPasswordEqual = password1 === password2;

            if (!(isNotEmptyUsername && isValidEmail && isNotEmptyPassword && isPasswordEqual)) {
                window.alert("Invalid credentials. Please check your username, email, and password.");
                return false;
            }

            return true;
        }
