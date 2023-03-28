import Frontdesk from '../components/Unit/unit2Osun/Frontdesk';
import Suspect from '../components/Suspect/SuspectForm/Suspect';
import SuspectSurety from '../components/MakeSurety/SuspectSurety'
import MoreInfo from '../components/MoreInfo/MoreInfo';
let route = [

    { path: '/unit2Osun', exact: true, name: 'Unit2Osun' },
    {
        path: '/unit2Osun/frontdesk',
        exact: true,
        name: 'frontdesk',
        component: Frontdesk
    },
    {
        path: '/unit2Osun/frontdesk/createsuspect', exact: true,
        name: 'Suspect',
        component: Suspect
    },

    {
        path: '/unit2Osun/edit-suspect-surety/:martic_number',
        exact: true, name: 'SuspectSurety',
        component: SuspectSurety
    },


    {
        path: '/unit2Osun/moreinfo/:martic_number',
        exact: true,
        name: 'MoreInfo',
        component: MoreInfo
    }




]


export default route;