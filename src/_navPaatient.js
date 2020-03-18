
export default {

  items: [
    {
      name: 'Home',
      url: '/patient/home',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },



    },

    {

      name: 'Profile',
      url : '/patient/profil',
      icon: 'icon-puzzle',

    },
    {
      name: 'Payment',
      url: '/patient/payment',
   icon: 'icon-cursor',

    },

    {
      name: 'Planning',
      url: '/patient/planning',
      icon: 'icon-star',

    },
    {
      name: 'Appointment',
      url: '/Appointment/appointement',
      icon: 'icon-star',

    },




    {
      divider: true,
    },



    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },

  ],
};
