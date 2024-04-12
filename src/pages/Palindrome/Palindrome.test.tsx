import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Palindrome from "./Palindrome";

describe("Palindrome", () => {
  it('You should have an input element with an id of "text-input"', () => {
    render(<Palindrome />);
    const textInput = screen.getByRole("textbox");

    expect(textInput).not.toBeNull();
    expect(textInput?.id).toBe("text-input");
  });

  it('You should have a button element with an id of "check-btn"', () => {
    render(<Palindrome />);
    const checkBtn = screen.getByRole("button");

    expect(checkBtn).not.toBeNull();
    expect(checkBtn?.id).toBe("check-btn");
  });
  it('You should have a div element with an id of "result"', () => {
    render(<Palindrome />);
    const result = screen.getByTestId("result");

    expect(result).not.toBeNull();
    expect(result?.id).toBe("result");
  });
  it('When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value"', () => {
    // spy on window.alert
    const alertSpy = vi.spyOn(window, "alert");
    render(<Palindrome />);

    const checkBtn = screen.getByRole("button");

    act(() => checkBtn.click());

    expect(alertSpy).toHaveBeenCalledWith("Please input a value");
  });

  it.each([
    ["A", "A is a palindrome"],
    ["eye", "eye is a palindrome"],
    ["_eye", "_eye is a palindrome"],
    ["race car", "race car is a palindrome"],
    [
      "A man, a plan, a canal. Panama",
      "A man, a plan, a canal. Panama is a palindrome",
    ],
    ["never odd or even", "never odd or even is a palindrome"],
    ["My age is 0, 0 si ega ym.", "My age is 0, 0 si ega ym. is a palindrome"],
  ])(
    'When the #text-input element contains the text %s and the #check-btn element is clicked, the #result element should contain the text "%s is a palindrome"',
    async (typed, expected) => {
      const user = userEvent.setup();
      const alertSpy = vi.spyOn(window, "alert");

      render(<Palindrome />);

      const textInput = screen.getByRole("textbox");
      const checkBtn = screen.getByRole("button");

      await act(async () => {
        await user.type(textInput, typed);
        await user.click(checkBtn);
      });

      const result = screen.getByTestId("result");
      expect(result.textContent).toBe(expected);
      expect(alertSpy).not.toHaveBeenCalledWith();
    },
  );

  it.todo(
    'When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"',
  );

  it.todo(
    'When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"',
  );

  it.todo(
    'When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text 0_0 (: /- :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /- :) 0-0 is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text five|_/|four and the #check-btn element is clicked, the #result element should contain the text "five|_/|four is not a palindrome"',
  );
});
