// A mock function to mimic making an async request for data
import axios from "axios";

// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export const getGamesAPI = async () => {
  const res = await axios.get(`${process.env.REACT_APP_BE_URL}games`);
  return res;
};
