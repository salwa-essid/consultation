

export default {

    items: [{
            name: 'Home',
            url: '/psy/home',
            icon: 'icon-cursor',
        },
        {
            name: 'Patient',
            url: '/base',
            icon: 'icon-puzzle',
            children: [{
                    name: 'List',
                    url: '/psy/list',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Add',
                    url: '/psy/add',
                    icon: 'icon-puzzle',
                }
            ],
        },
        {
          name: 'RDV',
          url: '/psy/listRDV',
          icon: 'icon-cursor',
      },
      {
        name: 'Planning',
        url: '/buttons',
        icon: 'icon-cursor',
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
