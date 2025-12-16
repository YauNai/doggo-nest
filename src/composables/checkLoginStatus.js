export default async function checkLoginStatus() {
  let token = localStorage.getItem("uid")

  if (!token) {
    return { isLoggedIn: false, username: null }
  }

  try {
      const res = await fetch("http://127.0.0.1:5000/api/checkme", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data)
        return { isLoggedIn: false, username: null };
      }

      return { isLoggedIn: true, username: data.username };

    } catch (err) {
      console.error(err);
      return { isLoggedIn: false, username: null };
    }

}