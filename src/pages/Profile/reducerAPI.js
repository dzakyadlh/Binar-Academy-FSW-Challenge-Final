// A mock function to mimic making an async request for data
import axios from "axios";

// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

const token = localStorage.getItem("token");

export const updateAPI = async (payload) => {
  const res = await axios.put(`http://localhost:5000/user/updateacc`, payload, {
    headers: { Authorization: `${token}` },
  });

  return res;
};

export const deleteAPI = async () => {
  const res = await axios.delete(`http://localhost:5000/user/deleteacc`, {
    headers: { Authorization: `${token}` },
  });

  return res;
};
