import { describe, it, vi, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import { Button } from "../Button"
import userEvent from "@testing-library/user-event"
import { on } from "events"

describe("Testes do componente Button", () => {
    let user, handleClick, renderResult;

    beforeEach(() => {
        user = userEvent.setup();
        handleClick = vi.fn();
        renderResult = render(<Button onClick={handleClick}>Clique aqui</Button>);
    });

    it("Deve renderizar o texto corretamente", async() => {
        const buttonElement = screen.getByRole("button", {
            name: /Clique aqui/i,
        })

        await user.click(buttonElement);
        expect(handleClick).toHaveBeenCalled();
    })

    it("Nao deve ser clicavel quando estiver desabilitado", async() => {
        renderResult.rerender(<Button onClick={handleClick} disabled> Clique aqui</Button>);

        const buttonElement = screen.getByRole("button", {
            name: /Clique aqui/i,
        })

        await user.click(buttonElement);

        expect(handleClick).not.toHaveBeenCalled();
    })

    it("deve renderizar", () => {

        const buttonElement = screen.getByRole("button", {
            name: /Clique aqui/i,
        });

        expect (buttonElement).toBeInTheDocument();

    })
})