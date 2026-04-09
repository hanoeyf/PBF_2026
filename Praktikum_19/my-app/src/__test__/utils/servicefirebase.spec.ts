jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn((db: any, path: string) => ({ db, path })),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  doc: jest.fn((db: any, collectionName: string, id: string) => ({ db, collectionName, id })),
  query: jest.fn((...args: any[]) => args),
  addDoc: jest.fn(),
  where: jest.fn((field: string, op: string, value: string) => ({ field, op, value })),
  updateDoc: jest.fn(),
}));
jest.mock("../../utlis/db/firebase", () => ({}));
jest.mock("bcrypt", () => ({ hash: jest.fn((value: string) => Promise.resolve(`hashed-${value}`)) }));

import {
  retrieveProducts,
  retrieveDataByID,
  signIn,
  signUp,
  signInWithGoogle,
} from "../../utlis/db/servicefirebase";

const {
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
} = require("firebase/firestore");

const bcrypt = require("bcrypt");

describe("servicefirebase utilities", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("retrieves product list from firestore snapshot", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [{ id: "1", data: () => ({ name: "Item" }) }] });

    const result = await retrieveProducts("products");

    expect(getDocs).toHaveBeenCalled();
    expect(result).toEqual([{ id: "1", name: "Item" }]);
  });

  it("retrieves document by ID", async () => {
    (getDoc as jest.Mock).mockResolvedValue({ data: () => ({ name: "Single" }) });

    const result = await retrieveDataByID("products", "1");

    expect(getDoc).toHaveBeenCalled();
    expect(result).toEqual({ name: "Single" });
  });

  it("signs in with email and returns first user", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [{ id: "1", data: () => ({ email: "test@example.com" }) }] });

    const result = await signIn("test@example.com");

    expect(result).toEqual({ id: "1", email: "test@example.com" });
  });

  it("returns error callback when signUp finds existing user", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [{ id: "1", data: () => ({ email: "test@example.com" }) }] });
    const callback = jest.fn();

    await signUp({ email: "test@example.com", fullname: "Test", password: "pwd" }, callback);

    expect(callback).toHaveBeenCalledWith({ status: "error", message: "User already exists" });
  });

  it("creates a new user when signUp has no existing user", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [] });
    (addDoc as jest.Mock).mockResolvedValue({});
    const callback = jest.fn();

    await signUp({ email: "new@example.com", fullname: "New", password: "pwd" }, callback);

    expect(bcrypt.hash).toHaveBeenCalledWith("pwd", 10);
    expect(addDoc).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith({ status: "success", message: "User registered successfully" });
  });

  it("signs in with Google and updates existing user", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [{ id: "1", data: () => ({ email: "google@example.com", role: "member" }) }] });
    (updateDoc as jest.Mock).mockResolvedValue({});
    const callback = jest.fn();

    await signInWithGoogle({ email: "google@example.com" }, callback);

    expect(updateDoc).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith({ status: true, message: "User registered and logged in with Google", data: { email: "google@example.com", role: "member" } });
  });

  it("signs in with Google and creates a new user when none exists", async () => {
    (getDocs as jest.Mock).mockResolvedValue({ docs: [] });
    (addDoc as jest.Mock).mockResolvedValue({});
    const callback = jest.fn();

    await signInWithGoogle({ email: "newgoogle@example.com" }, callback);

    expect(addDoc).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith({ status: true, message: "User registered and logged in with Google", data: { email: "newgoogle@example.com", role: "member" } });
  });
});
