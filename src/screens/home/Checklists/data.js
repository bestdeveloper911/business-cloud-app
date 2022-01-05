const moment = require('moment');
import Images from "../../../constants/Images";
import i18n from '../../../i18n';
export default {
  tabItems: [
    {
      id: 1,
      name: i18n.t('dashboard.todo'),
      count: 2
    },
    {
      id: 2,
      name: i18n.t('dashboard.done'),
      count: 1
    },
    {
      id: 3,
      name: i18n.t('dashboard.all'),
      count: 3
    }
  ],
  my_team: [
    {
      name: 'Hayley Haughton',
      img: Images.TeamMember03,
      property: 'ONBOARDING'
    },
    {
      name: 'John Forest',
      img: Images.TeamMember02,
      property: 'BOOKKEEPING'
    },
    {
      default_img: Images.Service_Accounting,
      property: 'ACCOUNTING'
    },
    {
      default_img: Images.Service_Legal,
      property: 'LEGAL'
    }
  ],
  quick_links: [
    {
      name: 'Xero',
      img: Images.Product_Xero
    },
    {
      name: 'ReceiptBank',
      img: Images.Product_ReceiptBank
    },
    {
      name: 'Fathom',
      img: Images.Product_Fathom
    }
  ],
  checklist: {
    myTasks: [
      {
        state: 'EXPIRED',
        tasks: [
          {
            id: 1,
            name: 'Getting Started',
            property: 'Approval Max',
            icon: Images.Service_Accounting,
            desc: 'Find local experts to get advice on taxes and laws for your business',
            date: moment("2020-07-10"),
            price: 1
          },
        ]
      },
      {
        state: 'THIS WEEK',
        tasks: [
          {
            id: 2,
            name: 'Getting Started',
            property: 'Approval Max',
            icon: Images.Product_Approval,
            desc: 'Choose which sales channels you want to use',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 3,
            name: 'Payroll',
            property: 'Wagepoint',
            icon: Images.Product_WagePoint,
            desc: 'Contact a Cloud Solution Advisor',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 4,
            name: 'Getting Started',
            property: 'Approval Max',
            icon: Images.Product_Approval,
            desc: 'Password-protect your store',
            date: moment("2020-07-25"),
            price: 1
          }
        ]
      },
      {
        state: 'THIS MONTH',
        tasks: [
          {
            id: 6,
            name: 'Accounting',
            property: 'Xero',
            icon: Images.Product_Xero,
            desc: 'Choose which sales channels you want to use',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 7,
            name: 'Payroll',
            property: 'Wagepoint',
            icon: Images.Product_WagePoint,
            desc: 'Contact a Cloud Solution Advisor',
            date: moment("2020-07-25"),
            price: 1
          }
        ]
      },
      {
        state: 'COMPLETED',
        tasks: [
          {
            id: 8,
            name: 'Getting Started',
            property: 'Approval Max',
            icon: Images.Product_Approval,
            desc: 'Choose which sales channels you want to use',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 9,
            name: 'Accounting',
            property: 'Xero',
            icon: Images.Product_Xero,
            desc: 'Choose which sales channels you want to use',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 10,
            name: 'Getting Started',
            property: 'Approval Max',
            icon: Images.Product_Approval,
            desc: 'Choose which sales channels you want to use',
            date: moment("2020-07-25"),
            price: 1
          },
        ]
      }
    ],
    teamTasks: [
      {
        state: 'THIS WEEK',
        tasks: [
          {
            id: 1,
            name: 'Sales Tax Report',
            property: 'Bookkeeping',
            icon: Images.Service_Legal,
            desc: 'Password-protect your store',
            date: moment("2020-07-25"),
            price: 1
          },
          {
            id: 2,
            name: 'Sales Tax Report',
            property: 'Bookkeeping',
            icon: Images.Service_Legal,
            desc: 'Contact a Cloud Solution Advisor',
            date: moment("2020-07-25"),
            price: 1
          }
        ]
      },
      {
        state: 'COMPLETED',
        tasks: [
          {
            id: 3,
            name: 'Sales Tax Report',
            property: 'Bookkeeping',
            icon: Images.Service_Legal,
            desc: 'Think about which price plan you need',
            date: moment("2020-07-25"),
            price: 1
          }
        ]
      }
    ]
  }
}
