import React from 'react';
import { render } from "react-dom";
import MemoApp from "./MemoApp"

const rootElement = document.getElementById("root");
render(<MemoApp />, rootElement);