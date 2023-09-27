import React from "react"
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import genres from "../api/Genres"
import '../styles/Player.css'

function Player({ player, handleClick, direction, isVisible, className }){

    const genresId = []
    const genresName = []
    genres.map((genre) => {
        genresId.push(genre.id)
        genresName.push(genre.name)
    })
    const findGenreName = (num) => {
        const index = genresId.indexOf(num)
        if(index === -1){
            return ""
        }else{
            return genresName[index]
        }
    }
    
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div

                    className={`player ${direction === 0 ? 'left' : 'right'} ${className === undefined? "" : className}`} 
                    onClick={handleClick}
                    key={player.id}

                    LayoutGroup
                    whileTap={{ scale: 1.1 }}
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: 20 }}
                >
                    <div className="player-img">
                        <img src={`https://image.tmdb.org/t/p/original/${player.poster_path}`} alt={`${player.title}`}/>
                        <div className="genres-container">
                            <div className="genre">{findGenreName(player.genre_ids[0])}</div>
                            <div className="genre">{findGenreName(player.genre_ids[1])}</div>
                            <div className="genre">{findGenreName(player.genre_ids[2])}</div>
                            <div className="genre">{findGenreName(player.genre_ids[3])}</div>
                            <div className="genre">{findGenreName(player.genre_ids[4])}</div>
                        </div>                                               
                    </div>
                    
                </motion.div>            
            )}
             
        </AnimatePresence>
        
        
    )
}

export default Player