import { render, screen } from "@testing-library/react";
import App from "../../pages/_app";

jest.mock("@/components/layouts/Appshell", () => ({ __esModule: true, default: ({ children }: { children: React.ReactNode }) => <div data-testid="appshell">{children}</div> }));
jest.mock("next-auth/react", () => ({ __esModule: true, SessionProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }));

describe("App component", () => {
  it("renders the AppShell and child component", () => {
    const DummyPage = () => <div>My Page</div>;

    render(<App Component={DummyPage} pageProps={{ session: null }} />);

    expect(screen.getByTestId("appshell")).toBeInTheDocument();
    expect(screen.getByText(/my page/i)).toBeInTheDocument();
  });
});
