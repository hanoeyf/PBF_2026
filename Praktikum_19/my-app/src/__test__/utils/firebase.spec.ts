jest.mock("firebase/app", () => ({ initializeApp: jest.fn(() => ({ name: "mockApp" })) }));
import app from "../../utlis/db/firebase";

describe("Firebase config", () => {
  it("initializes and exports the firebase app", () => {
    expect(app).toEqual({ name: "mockApp" });
  });
});
