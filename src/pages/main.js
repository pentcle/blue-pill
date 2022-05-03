import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import logo from '../images/yearn-logo.svg';
import {Link} from "react-router-dom";

export const Main = () => {
    return (<div>
            <Layout>
                <main>
                    <article className={"vertical-center-container"}>
                        <p className={"text-large vertical-center"}>
                            YFI story
                        </p>
                        <Link className={"margin-top-2"} to={"/thebluepill/en"}>the blue pill - english</Link>
                        <Link to={"/thebluepill/sp"}>the blue pill - spanish</Link>
                        <Link to={"/thebluepill/hi"}>the blue pill - hindi</Link>
                        <Link to={"/thebluepill/po"}>the blue pill - portugese</Link>
                        <Link to={"/thebluepill/tu"}>the blue pill - turkish</Link>
                        <Link className={"margin-top-2"} to={"/images"}>image library</Link>
                    </article>
                </main>
            </Layout>
        </div>);
};
