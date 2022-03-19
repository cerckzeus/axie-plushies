
interface Props {
  email: string;
  password: string;
}

export const register = async (requestData: Props) => {
  const res = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD26oEXEaOJk3VHW_AYhrPQCl-VzeWQ9gM",
    {
      method: "POST",
      body: JSON.stringify({
        email: requestData.email,
        password: requestData.password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) {
    //throw error
  }

  return null;
};

// export const logIn = async (requestData: Props) => {
//   const res = await fetch(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD26oEXEaOJk3VHW_AYhrPQCl-VzeWQ9gM",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         email: requestData.email,
//         password: requestData.password,
//         returnSecureToken: true,
//       }),
//       headers: { "Content-Type": "application/json" },
//     }
//   );

//   const data = await res.json();
//   console.log(data);

//   if (!res.ok) {
//     //throw error
//   }
//   return data;
// };
