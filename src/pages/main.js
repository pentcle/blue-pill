import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import logo from '../images/yearn-logo.svg';
import {Link} from "react-router-dom";

export const Main = () => {
  return (
    <div>
        <Layout>
            <main>
                <article className={"vertical-center-container"}>
                    <p className={"text-large vertical-center"}>
                        YFI story
                    </p>
                    <Link to={"/thebluepill"}>the blue pill</Link>
                    <Link to={"/images"}>image library</Link>
                </article>
            </main>
      </Layout>
    </div>
  );
};
