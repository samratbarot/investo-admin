import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'menu',
    icon: 'iconsminds-shop-4',
    label: 'menu.menu',
    to: `${adminRoot}/`,
    subs: [
      {
        icon: 'simple-icon-home',
        label: 'menu.dashboard',
        to: `${adminRoot}/gogo/start`,
      },
      {
        icon: 'simple-icon-dollar-sign',
        label: 'menu.market',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-user',
    label: 'menu.second-menu',
    to: `${adminRoot}/second-menu`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-male-female',
        label: 'menu.customer_list',
        to: `${adminRoot}/second-menu/second`,
      },
      {
        icon: 'iconsminds-wallet',
        label: 'menu.account_list',
        to: `${adminRoot}/second-menu/second/account`,
      },
      {
        icon: 'iconsminds-monitor-analytics',
        label: 'menu.activities ',
        to: `${adminRoot}/second-menu/second/activies`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-repeat',
    label: 'menu.order-list',
    to: `${adminRoot}/order`,
  
  },
  {
    id: 'request',
    icon: 'iconsminds-up---down',
    label: 'menu.request',
    to: `${adminRoot}/request-menu`,
    subs: [
      {
        icon: 'iconsminds-up',
        label: 'menu.diposite',
        to: `${adminRoot}/request-menu/request`,
      },
      {
        icon: 'iconsminds-down',
        label: 'menu.withdraw',
        to: `${adminRoot}/request-menu/request/withdraw`,
      },
     
    ],
  },
  {
    id: 'report',
    icon: 'iconsminds-digital-drawing',
    label: 'menu.report',
    to: `${adminRoot}/report`,
  
  },
  {
    id: 'ipo',
    icon: 'iconsminds-idea',
    label: 'menu.ipo',
    to: `${adminRoot}/ipo`,
    subs: [
      {
        icon: 'iconsminds-rocket',
        label: 'menu.ipolist',
        to: `${adminRoot}/ipo`,
      },
      {
        icon: 'iconsminds-energy',
        label: 'menu.secondary_market_list',
        to: `${adminRoot}/ipo/secondary-market`,
      },
      {
        icon: 'iconsminds-notebook',
        label: 'menu.article',
        to: `${adminRoot}/request-menu/request/withdraw`,
      },
     
    ],
  },
  {
    id: 'setting',
    icon: 'iconsminds-gear',
    label: 'menu.setting',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
