import axios from "axios";
const ROOT_URL = "http://localhost:5000/api/v1/mekna7";


const Signup = (values, setError) => {
  axios
    .post(`${ROOT_URL}/signup`, {
      full_name: values.fullName,
      age: values.age,
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Signup };
