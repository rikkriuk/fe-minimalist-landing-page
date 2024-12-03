import React from "react";
import { render, screen } from "@testing-library/react";
import TrustedComponent from "../../components/TrustedComponent";

jest.mock("../../assets/trusted company logo/spotify-light.svg", () => "mocked-spotify-logo.svg");
jest.mock("../../assets/trusted company logo/dropbox-light.svg", () => "mocked-dropbox-logo.svg");
jest.mock("../../assets/trusted company logo/tesla-light.svg", () => "mocked-tesla-logo.svg");
jest.mock("../../assets/trusted company logo/reddit-light.svg", () => "mocked-reddit-logo.svg");

jest.mock("../../assets/trusted company logo/google-light.svg", () => "mocked-google-logo.svg");
jest.mock("../../assets/trusted company logo/stripe-light.svg", () => "mocked-stripe-logo.svg");
jest.mock("../../assets/trusted company logo/dhl-light.svg", () => "mocked-dhl-logo.svg");
jest.mock("../../assets/trusted company logo/airbnb-light.svg", () => "mocked-airbnb-logo.svg");

describe("TrustedComponent", () => {
  test("renders all logos", () => {
    render(<TrustedComponent />);
    const logos = screen.getAllByAltText("Company Logo");
    expect(logos).toHaveLength(8);
  });
});
