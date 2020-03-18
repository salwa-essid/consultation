

export default {

    items: [{
            name: 'Home',
            url: '/admin/home',
            icon: 'icon-cursor',
        },
        {
            name: 'Admins',
            url: '/base',
            icon: 'icon-puzzle',
            children: [{
                    name: 'List',
                    url: '/admin/list',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Add',
                    url: '/admin/add',
                    icon: 'icon-puzzle',
                }
            ],
        },
        {
          name: 'Patients',
          url: '/base',
          icon: 'icon-puzzle',
          children: [{
                  name: 'List',
                  url: '/admin/listpatient',
                  icon: 'icon-puzzle',
              },

          ],
      },
        {
            name: 'Statistics',
            url: '/buttons',
            icon: 'icon-cursor',
        },
        {
            name: 'Logs',
            url: '/charts',
            icon: 'icon-pie-chart',
        }
    ],
};
