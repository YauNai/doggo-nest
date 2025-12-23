export default async function countLevel() {
  try {
    // 從 localStorage 取得 token
    const token = localStorage.getItem("uid");

    if (!token) {
      throw new Error("尚未登入");
    }

    const res = await fetch("http://127.0.0.1:5000/api/admin/count/level", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 帶入 Bearer Token
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.log("錯誤回應：", errorData);

      // 根據不同錯誤碼處理
      if (res.status === 401) {
        throw new Error("尚未登入或權杖無效");
      } else if (res.status === 403) {
        throw new Error("無權限存取此功能");
      }

      throw new Error(errorData.error || "請求失敗");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("錯誤：", err.message);
    throw err;
  }
}
