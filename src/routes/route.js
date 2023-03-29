import Frontdesk from '../components/Unit/unit1Osun/Frontdesk';
import Suspect from '../components/Suspect/SuspectForm/Suspect';
import SuspectSurety from '../components/MakeSurety/SuspectSurety'
import RF from '../components/Unit/unit1Osun/RF';
import Rfoffiecer from '../components/OfficerComponents/Rfoffiecer';
import IPOofficer from '../components/OfficerComponents/IPOofficer';
import IPO from '../components/Unit/unit1Osun/IPO';
import OC from '../components/Unit/unit1Osun/OC';
import OCofficer from '../components/OfficerComponents/OCofficer';
const route = [
    { path: '/unit1Osun', exact: true, name: 'Unit1Osun' },
    {
        path: '/unit1Osun/frontdesk',
        exact: true,
        name: 'frondesk',
        component: Frontdesk
    },
    {
        path: '/unit1Osun/frontdesk/createsuspect', exact: true,
        name: 'Suspect',
        component: Suspect
    },

    {
        path: '/unit1Osun/edit-suspect-surety/:martic_number',
        exact: true, name: 'SuspectSurety',
        component: SuspectSurety
    },



    {
        path: '/unit1Osun/rf',
        exact: true,
        name: 'RF',
        component: RF
    },
   
    {
        path: '/unit1Osun/rf/add-suspect-officer/:martic_number',
        exact: true,
        name: 'Officer',
        component: Rfoffiecer
    },

    // this  is ipo below
    {
        path: '/unit1Osun/ipo',
        exact: true,
        name: 'IPO',
        component: IPO
    },
    {
        path: '/unit1Osun/ipo/add-suspect-officer/:martic_number',
        exact: true,
        name: 'OfficerIPO',
        component:IPOofficer
    },


    //this is oc below
    {
        path: '/unit1Osun/oc',
        exact: true,
        name: 'OC',
        component: OC
    },
    {
        path: '/unit1Osun/oc/add-suspect-officer/:martic_number',
        exact: true,
        name: 'OfficerOC',
        component:OCofficer
    },









]


export default route;