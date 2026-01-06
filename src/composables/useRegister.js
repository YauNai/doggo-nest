import { ref } from "vue";

const registerError = ref("")

export default async function register(regiName, regiPassword, regiEmail, regiTel, regiBirthDate, regiSubNews) {

    registerError.value = ""

    try {
      const res = await fetch("https://test-db-gmxh.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: regiName,
          password: regiPassword,
          email: regiEmail,
          tel: regiTel,
          birthDate: regiBirthDate,
          subNews: regiSubNews
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { isSigninSuccess: false, registerError: data.error };
      }

      return { isSigninSuccess: true, registerError: "" };
    } catch (err) {
      return { isSigninSuccess: false, registerError: data.error };
    }
  };