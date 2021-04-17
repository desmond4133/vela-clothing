import React from 'react';

import './collection-preview.styles.scss';

// destructured the props of the CollectionPreview from ShopPage and mapped the props to be displayed

const CollectionPreview = ({ title, items }) => (
    
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <div key={item.id}>{item.name}</div>
                ))}
        </div>
    </div>
);

export default CollectionPreview;