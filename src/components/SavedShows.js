import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {
    const [ movies, setMovies ] = useState([])
    const { user } = UserAuth()

    useEffect(()=> {
        onSnapshot(doc(db, 'users', `${user?.email}`,(doc)=>{
            setMovies(doc.data()?.saved)
        }))
    },[user?.email])

    const movieRef = doc(db,'users', `${user?.email}`)
    const deleteShow = async (id) => {
        try {
            const result = movies.filter((item) => item.id !== id)
            await updateDoc(movieRef, {
                SavedShows: result
            })
        } catch (error) {
            console.log('err', error)
        }
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='relative flex items-center group' id='slider' >
                <Carousel movies={movies} />
            </div>  
        </>
    )
}

export default SavedShows