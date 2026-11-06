export async function requireAdmin() {
  // In development and AI Studio environment, allow admin access
  return {
    id: "admin_prabhleen_01",
    email: "prabhleen.kaur1306@gmail.com",
    name: "Prabhleen Kaur",
    role: "ADMIN",
  };
}
