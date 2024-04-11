import { act, render, screen } from "@testing-library/react";
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
    const alertSpy = vi.spyOn(window, "alert");
    render(<Palindrome />);
    const checkBtn = screen.getByRole("button");

    act(() => checkBtn.click());

    expect(alertSpy).toHaveBeenCalledWith("Please input a value");
  });
  it.todo(
    'When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"',
  );
  it.todo(
    'When the #test-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"',
  );
  it.todo(
    'When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"',
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
