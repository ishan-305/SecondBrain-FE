import axiosInterface from "./axiosInstance";
import axios from "axios";

type userData = {
  username: string;
  password: string;
};

export class AuthService {
  private API_URL = "http://localhost:3000/api/v1/auth";

  async signup(userData: userData) {
    try {
      const {
        data: { message },
      } = await axiosInterface.post("/auth/signup", userData);
      if (message === "Success") {
        return await this.signin(userData);
      } else {
        throw new Error("User Already Registered");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }

  async signin(userData: userData) {
    const { data } = await axiosInterface.post("/auth/signin", userData);
    if (data.token) {
      await axios.post("/api/store-token", { token: data.token });
    }

    return data;
  }
}
