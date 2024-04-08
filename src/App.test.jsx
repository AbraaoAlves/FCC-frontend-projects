import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

/**
 *
 * @param {string} page
 */
function renderPage(page) {
  return render(
    <MemoryRouter initialEntries={[page]}>
      <App />
    </MemoryRouter>,
  );
}
describe("App", () => {
  it("should render Quote page on /quotes route", async () => {
    renderPage("/quotes");

    const el = await screen.findByText(/Quote/g);
    expect(el).toBeInTheDocument();
  });
  it("should render Palindrome page on /palindrome route", async () => {
    renderPage("/palindrome");

    const el = await screen.findByText(/Palindrome/g);
    expect(el).toBeInTheDocument();
  });
});
