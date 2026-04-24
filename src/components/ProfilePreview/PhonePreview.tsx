import { useMemo } from "react";
import { useProfile } from "../../hooks/useProfile";
import { SOCIAL_FIELDS } from "../../resources/SocialFields";

function PhonePreview() {
  const {
    githubUser,
    showFollowers,
    showRepositories,
    socialLinks,
    customLinks,
  } = useProfile();
  const activeSocialLinks = useMemo(
    () => SOCIAL_FIELDS.filter((field) => socialLinks[field.key] !== ""),
    [socialLinks],
  );

  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Prévia</h2>

      <div className="mt-6 flex justify-center">
        <div className="relative w-80 rounded-3xl border-slate-900 bg-slate-950 p-2">
          <div className="min-h-96 h-140 overflow-y-auto rounded-2xl bg-white px-6 pb-6 pt-10 text-center">
            {githubUser ? (
              <img
                src={githubUser.avatar_url}
                alt={githubUser.login}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="mx-auto h-16 w-16 rounded-full bg-linear-to-br from-sky-200 via-white to-emerald-100" />
            )}
            <h3 className="mt-4 text-base font-semibold">
              {githubUser?.name ?? "Seu perfil"}
            </h3>
            <p className="text-xs text-slate-500">
              {githubUser ? `@${githubUser.login}` : "@seuuser"}
            </p>

            {(showFollowers || showRepositories) && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {showFollowers && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {githubUser
                      ? `${githubUser.followers.toLocaleString("pt-BR")} seguidores`
                      : "seguidores"}
                  </span>
                )}
                {showRepositories && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {githubUser ? `${githubUser.public_repos} repos` : "repos"}
                  </span>
                )}
              </div>
            )}

            <div className="mt-4 flex items-center justify-center gap-2">
              {activeSocialLinks.length > 0 ? (
                activeSocialLinks.map((field) => (
                  <span
                    key={field.key}
                    className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold text-slate-500"
                  >
                    {field.badge}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400">
                  Sem redes cadastradas
                </span>
              )}
            </div>

            <div className="mt-6 space-y-2 text-left">
              {customLinks.length > 0 ? (
                customLinks.map((link) => (
                  <div
                    key={link.id}
                    className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm font-semibold"
                  >
                    {link.title || "Link personalizado"}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed px-4 py-3 text-xs text-slate-400">
                  Seus links vão aparecer aqui
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhonePreview;
