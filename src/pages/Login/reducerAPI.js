// A mock function to mimic making an async request for data
import axios from "axios";

// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export const loginAPI = async (payload) => {
  const res = await axios.post("http://localhost:5000/auth/login", payload);

  return res;
};
