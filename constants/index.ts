export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/dashboard",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

export const faqInfo = [
  {
    title: 'Send Money',
    description: 'Send money to your friends, pay bills, and more. Everything is fast and without commission.'
  },
  {
    title: 'Receive Money',
    description: 'Easily receive money from friends and family directly into your account. Enjoy quick and hassle-free transactions.'
  },
  {
    title: 'Cash Back',
    description: 'Earn cash back on eligible purchases. Save money while you spend, and track your rewards seamlessly.'
  },
  {
    title: 'Connect Banks',
    description: 'Securely connect your bank accounts to track spending, view balances, and manage your finances in one place.'
  },
];
export const reviews = [
  {
    name: "Sarah J.",
    occupation: "Marketing Manager",
    review: "I’ve been using Bankon for the past six months, and it has completely transformed the way I manage my finances. As someone who juggles multiple bank accounts and credit cards, keeping track of my spending and savings used to be a daunting task. Bankon simplifies everything with its intuitive interface and real-time updates. It’s become an essential tool for staying organized and on top of my financial goals.",
    profileURL:'/icons/sarah_profile.svg',
    workImgURL: '/icons/work_1.svg',
    quoteSvg: '/icons/quote_svg.svg',
    rating: [
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg'
    ]
  },
  {
    name: "Michael T.",
    occupation: "Software Developer",
    review: "Bankon has been a lifesaver for me! I manage several bank accounts and credit cards, and before Bankon, tracking my finances was a hassle. The app’s seamless integration and detailed reporting features make it easy to see where my money is going and how I can improve my savings. It’s incredibly user-friendly and has made budgeting so much more manageable.",
    profileURL:'/icons/micheal_profile.svg',
    workImgURL: '/icons/work_2.svg',
    quoteSvg: '/icons/quote_svg.svg',
    rating: [
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg'
    ]
  },
  {
    name: "Richard R.",
    occupation: "Freelance Graphic Designer",
    review: "Using Bankon has been a game-changer for my financial management. I used to struggle with keeping track of my various accounts and transactions, but Bankon has streamlined the process with its excellent dashboard and expense tracking. The ability to categorize and analyze my spending has helped me make smarter financial decisions. I highly recommend it to anyone looking to get their finances in order.",
    profileURL:'/icons/richard_profile.svg',
    workImgURL: '/icons/work_3.svg',
    quoteSvg: '/icons/quote_svg.svg',
    rating: [
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg'
    ]
  },
  {
    name: "David M.",
    occupation: "Financial Analyst",
    review: "I’m impressed with how Bankon has simplified my financial life. With multiple accounts and credit cards, I needed a tool that could handle it all, and Bankon delivers. The app’s features are robust, providing clear insights into my spending patterns and helping me stay on track with my savings goals. It’s intuitive, reliable, and has made managing my money so much easier.",
    profileURL:'/icons/david_profile.svg',
    workImgURL: '/icons/work_4.svg',
    quoteSvg: '/icons/quote_svg.svg',
    rating: [
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg',
      '/icons/rating.svg'
    ]
  }
];
export const reviewStats = [
  {
    number: 98,
    description: "Customer Statisfaction",
    sign:"%"
  },
  {
    number: 1,
    description: "New Users Per Week",
    sign:"K+"
  },
  {
    number: 100,
    description: "Positive Feedback Rate",
    sign:"%"
  },
] 
export const blogStats = [
  {
    imageURL: "/icons/unlock_insights.svg",
    title:"Unlock Insights",
    preDesc:"Discover financial opportunites"
  },
  {
    imageURL: "/icons/dive_deeper.svg",
    title:"Dive Deeper",
    preDesc:"Explore detailed analytics"
  },
  {
    imageURL: "/icons/spendage.svg",
    title:"Success Drive",
    preDesc:"Empower your investment journey"
  }
]
// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};
