import { useCounter } from "../../src/hooks/useCounter";
import { act, renderHook } from "@testing-library/react";

describe("useCounter", () => {
  it("should increment count when calling increment", () => {
    const { result } = renderHook(() => useCounter());

     act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement count when calling decrement", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
