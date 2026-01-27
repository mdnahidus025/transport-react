import React from 'react';
import DetailsContact from '../../features/team-details/DetailsContact';
import MemberDetails from '../../features/team-details/MemberDetails';

const TeamDetails: React.FC = () => {
    return (
        <>
            <MemberDetails />
            <DetailsContact />
        </>
    );
};

export default TeamDetails;