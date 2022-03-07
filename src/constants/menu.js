import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'gogo',
    icon: 'iconsminds-home',
    label: 'menu.menu',
    to: `${adminRoot}/gogo`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.dashboard',
        to: `${adminRoot}/gogo/start`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.market',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.second-menu',
    to: `${adminRoot}/second-menu`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.customer_list',
        to: `${adminRoot}/second-menu/second`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.account_list',
        to: `${adminRoot}/second-menu/second`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.activities ',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.order-list',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'request',
    icon: 'iconsminds-library',
    label: 'menu.request',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
  {
    id: 'report',
    icon: 'iconsminds-library',
    label: 'menu.report',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
  {
    id: 'ipo',
    icon: 'iconsminds-library',
    label: 'menu.ipo',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
  {
    id: 'setting',
    icon: 'iconsminds-library',
    label: 'menu.setting',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
