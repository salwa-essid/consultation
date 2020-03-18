import React from 'react';



const Dashboard = React.lazy(() => import('./views/Dashboard'));



const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));



const Profil = React.lazy(() => import('./views/patient/profil'));
const Payment = React.lazy(() => import('./views/patient/payment'));
const Planning = React.lazy(() => import('./views/patient/planning'));

const Appointement = React.lazy(() => import('./views/Appointment/appointement'));
const PatientDashboard = React.lazy(() => import('./views/patient/patientDashboard'));
const AddPatient = React.lazy(() => import('./views/psy/Add'));
const UpdatePatient  = React.lazy(() => import('./views/psy/UpdatePatient'));
const ListPatient  = React.lazy(() => import('./views/psy/List'));

const AddPsy = React.lazy(() => import('./views/admin/Add'));
const ListPsy  = React.lazy(() => import('./views/admin/List'));
const ListPatientAd  = React.lazy(() => import('./views/admin/listpatient'));
const AdminLogin = React.lazy(() => import('./views/Pages/Login/adminLogin'));
const UpdatePsy  = React.lazy(() => import('./views/admin/UpdatePsy'));

const PsyInfo = React.lazy(() => import('./views/admin/psyInfo'));
const PatientInfo = React.lazy(() => import('./views/psy/patientInfo'));

const ListRDV  = React.lazy(() => import('./views/psy/listrdv'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },

  { path: '/patient/profil/:id', exact: true, name: 'Profil', component: Profil },





  { path: '/patient/payment', exact: true, name: 'Payment', component: Payment },
  { path: '/patient/planning', exact: true, name: 'Planning', component: Planning },

  { path: '/Appointment/appointement', exact: true, name: 'Appointement', component: Appointement },
  { path: '/patient/home', exact: true, name: 'patient dashboard', component: PatientDashboard },
  { path: '/psy/add', exact: true, name: 'add patient', component: AddPatient },
  { path: '/psy/update/:id', exact: true, name: 'update_patient', component: UpdatePatient  },
  { path: '/psy/list', exact: true, name: 'List Patient', component: ListPatient },
  { path: '/psy/listRDV', exact: true, name: 'List RDV', component: ListRDV },


  { path: '/admin/add', exact: true, name: 'add psy', component: AddPsy },
  { path: '/admin/list', exact: true, name: 'List ', component: ListPsy },
  { path: '/admin/login', exact: true, name: 'admin_login', component: AdminLogin },
  { path: '/admin/listpatient', exact: true, name: 'List Patient', component: ListPatientAd  },
  { path: '/psy/info/:id', exact: true, name: 'Patient info', component: PatientInfo },
  { path: '/admin/info/:id', exact: true, name: 'Psy info', component: PsyInfo },
  { path: '/patient/info/:id', exact: true, name: 'Patient info', component: PatientInfo },
  { path: '/admin/update/:id', exact: true, name: 'update_psy', component: UpdatePsy  },
];

export default routes;
