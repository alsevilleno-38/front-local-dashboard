import React from "react";
import Active from "../../components/Auth/Active";
import Link from "next/link";
import Prepare from "../../components/Auth/Prepare";
import { Provider } from "react-redux";
import store from "../../store/index";

const indexPage = props => {
    return (
        <Provider store={store}>
            <Link href="/activate/">
                <h1>Activate Page</h1>
            </Link>
            <Link href="/activate/active">
                <Active/>
            </Link>
            <Link href="/activate/prepare">
                <Prepare/>
            </Link>
        </Provider>
    )
}

export default indexPage;