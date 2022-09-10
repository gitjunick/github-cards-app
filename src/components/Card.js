import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        console.log(profile);

        return (
            <div className="github-profile" style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} alt="profile pic"/>
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{fontSize: '125%'}}>{profile.login}</div>
                    <div className="company">{profile.type}</div>
                </div>
            </div>
        );
    }
}

export default Card;