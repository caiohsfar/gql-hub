import React from 'react';
import { Text, Image } from 'react-native';
import { useQuery } from "@apollo/react-hooks";
import { Query } from 'react-apollo';
import { GET_REPOSITORIES_OF_CURRENT_USER } from "../../graphql/user/user.queries";
import { Container, Header, InfoPerfil, Login, Name } from './styles';
import Loading from "../../components/Loading";
import RepositoryList from "../../components/RepositoryList";

export default function Profile() {
    function renderError() {
        return <Text>Erro</Text>;
    }

    function renderLoading() {
        return <Loading/>
    }
    const { loading, error, data } = useQuery(GET_REPOSITORIES_OF_CURRENT_USER);

    if (error) return renderError();
    if (loading) return renderLoading();

    const { viewer } = data;
    return (
        <Container>
            <Text>{ viewer.name }</Text>
        </Container>
    )
}








