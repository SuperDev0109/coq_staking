/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Reinvestments from 'views/Reinvestments';
import Rewards from 'views/Rewards';
import Buycoq from 'views/Buycoq';
import Wallets from 'views/Wallets';
import Coqswap from "views/coqswap";
import Staking from "views/Staking";
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
// import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home or Overview",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/reinvestments",
    name: "Reinvestments",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: Reinvestments,
    layout: "/admin",
  },
  {
    path: "/rewards",
    name: "Rewards",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-pin",
    component: Rewards,
    layout: "/admin",
  },
  {
    path: "/buyCOQ",
    name: "Buy COQ",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bell-55",
    component: Buycoq,
    layout: "/admin",
  },
  {
    path: "/wallets",
    name: "Wallets",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-single-02",
    component: Wallets,
    layout: "/admin",
  },
  {
    path: "/staking",
    name: "Staking",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-send",
    component: Staking,
    layout: "/admin",
  },
  {
    path: "/vote",
    name: "Vote",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-sound-wave",
    component: Coqswap,
    layout: "/admin",
  },
  {
    path: "/swap",
    name: "Swap",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-spaceship",
    component: Coqswap,
    layout: "/admin",
  },
  {
    path: "/nft",
    name: "NFT",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-puzzle-10",
    component: Coqswap,
    layout: "/admin",
  },
  // {
  //   path: "/links",
  //   name: "Links",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-align-center",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "https://coqtoken.org/",
  //   name: "COQ Website",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-world",
  //   // component: Dashboard,
  //   // layout: "/admin",
  // },
  
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
// },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
];
export default routes;
