import React, {Component} from 'react';
import axios from 'axios';
import Character from "./Character";


class Characters extends Component {

    state = {
        info: {},
        characters: [],
        pageNumbers: [],
        currentPage: 0
    }

    numbers = (num) => {
        const numsArray = []
        for (let i = 0; i < num; i++) {
            numsArray.push(i)
        }
        numsArray.shift()
        return numsArray
    }

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(
                (response) => {
                    this.setState({
                        characters: response.data.results,
                        info: response.data.info,
                        pageNumbers: this.numbers(response.data.info.pages)
                    })
                }
            )


    }

    handleClick = (page) => {
        this.setState({
            currentPage: page
        })
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(
                (response) => {
                    this.setState({
                        characters: response.data.results
                    })
                }
            )
    }

    render() {
        const {characters, pageNumbers, currentPage} = this.state
        console.log(this.state)
        return (
            <div className="container">
                <div className="row mx-auto mt-5">
                    {
                        characters ? characters.map(character =>
                            <Character
                                key={character.id}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                origin={character.origin}
                                location={character.location}
                                image={character.image}
                            />) : null
                    }
                </div>
                <nav aria-label="Page navigation example" className="mt-5 w-50">
                    <ul className="pagination">
                        {
                            pageNumbers.map((page) => <li
                                className={`page-item ${currentPage === page ? 'active' : null}`} key={page}
                                onClick={() => this.handleClick(page)}><span
                                className="page-link">{page}</span></li>
                            )
                        }
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Characters;