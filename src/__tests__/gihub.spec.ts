import { describe, expect, test } from "vitest";
import { getGithubUser } from "../services/github";

describe("Teste de conecçao com o github", () => {
    test("deve retornar os dados do usuario do Github", async () => {
        const username = "menezess-duda";
        const userData = await getGithubUser(username);

        expect(userData).toHaveProperty("name");
        expect(userData).toHaveProperty("login");
        expect(userData).toHaveProperty("avatar_url");
        expect(userData).toHaveProperty("followers");
        expect(userData).toHaveProperty("publoc_repos");

         expect(userData.login).toBe(username);

    });
});