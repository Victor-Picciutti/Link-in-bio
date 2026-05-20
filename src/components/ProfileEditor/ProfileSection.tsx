import { useState } from "react";
import { useGithubUser } from "../../hooks/useGithubUser";
import { useProfile } from "../../hooks/useProfile";
import { Button } from "../Button/Button";
import { Checkbox } from "../Fields/Checkbox";
import { Input } from "../Fields/Input";

function ProfileSection() {
  const [githubUsername, setGithubUsername] = useState("");
  const {
    showFollowers,
    setShowFollowers,
    showRepositories,
    setShowRepositories,
  } = useProfile();
  const { fetchUser, isLoading, error } = useGithubUser();

  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Configuração do Perfil</h2>

      <div className="mt-6">
        <div className="mb-4 flex items-end gap-2 sm:flex-row">
          <Input
            name="Usuário do GitHub"
            id="github-username"
            type="text"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            placeholder="seu-usuario"
            className="flex-1"
          />
          <Button
            onClick={() => fetchUser(githubUsername)}
            disabled={isLoading}
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </Button>
        </div>

        {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

        <div className="grid gap-3 md:grid-cols-2">
          <Checkbox
            id="show-followers"
            checked={showFollowers}
            onChange={setShowFollowers}
            name="Mostrar seguidores"
            description="Exibe contagem no perfil."
          />

          <Checkbox
            id="show-repositories"
            checked={showRepositories}
            onChange={setShowRepositories}
            name="Mostrar repositórios"
            description="Exibe numero de repos."
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
