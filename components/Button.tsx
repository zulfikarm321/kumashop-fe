import React from 'react';

function Button({
    children,
    type = 'default'
}: {
    children: any;
    type: string;
}) {
    let classType = '';

    switch (type) {
        case 'primary':
            classType = 'btn-primary';
            break;
        case 'secondary':
            classType = 'btn-secondary';
            break;
        case 'default':
            classType = 'btn';
            break;
    }

    return <button className={classType}>{children}</button>;
}

export default Button;
