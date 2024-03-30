import { render, screen, act, fireEvent } from "@testing-library/react";
import { Quote } from "./Quote";

test("App can render", () => {
  const result = render(<Quote />);
  expect(result.container).toBeInTheDocument();
});

test('I can see a wrapper element with a corresponding id="quote-box".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId("quote-box");

  expect(wrapper).toBeInTheDocument();
});

test('Within #quote-box, I can see an element with a corresponding id="text".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId("quote-box");

  const text = wrapper.querySelector("#text");

  expect(text).toBeInTheDocument();
});

test('Within #quote-box, I can see an element with a corresponding id="author".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId("quote-box");

  const author = wrapper.querySelector("#author");

  expect(author).toBeInTheDocument();
  expect(author).not.toBeEmptyDOMElement();
});

test('Within #quote-box, I can see a clickable element with a corresponding id="new-quote".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId("quote-box");

  const newQuote = wrapper.querySelector("button#new-quote");

  expect(newQuote).toBeInTheDocument();
});

test('Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId("quote-box");

  const tweetQuote = wrapper.querySelector("a#tweet-quote");

  expect(tweetQuote).toBeInTheDocument();
});

test('On first load, my quote machine displays a random quote in the element with id="text".', () => {
  const result = render(<Quote />);
  const text = result.getByTestId("text");

  expect(text).toBeInTheDocument();
  expect(text.textContent).not.toBe("");
});

test('On first load, my quote machine displays the random quote\'s author in the element with id="author".', () => {
  const result = render(<Quote />);
  const author = result.getByTestId("author");

  expect(author).toBeInTheDocument();
  expect(author.textContent).not.toBe("");
});

test('I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.', () => {
  const result = render(<Quote />);
  const tweetQuote = result.getByTestId("tweet-quote");

  expect(tweetQuote).toBeInTheDocument();
  expect(tweetQuote).toHaveAttribute("target", "_blank");
  expect(tweetQuote).toHaveAttribute(
    "href",
    expect.stringContaining("https://twitter.com/intent/tweet")
  );
});

describe("When the #new-quote button is clicked", () => {
  let previousState = {
    text: "",
    author: "",
    tweet: "",
  };

  beforeEach(() => {
    const result = render(<Quote />);
    const newQuote = result.getByTestId("new-quote");

    const text = result.getByTestId("text");
    const author = result.getByTestId("author");
    const tweet = result.getByTestId("tweet-quote");

    previousState.text = text.textContent ?? "";
    previousState.author = author.textContent ?? "";
    previousState.tweet = tweet.getAttribute("href") ?? "";

    act(() => fireEvent.click(newQuote));
  });
  test("my quote machine should fetch a new quote and display it in the #text element.", () => {
    const { textContent: content } = screen.getByTestId("text");

    expect(content).not.toBe(previousState.text);
  });

  test(" My quote machine should fetch the new quote's author and display it in the #author element.", () => {
    const { textContent: content } = screen.getByTestId("author");

    expect(content).not.toBe(previousState.author);
  });

  test(" My quote machine should fetch the new quote's author and display it author the twitter link.", () => {
    const link = screen.getByTestId("tweet-quote");

    expect(link).not.toHaveProperty("href", previousState.tweet);
  });

  test("When the #new-quote button is clicked twice, my quote machine should fetch different quotes and display it in the #text element.", () => {
    const newQuote = screen.getByTestId("new-quote");

    const secondState = {
      text: screen.getByTestId("text").textContent ?? "",
      author: screen.getByTestId("author").textContent ?? "",
      tweet: screen.getByTestId("tweet-quote").getAttribute("href") ?? "",
    };

    act(() => fireEvent.click(newQuote));

    const thirdState = {
      text: screen.getByTestId("text").textContent ?? "",
      author: screen.getByTestId("author").textContent ?? "",
      tweet: screen.getByTestId("tweet-quote").getAttribute("href") ?? "",
    };

    expect(previousState).not.toEqual(secondState);
    expect(secondState).not.toEqual(thirdState);
  });
});
