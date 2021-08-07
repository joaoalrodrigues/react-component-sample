import { useEffect, useState } from "react";
import { Button } from "./Button";

import { api } from '../services/api';

import '../styles/sidebar.scss';

interface SideBarProps {
    onChangeGenre: Function;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export function SideBar(props: SideBarProps) {
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function handleClickButton(genre: GenreResponseProps) {
        setSelectedGenreId(genre.id);
        props.onChangeGenre(genre);
    }

    useEffect(() => {
        api.get<GenreResponseProps[]>(`genres`).then(response => {
            setGenres(response.data);
            handleClickButton(response.data[0]);
        });
    }, []);

    return (
        <>
            <nav className="sidebar">
                <span>Watch<p>Me</p></span>

                <div className="buttons-container">
                    {genres.map(genre => (
                        <Button
                            key={String(genre.id)}
                            title={genre.title}
                            iconName={genre.name}
                            onClick={() => handleClickButton(genre)}
                            selected={selectedGenreId === genre.id}
                        />
                    ))}
                </div>

            </nav>
        </>
    )
}