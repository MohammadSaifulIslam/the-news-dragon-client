import React, { useEffect, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
           <h3 className='mb-3'>All Caterogy</h3>
           <div >
            {
                categories.map(category => <p
                key={category.id}
                className='text-light ms-3'
                >
                    <NavLink  to={`/category/${category.id}`} className={` text-secondary text-decoration-none`}>{category.name}</NavLink>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftNav;