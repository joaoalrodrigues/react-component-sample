import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export interface Genre {
    id: number;
    name: string;
    title: string;
}

export function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

    function onChangeGenre(genre: Genre) {
        setSelectedGenre(genre);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SideBar onChangeGenre={onChangeGenre} />

            <Content selectedGenre={selectedGenre} />
        </div>
    )
}