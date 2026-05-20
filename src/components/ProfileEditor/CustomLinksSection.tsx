import { useProfile } from "../../hooks/useProfile";
import { Button } from "../Button/Button";
import { Input } from "../Fields/Input";

function CustomLinksSection() {
  const { customLinks, addCustomLink, removeCustomLink, updateCustomLink } =
    useProfile();
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold">Links Personalizados</h2>

      <div className="mt-6 space-y-4">
        {customLinks.map((link, index) => (
          <div key={link.id} className="rounded-3xl border bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Link {index + 1}</p>
              <button
                type="button"
                onClick={() => removeCustomLink(link.id)}
                className="cursor-pointer text-xs font-semibold text-slate-500"
              >
                Remover
              </button>
            </div>

            <div className="flex gap-2 mt-4 space-y-3">
              <Input
                name="Título do Link"
                id={`custom-link-title-${link.id}`}
                type="text"
                value={link.title}
                onChange={(e) =>
                  updateCustomLink(link.id, "title", e.target.value)
                }
                placeholder="Ex: Meu Portfólio"
                className="flex-1"
              />

              <Input
                name="URL do Link"
                id={`custom-link-url-${link.id}`}
                type="url"
                value={link.url}
                onChange={(e) =>
                  updateCustomLink(link.id, "url", e.target.value)
                }
                placeholder="https://seulink.com"
                className="flex-1"
              />
            </div>
          </div>
        ))}

        <Button
          onClick={addCustomLink}
          className="w-full cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-600"
        >
          + Adicionar novo link
        </Button>
      </div>
    </section>
  );
}

export default CustomLinksSection;
