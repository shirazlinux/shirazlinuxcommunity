import axios from "axios";

export class UserModel {
  static _instance = undefined;

  /**
   * @returns { UserModel }
   */
  static get Instance() {
    if (UserModel._instance) return UserModel._instance;
    try {
      return UserModel.loadFromStorage();
    } catch (e) {
      return new UserModel();
    }
  }

  constructor(value = null) {
    UserModel._instance = this;
    if (!value) return this;
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.email = value.email;
    this.gender = value.gender;
    this.phoneNumber = value.phoneNumber;
    this.city = value.city;
    this.orderedFood = value.orderedFood;
    this.needTaxi = value.needTaxi;
    this.presenceTime = value.presenceTime;

    if (value._id) this._id = value._id;
  }

  #tracks = [];

  get hasChanges() {
    return this.#tracks.length > 0;
  }

  #_id = "";
  get _id() {
    return this.#_id;
  }

  #firstName = "";
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    this.#firstName = value;
    if (!this.#tracks.includes("firstName")) this.#tracks.push("firstName");
  }

  #lastName = "";
  get lastName() {
    return this.#lastName;
  }
  set lastName(value) {
    this.#lastName = value;
    if (!this.#tracks.includes("lastName")) this.#tracks.push("lastName");
  }

  #email = "";
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
    if (!this.#tracks.includes("email")) this.#tracks.push("email");
  }

  #gender = 0;
  get gender() {
    return this.#gender;
  }
  set gender(value) {
    this.#gender = value;
    if (!this.#tracks.includes("gender")) this.#tracks.push("gender");
  }

  #phoneNumber = "";
  get phoneNumber() {
    return this.#phoneNumber;
  }
  set phoneNumber(value) {
    this.#phoneNumber = value;
    if (!this.#tracks.includes("phoneNumber")) this.#tracks.push("phoneNumber");
  }

  #city = "";
  get city() {
    return this.#city;
  }
  set city(value) {
    this.#city = value;
    if (!this.#tracks.includes("city")) this.#tracks.push("city");
  }

  #orderedFood = "";
  get orderedFood() {
    return this.#orderedFood;
  }
  set orderedFood(value) {
    this.#orderedFood = value;
    if (!this.#tracks.includes("orderedFood")) this.#tracks.push("orderedFood");
  }

  #needTaxi = false;
  get needTaxi() {
    return this.#needTaxi;
  }
  set needTaxi(value) {
    this.#needTaxi = value;
    if (!this.#tracks.includes("needTaxi")) this.#tracks.push("needTaxi");
  }

  #presenceTime = "";
  get presenceTime() {
    return this.#presenceTime;
  }
  set presenceTime(value) {
    this.#presenceTime = value;
    if (!this.#tracks.includes("presenceTime"))
      this.#tracks.push("presenceTime");
  }

  create = async () => {
    try {
      const { data, status } = await axios.post("/users", this.#toJson());
      this.#_id = data.ID;
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  resendCode = async () => {
    try {
      const { data, status } = await axios.post("/users/resend_code", {
        id: this.#_id,
      });
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  verify = async (code) => {
    if (!this._id) {
      throw new Error("Cant verify");
    }
    try {
      const { data, status } = await axios.put("/users/verify/" + this._id, {
        code: +code,
      });
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  /**
   *
   * @returns {Promise< {
   *  data?: {
   *    hotelPrice: number;
   *    foodPrice: number;
   *    needTaxi: boolean;
   *    total: number;
   *    url: string;
   *    token: string;
   *    ID: string;
   *    amount: number;
   *  },
   *  status: number
   * } >}
   */
  pay = async () => {
    try {
      const { data, status } = await axios.get("/users/pay/" + this.#_id);
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  reserveHotel = async (hotelID, days) => {
    try {
      const { data, status } = await axios.post("/settling/reservations", {
        userID: this.#_id,
        hotelID,
        days,
      });
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  update = async (save = true) => {
    if (!this.hasChanges) throw new Error("Noting to change !");
    const updatedPayload = {};
    const thisJson = this.#toJson();
    for (const trackKey of this.#tracks) {
      updatedPayload[trackKey] = thisJson[trackKey];
    }

    try {
      const { data, status } = await axios.put(
        "/users/" + this._id,
        updatedPayload
      );
      this.#tracks = [];
      if (save) this.saveToLocalStorage();
      return { data, status };
    } catch (e) {
      return { data: e.response.data, status: e.response.status };
    }
  };

  #toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      gender: this.gender,
      phoneNumber: this.phoneNumber,
      city: this.city,
      orderedFood: this.orderedFood,
      needTaxi: this.needTaxi,
      presenceTime: this.presenceTime,
    };
  }

  saveToLocalStorage() {
    localStorage.setItem(
      "__user",
      JSON.stringify({
        _id: this.#_id,
        ...this.#toJson(),
      })
    );
  }

  static loadFromStorage() {
    const item = JSON.parse(localStorage.getItem("__user"));
    if (!item) throw new Error("Nothing to load");
    return new UserModel(item);
  }
}
