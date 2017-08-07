export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
  },
  {
    title: 'Dashboard',
    icon: {
      class: 'fa fa-home',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    routing: '/default-layout/dashboard',
    badge: {
      text: 'New',
      color: '#fff',
      bg: '#E57373'
    },
    /*sub: [
      {
        title: 'Skills',
        routing: '/default-layout/dashboard'
      },
      {
        title: 'Dashboard v2',
        routing: '/default-layout/dashboard-2'
      }
    ]*/
  },
  {
    title: 'Widgets',
    icon: {
      class: 'fa fa-th',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    routing: '/default-layout/widgets'
  },
  {
    title: 'Vacancy calendar',
    icon: {
      class: 'fa fa-calendar',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    routing: '/default-layout/calendar'
  },
  {
    title: 'Detailed info by',
    groupTitle : true
  },
  {
    title: 'Programming language',
    icon: {
      class: 'fa fa-briefcase',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Java',
        routing: '/default-layout/button'
      },
      {
        title: 'JavaScript',
        routing: '/default-layout/card'
      },
      {
        title: 'Python',
        routing: '/default-layout/checkbox'
      },
      {
        title: 'Ruby',
        routing: '/default-layout/chips'
      },
      {
        title: 'C/C++',
        routing: '/default-layout/dialog'
      },
      {
        title: 'PHP',
        routing: '/default-layout/icon'
      },
      {
        title: 'Perl',
        routing: '/default-layout/input'
      },
      {
        title: 'List',
        routing: '/default-layout/list'
      },
      {
        title: 'Menu',
        routing: '/default-layout/menu'
      },
      {
        title: 'Progress bar',
        routing: '/default-layout/progress-bar'
      },
      {
        title: 'Progress spinner',
        routing: '/default-layout/progress-spinner'
      },
      {
        title: 'Radio Button',
        routing: '/default-layout/radio-button'
      },
      {
        title: 'Select',
        routing: '/default-layout/select'
      },
      {
        title: 'Slider',
        routing: '/default-layout/slider'
      },
      {
        title: 'Slide toggle',
        routing: '/default-layout/slide-toggle'
      },
      {
        title: 'Snackbar',
        routing: '/default-layout/snackbar'
      },
      {
        title: 'Tabs',
        routing: '/default-layout/tabs'
      },
      {
        title: 'Toolbar',
        routing: '/default-layout/toolbar'
      },
      {
        title: 'Tooltip',
        routing: '/default-layout/tooltip'
      }
    ]
  },
  {
    title: 'Database system',
    icon: {
      class: 'fa fa-diamond',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Alerts',
        routing: '/default-layout/ni-alerts'
      },
      {
        title: 'Badges',
        routing: '/default-layout/ni-badges'
      },
      {
        title: 'Breadcrumbs',
        routing: '/default-layout/ni-breadcrumbs'
      },
      {
        title: 'Buttons',
        routing: '/default-layout/ni-buttons'
      },
      {
        title: 'Cards',
        routing: '/default-layout/ni-cards'
      },
      {
        title: 'Chat',
        routing: '/default-layout/ni-chat'
      },
      {
        title: 'Files',
        routing: '/default-layout/ni-files'
      },
      {
        title: 'Horizontal timeline',
        routing: '/default-layout/ni-h-timeline'
      }
    ]
  },
  {
    title: 'Cloud computing',
    icon: {
      class: 'fa fa-font',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    routing: '/default-layout/typography'
  },
  {
    title: 'Big data',
    icon: {
      class: 'fa fa-table',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Simple table',
        routing: '/default-layout/simple-table'
      },
      {
        title: 'Editing table',
        routing: '/default-layout/editing-table'
      },
      {
        title: 'Filtering table',
        routing: '/default-layout/filtering-table'
      },
      {
        title: 'Pagination table',
        routing: '/default-layout/pagination-table'
      },
      {
        title: 'Bootstrap tables',
        routing: '/default-layout/bootstrap-tables'
      }
    ]
  },
  {
    title: 'Machine learning',
    icon: {
      class: 'fa fa-check-square-o',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Form Elements',
        routing: '/default-layout/form-elements'
      },
      {
        title: 'Form Layout',
        routing: '/default-layout/form-layout'
      },
      {
        title: 'Form Validation',
        routing: '/default-layout/form-validation'
      }
    ]
  },
  {
    title: 'Development tools',
    icon: {
      class: 'fa fa-pie-chart',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'IDE',
        routing: '/default-layout/ng2-charts'
      },
      {
        title: 'Version control',
        routing: '/default-layout/ngx-charts'
      }
      ,
      {
        title: 'Continious integration',
        routing: '/default-layout/amcharts'
      }
    ]
  },
  {
    title: 'Software arhitecture',
    icon: {
      class: 'fa fa-map-marker',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Google map',
        routing: '/default-layout/google-map'
      },
      {
        title: 'Leaflet map',
        routing: '/default-layout/leaflet-map'
      }
    ]
  },
  {
    title: 'Pages',
    groupTitle : true
  },
  {
    title: 'Pages service',
    icon: {
      class: 'fa fa-edit',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'About Us',
        routing: '/default-layout/about-us'
      },
      {
        title: 'FAQ',
        routing: '/default-layout/faq'
      },
      {
        title: 'TimeLine',
        routing: '/default-layout/timeline'
      },
      {
        title: 'Invoice',
        routing: '/default-layout/invoice'
      }
    ]
  },
  {
    title: 'Extra pages',
    icon: {
      class: 'fa fa-clone',
      bg: 'rgba(255,255,255,0.1)',
      color: '#fff'
    },
    sub: [
      {
        title: 'Sign In v1',
        routing: '/extra-layout/sign-in'
      },
      {
        title: 'Sign In v2',
        routing: '/default-layout/sign-in'
      },
      {
        title: 'Sign In with Social',
        routing: '/extra-layout/sign-in-social'
      },
      {
        title: 'Sign Up v1',
        routing: '/extra-layout/sign-up'
      },
      {
        title: 'Sign Up v2',
        routing: '/default-layout/sign-up'
      },
      {
        title: 'Forgot password',
        routing: '/extra-layout/forgot'
      },
      {
        title: 'Confirm email',
        routing: '/extra-layout/confirm'
      },
      {
        title: '404',
        routing: '/extra-layout/page-404'
      },
      {
        title: '500',
        routing: '/extra-layout/page-500'
      },
      {
        title: 'Not found',
        routing: '/default-layout/not-found'
      }
    ]
  }
];
