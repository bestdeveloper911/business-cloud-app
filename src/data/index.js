const moment = require('moment');
import Images from "../constants/Images";
import i18n from '../i18n';

export default {
  tabItems: [
    {
      id: 1,
      name: 'Active',
      count: 2
    },
    {
      id: 2,
      name: 'Completed',
      count: 1
    },
    {
      id: 3,
      name: 'All',
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
  targets: [
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Onboarding',
      target_property: 'Approval Max',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '7 Sep 2020',
      tasks_count: 10,
      price: 1,
      reward: 15,
      icon: Images.Product_Approval,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: 'Sales Tax Report',
      target_property: 'Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '2 Sep 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.Service_Accounting,
      completed: false,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
    {
      target_name: 'Getting Started',
      target_property: 'Onboarding',
      team_member: '',
      team_img: Images.Product_Cloudmeb,
      date: '26 Aug 2020',
      tasks_count: 3,
      price: 1,
      reward: 15,
      icon: Images.LogoBlue,
      completed: true,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: []
    },
    {
      target_name: '2020 Managed Annual Payroll Reporting',
      target_property: 'Monthly Bookkeeping',
      team_member: 'Hayley Haughton',
      team_img: Images.Product_Cloudmeb,
      date: '28 Feb 2021',
      tasks_count: 3,
      price: 8,
      reward: 15,
      icon: Images.Service_Conversion,
      completed: true,
      myTasks: [
        {
          state: 'EXPIRED',
          tasks: [
            {
              id: 1,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 2,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 3,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
            {
              id: 4,
              desc: 'Find local experts to get advice on taxes and laws for your business',
              date: moment("2020-07-10"),
              price: 1
            },
          ]
        },
        {
          state: 'THIS MONTH',
          tasks: [
            {
              id: 2,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-24"),
              price: 1
            },
            {
              id: 3,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-26"),
              price: 1
            },
            {
              id: 4,
              desc: 'Password-protect your store',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 5,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        },
        {
          state: 'UPCOMING',
          tasks: [
            {
              id: 6,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 7,
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
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-07-25"),
              price: 1
            },
            {
              id: 9,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-07-25"),
              price: 1
            }
          ]
        }
      ],
      teamTasks: [
        {
          state: 'THIS WEEK',
          tasks: [
            {
              id: 1,
              desc: 'Password-protect your store',
              date: moment("2020-07-24"),
              team_member_image: Images.TeamMember03,
              price: 1
            },
            {
              id: 2,
              desc: 'Contact a Cloud Solution Advisor',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember02,
              price: 1
            },
            {
              id: 3,
              desc: 'Choose which sales channels you want to use',
              date: moment("2020-08-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        },
        {
          state: 'COMPLETED',
          tasks: [
            {
              id: 3,
              desc: 'Think about which price plan you need',
              date: moment("2020-07-25"),
              team_member_image: Images.TeamMember01,
              price: 1
            }
          ]
        }
      ]
    },
  ],
  tasks: [
    {
      state: 'EXPIRED',
      type: 'mine',
      id: 1,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Service_Accounting,
      desc: 'Find local experts to get advice on taxes and laws for your business',
      date: moment("2020-07-10"),
      price: 1
    },
    {
      state: 'EXPIRED',
      type: 'mine',
      id: 1,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Service_Accounting,
      desc: 'Find local experts to get advice on taxes and laws for your business',
      date: moment("2020-07-10"),
      price: 1
    },
    {
      state: 'EXPIRED',
      type: 'mine',
      id: 1,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Service_Accounting,
      desc: 'Find local experts to get advice on taxes and laws for your business',
      date: moment("2020-07-10"),
      price: 1
    },
    {
      state: 'THIS WEEK',
      type: 'mine',
      id: 2,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Product_Approval,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS WEEK',
      type: 'mine',
      id: 3,
      name: 'Payroll',
      property: 'Wagepoint',
      icon: Images.Product_WagePoint,
      desc: 'Contact a Cloud Solution Advisor',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS WEEK',
      type: 'mine',
      id: 4,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Product_Approval,
      desc: 'Password-protect your store',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS MONTH',
      type: 'mine',
      id: 6,
      name: 'Accounting',
      property: 'Xero',
      icon: Images.Product_Xero,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS MONTH',
      type: 'mine',
      id: 7,
      name: 'Payroll',
      property: 'Wagepoint',
      icon: Images.Product_WagePoint,
      desc: 'Contact a Cloud Solution Advisor',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'COMPLETED',
      type: 'mine',
      id: 8,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Product_Approval,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'COMPLETED',
      type: 'team',
      id: 8,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Product_Approval,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'COMPLETED',
      type: 'mine',
      id: 9,
      name: 'Accounting',
      property: 'Xero',
      icon: Images.Product_Xero,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'COMPLETED',
      type: 'mine',
      id: 10,
      name: 'Getting Started',
      property: 'Approval Max',
      icon: Images.Product_Approval,
      desc: 'Choose which sales channels you want to use',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS WEEK',
      type: 'team',
      id: 1,
      name: 'Sales Tax Report',
      property: 'Bookkeeping',
      icon: Images.Service_Legal,
      desc: 'Password-protect your store',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      state: 'THIS WEEK',
      type: 'team',
      id: 2,
      name: 'Sales Tax Report',
      property: 'Bookkeeping',
      icon: Images.Service_Legal,
      desc: 'Contact a Cloud Solution Advisor',
      date: moment("2020-07-25"),
      price: 1
    },
    {
      type: 'team',
      state: 'COMPLETED',
      id: 3,
      name: 'Sales Tax Report',
      property: 'Bookkeeping',
      icon: Images.Service_Legal,
      desc: 'Think about which price plan you need',
      date: moment("2020-07-25"),
      price: 1
    }
  ],
  settings: {
    financial: [
      {
        category: 'Business',
        fields: [
          {
            name: 'Company Name',
            value: 'OneLiveNetwork',
          },
          {
            name: 'Type',
            value: 1,
            values: [
              'Registered',
              'Partnership',
              'Incorporated',
              'Non-Profit',
              'Freelancer',
            ],
            type: 'select',
          },
          {
            name: 'Phone',
            value: '(514) 892-9751',
          },
          {
            name: 'Website',
            value: 'cloudmeb.com',
          },
        ],
      },
      {
        category: 'Fiscal Milestones',
        fields: [
          {
            name: 'Prev. Fiscal Year End',
            value: moment('2019-12-22'),
            type: 'date',
          },
          {
            name: 'Q1',
            value: moment('2019-03-31'),
            type: 'date',
          },
          {
            name: 'Q2',
            value: moment('2020-06-30'),
            type: 'date',
          },
          {
            name: 'Q3',
            value: moment('2020-09-30'),
            type: 'date',
          },
          {
            name: 'Next. Fiscal Year End',
            value: moment('2020-12-22'),
            type: 'date',
          },
        ],
      },
      {
        category: 'Sales Tax Frequency',
        fields: [
          {
            name: 'Frequency',
            value: 4,
            values: [
              'Weekly',
              'Monthly',
              'Quarterly',
              'Yearly',
            ],
            type: 'select',
          },
        ],
      },
      {
        category: 'Monthly Transactions',
        fields: [
          {
            name: '# of transactions',
            value: 1,
            values: [
              '1-50',
              '50-100',
              '100-250',
              '250-500',
              '500-1000',
            ],
            type: 'select',
          },
        ],
      },
    ],
    billing: [
      {
        category: 'Payment Methods',
        fields: [],
      },
      {
        category: 'Billing Information',
        switchable: true,
        fields: [
          {
            name: 'Company Name',
            value: 'Cloudmeb',
          },
          {
            name: 'Email',
            value: 'marc@cloudmeb.com',
          },
          {
            name: 'Street',
            value: 'Olga street2',
          },
          {
            name: 'City',
            value: 'Odesa',
          },
          {
            name: 'State/Province',
            value: 'Odesa Province',
          },
          {
            name: 'Postal Code',
            value: '22343',
          },
          {
            name: 'Country',
            value: 'Ukraine',
          },
        ],
      },
    ],
    profile: [
      {
        category: i18n.t('dashboard.general'),
        switchable: true,
        fields: [
          {
            name: 'Name',
            value: 'Marc Eric',
          },
          {
            name: 'Email',
            value: 'marc@cloudmeb.com',
          },
          {
            name: 'Language',
            value: '',
            type: 'dropdown',
          },
        ],
      },
      {
        category: 'Password',
        fields: [
          {
            name: 'Current Password',
            value: '',
            type: 'password',
          },
          {
            name: 'New Password',
            value: '',
            type: 'password',
          },
          {
            name: 'Confirm Password',
            value: '',
            type: 'password',
          },
        ],
      },
    ],
  },
}
