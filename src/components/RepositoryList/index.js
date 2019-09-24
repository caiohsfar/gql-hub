import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from "../RepositoryItem";

export default function RepositoryList({ repos }) {
    return (
        <FlatList
            data={repos}
            keyStractor={({ item }) => item.node.id}
            renderItem={({ item }) => <RepositoryItem {...item } />}
        />
    )
}