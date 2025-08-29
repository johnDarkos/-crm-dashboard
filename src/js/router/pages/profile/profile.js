import { createUserProfile } from "./profileTemplate.js";
import "./profile.css";

export const profile = () => {
    return {
        node: createUserProfile(),
        init: null
    }
}