import React from 'react';

const PageNumber = ({page, pages, title}) => {
    
    return (
        <div>
            <div>{title} {page + 1} / {pages.length}</div>
        </div>
    )
}

export default PageNumber