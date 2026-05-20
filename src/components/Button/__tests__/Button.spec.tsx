import { describe, it, vi, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Button } from "../Button"
import userEvent from "@testing-library/user-event"
import { on } from "events"

describe("Testes do componente Button", () => {
    let user, handleClick, renderResult;


    it("Deve renderizar o texto corretamente", async() => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Clique aqui</Button>);

        const buttonElement = screen.getByRole("button", {
            name: /Clique aqui/i,
        })

        await user.click(buttonElement);
        expect(handleClick).toHaveBeenCalled();
    })

    it("Nao deve ser clicavel quando estiver desabilitado", async() => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button onClick={handleClick} disabled> Clique aqui</Button>);

        const buttonElement = screen.getByRole("button", {
            name: /Clique aqui/i,
        })

        await user.click(buttonElement);

        expect(handleClick).not.toHaveBeenCalled();
    })

    it("Não deve ser clicável quando estiver desabilitado", () => {
        render(<Button>Salvar perfil</Button>)

        const buttonElement = screen.getByRole("button", {
            name: /Salvar perfil/i,
        });

        expect (buttonElement).toBeInTheDocument();

    })
})