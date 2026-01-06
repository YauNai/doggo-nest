export default async function checkLoginStatus() {
  let token = localStorage.getItem("uid")

  if (!token) {
    return { isLoggedIn: false, username: null }
  }

  try {
      const res = await fetch("https://test-db-gmxh.onrender.com/api/checkme", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data)
        return { isLoggedIn: false, username: null, level: null };
      }

      return { isLoggedIn: true, username: data.username, level: data.level };

    } catch (err) {
      console.error(err);
      return { isLoggedIn: false, username: null, level: null };
    }

}