import { test, expect, describe } from "vitest";
import { soma, subtração } from "../calculadora";

describe("Teste para a Calculadora", () => {
  test("verifica se a soma de 2 e 3 é igual a 5", () => {
    const result = soma(2, 3);
    expect(result).toBe(5);
  });

  test("verifica se a subtração de 2 e 3 é igual a -1", () => {
    const result = subtração(2, 3);
    expect(result).toBe(-1);
  });
});