import Cookie from 'js-cookie';

export default {
    computed: {
        session_id () {
            return Cookie.get('session_id');
        }
    }
};