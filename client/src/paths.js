
const PATHS = {
    home: '/',
    catalog: '/offers',
    details: '/offers/:offerId',
    profile: '/profile',
    error404: '*',

    login: '/login',
    register: '/register',
    logout: '/logout',
    
    addOffer: '/offers/add',
    editOffer: '/offers/:_id/edit',
    deleteOffer: '/offers/:_id/delete',
    editProfile: '/profile/edit-profile',
};

export default PATHS;