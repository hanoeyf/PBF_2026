import { render, screen } from "@testing-library/react";
import Appsetting from "../../pages/setting/app";

describe("Setting page", () => {
  it("renders the app setting page text", () => {
    render(<Appsetting />);

    expect(screen.getByText(/app setting page/i)).toBeInTheDocument();
  });
});
