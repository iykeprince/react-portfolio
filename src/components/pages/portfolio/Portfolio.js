import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../portfolio/Portfolio.css'



const Portfolio = ({ addCourseHandler }) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const onChangeHandler = (e) => {
        e.preventDefault();
        if (title && description && body && imageUrl && price) {
            const newCourse = { title, description, body, price, imageUrl };
            addCourseHandler(newCourse);
            history.replace('/');

        } else {
            console.log('empty values');
        }
    }



    return (
        <div className="bodys">
            <div className="container">
                <form onSubmit={onChangeHandler}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Title</span>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">ImageUrl</span>
                            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Body</span>
                            <textarea className="" id="" cols="50" rows="50" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                        </div>
                        <div className="input-box">
                            <span className="details">Description</span>
                            <textarea className="" id="" cols="50" rows="50" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="input-box">
                        <span className="details">Price</span>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Portfolio
