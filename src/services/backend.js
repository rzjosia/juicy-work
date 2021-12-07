import axios from "axios";

async function getRandomUser() {
    try {
        const data = await axios.get("https://random-data-api.com/api/users/random_user?size=10");
        console.log("[backend-js] data user:", data);
        return data;
    } catch (err) {
        console.error("[backend-js]:", err);
    }
}

export default {
    getUsers() {
        return new Promise((resolve) => {
            const users = getRandomUser();
            resolve(users);
        });
    },
};
