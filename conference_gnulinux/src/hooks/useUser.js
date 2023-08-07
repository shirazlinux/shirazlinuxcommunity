import { useState } from "react";
import { UserModel } from "../DTO/user.model";

export function useUser() {
    const [user, _] = useState(UserModel.Instance);
    return user;
}