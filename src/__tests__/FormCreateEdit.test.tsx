
    import React from "react";
    import { render, screen, fireEvent } from "@testing-library/react";
    import FormCreateEdit from "../components/FormCreateEdit";
    
    const props = {};
    
    test("should render FormCreateEdit", () => {
      render(<FormCreateEdit {...props} />);
    });
    