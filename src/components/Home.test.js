import { render, waitFor } from "@testing-library/react";
import Home from "./Home";


describe ("home component", () => {
    it("debe mostrar los nombres de los personajes", async()=> {
        render(<Home/>);
        await waitFor(() =>{
            screen.getByText("3-D Man")
        })
    })
})