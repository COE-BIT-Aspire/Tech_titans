import React from 'react';

class Wish extends React.Component   {    
    render() {
        const { wishdet } = this.props;
        const { occ, age } = wishdet;
        return (
            <h1>We wish you happy {occ} {age}th birthday</h1>
        );
    }
}

export default Wish;