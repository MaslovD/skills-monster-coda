export const MENU: any = [
  {
    title: 'Main',
    groupTitle: true
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
    sub: [
      {
        title: 'Skills',
        routing: '/default-layout/dashboard'
      }
    ]
  }
];
