import userEvent from "@testing-library/user-event";
import textInput from "./TextInput";
import { render,screen }from "@testing-library/react";

test("TextInput Components Test", async() => {
    const user = userEvent.setup();
    render(<TextInput />)

    const textElement = screen.getByText("Enterd Text:");
    expect(textElement).toBeInTheDocument();

    await user.type()
});