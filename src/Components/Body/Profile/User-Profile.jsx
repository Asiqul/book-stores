import Forms from '../Pop-up/Forms';
import ProfileContext from '../../../Utils/Context/profile-context';
import { useContext } from 'react';
import propTypes from 'prop-types';

function UserProfile({ profile }) {
    const { isActive } = useContext(ProfileContext);
    return (
        <div className={`${isActive === 'profile' ? 'flex' : 'hidden'} flex-col w-full gap-2 px-3`}>
            <Forms
                id="fullname"
                label="Nama Lengkap"
                type="text"
                placeholder={profile?.firstname + ' ' + profile?.lastname}
                disable={true}
            />
            <Forms id="email" label="Email" type="email" placeholder={profile?.email} disable={true} />
            <Forms id="handphone" label="No. Handphone" type="number" placeholder={profile?.phone} disable={true} />
        </div>
    );
}

UserProfile.propTypes = {
    profile: propTypes.object.isRequired,
};

export default UserProfile;
