import setCookie from "@/composables/setCookie";
import { ref } from "vue";

const loginError = ref("");

export default async function login(loginName, loginPassword) {
  loginError.value = "";

  try {
    const res = await fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginName,
        password: loginPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      loginError.value = data.error;
      return { isLoginingSuccess: false, loginError: loginError.value };
    }

    setCookie("uid", data.token, 7);
    localStorage.setItem("uid", data.token);

    return { isLoginingSuccess: true, loginError: "" };
  } catch (err) {
    loginError.value = "網路錯誤，請稍後再試";
    return { isLoginingSuccess: false, loginError: loginError.value };
  }
}
