import { useState, useContext} from 'react'
import { AppContext } from '../App'
// import Album from './Album'
import Photo from './Photo'

const UserPhotos = ()=>{
    const { addNewPhoto, currentUserAlbums} = useContext(AppContext)

    const [photo, setPhoto] = useState({
        title: '',
        cover: '',
        albumId: currentUserAlbums,
        like: 0,
        dislike: 0
    })

    const changeFieldHandler = event=>{
        setPhoto({...photo, [event.target.name]: event.target.value})
    }

    const userPhotos = currentUserAlbums()

    return (
        <div className="col-8 p-3 my-2">
            <h3 className="text-center">My albums</h3>
            <div className ='row p-2'>
                {userPhotos.map(photo => <Photo key = {photo.id} photo = {photo} />)}
            </div>
            <button className="w-100 btn btn-success"
                type="button"
                data-bs-toggle="modal" data-bs-target="#addAlbumModal">
                add new album</button>
            <div className="modal fade" id="addAlbumModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Add the photo to the album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type album title"
                                value={photo.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="cover"
                                placeholder="Type cover src"
                                value={photo.cover}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick = {()=> /* addNewPhoto(photo) */console.log(photo)}
                                >
                                add album</button>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default UserPhotos