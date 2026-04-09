import { render, screen } from "@testing-library/react";
import Document from "../../pages/_document";

jest.mock("next/document", () => ({
  Html: ({ children }: { children: React.ReactNode }) => <html>{children}</html>,
  Head: ({ children }: { children: React.ReactNode }) => <head>{children}</head>,
  Main: () => <main data-testid="main" />,
  NextScript: () => <script data-testid="next-script" />,
}));

describe("Document component", () => {
  it("renders the document structure", () => {
    render(<Document />);

    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("next-script")).toBeInTheDocument();
  });
});
