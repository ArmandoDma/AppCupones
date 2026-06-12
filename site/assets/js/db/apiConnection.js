
let BASE_URL = "https://couponsapp-704c0-default-rtdb.firebaseio.com"

export async function apiConnection(){
  const res = await axios.get(`${BASE_URL}/Cupones.json`);
  return res.data;
}

export async function apiUsuarios(userId) {
  const response = await axios.get(`${BASE_URL}/Usuarios.json`);
  const usuarios = response.data;

  if(!usuarios) return null;

  const user = usuarios[userId];

  return user ? user.Nombre : null;
}

