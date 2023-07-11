import Frontdesk from '../components/Unit/unit1Osun/Frontdesk';
import Suspect from '../components/Suspect/SuspectForm/Suspect';
import SuspectSurety from '../components/MakeSurety/SuspectSurety'
import RF from '../components/Unit/unit1Osun/RF';
import Rfoffiecer from '../components/OfficerComponents/Rfoffiecer';
import IPOofficer from '../components/OfficerComponents/IPOofficer';
import IPO from '../components/Unit/unit1Osun/IPO';
import OC from '../components/Unit/unit1Osun/OC';
import OCofficer from '../components/OfficerComponents/OCofficer';
import Note from '../components/MakeSurety/Note';
import SuspectEdit from '../components/Unit/unit1Osun/SuspectEdit';
import MoreInfo from '../components/MoreInfo/MoreInfo';
import Admin from '../components/Unit/unit1Osun/Admin';
import OfficersForSuspect from '../components/OfficerComponents/OfficersForSuspect';
import AdminNote from '../components/OfficerComponents/AdminNote';
import AdminChild from '../components/Unit/unit1Osun/AdminChild';
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
        // path: '/unit1Osun/edit-suspect-surety/:martic_number',
        path: '/unit1Osun/edit-suspect-surety/:id',
        exact: true, name: 'SuspectSurety',
        component: SuspectSurety
    },

    //child
    { path: '/unit1Osun/edit-suspect/:martic_number', exact: true, name: 'SuspectEdit', component: SuspectEdit },
    {path:'/unit1Osun/note/:id/', exact:true, name:'Note', component:Note},



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


    {
        path: '/unit1Osun/moreinfo/:martic_number',
        exact: true,
        name: 'MoreInfo',
        component: MoreInfo
    }
,
    // admin 
    {
        path: '/unit1Osun/admin',
        exact: true,
        name: 'ADMIN',
        component: Admin
    },

    {
        path: '/unit1Osun/admin/moreinfo/:id/',
        exact: true,
        name: 'MoreInfo',
        component: MoreInfo
    },
    // { path: '/unit1Osun/admin/dashboard', exact: true, name: 'dashboard', component: Dashboard },
    // { path: '/unit1Osun/admin/moreinfo/:id/:martic_number', exact: true, name: 'Moreinfo', component: MoreInfo },
    { path: '/unit1Osun/admin/note/:id/', exact: true, name: 'AdminNote', component: AdminNote },
    {
        path: '/unit1Osun/admin/add-suspect-officer/martic_number/',
        exact: true, name: 'OfficersForSuspect',
        component: OfficersForSuspect
    },
    // {
    //     path: '/unit1Osun/admin/moreinfo/:martic_number/',
    //     exact: true,
    //     name: 'MoreInfo',
    //     component: MoreInfo
    // },
    {
        
        path: '/unit1Osun/admin/edit-suspect/:martic_number/',
        exact: true, 
        name: 'AdminChild',
        component: AdminChild
    },
    // { path: '/unit1Osun/admin/edit-suspect/:martic_number', exact: true, name: 'SuspectEdit', component: SuspectEdit },






]


export default route;



// DB_CONNECTION=mysql
// DB_HOST=localhost
// DB_PORT=3306
// DB_DATABASE=codarnet_nafdac
// DB_USERNAME=codarnet_nafdac
// DB_PASSWORD=yi4L(k!]{ep@