import ReactDOM from "react-dom/client";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores/index";
import { useEffect } from "react";

function ApolloSetting(props) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        const result = localStorage.getItem("accessToken");
        setAccessToken(result ?? "");
    }, []);

    const uploadLink = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql/",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    });

    <ApolloProvider client={client}>{props.child}</ApolloProvider>;
}

export default ApolloSetting;
