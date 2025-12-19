import { ref } from "vue";
import checkLoginStatus from "./checkLoginStatus";
import setCookie from "./setCookie";

const isLoggedIn = ref(false);
const username = ref("");
const level = ref("")
const isLoading = ref(false);

export function useAuth() {
  const checkAuth = async () => {
    isLoading.value = true;

    const result = await checkLoginStatus();

    isLoggedIn.value = result.isLoggedIn;
    username.value = result.username;
    level.value = result.level;
    isLoading.value = false;

    return result;
  };

  const logout = () => {
    setCookie("uid", "", 7);
    localStorage.removeItem("uid");
    isLoggedIn.value = false;
    username.value = "";
  };

  return {
    isLoggedIn,
    username,
    level,
    isLoading,
    checkAuth,
    logout,
  };
}
