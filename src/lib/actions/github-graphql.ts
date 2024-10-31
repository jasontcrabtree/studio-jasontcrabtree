/*
Handles connecting to the GitHub graphql API in a server action and returns data via a simple interface based on different calls
*/

// query {
//   viewer {
//     login
//     contributionsCollection {
//       contributionYears
//       contributionCalendar {
//         totalContributions
//         weeks {
//           contributionDays {
//             contributionCount
//             contributionLevel
//             color
//             date
//             weekday
//           }
//         }
//         months {
//           firstDay
//           totalWeeks
//         }
//       }
//     }
//   }
// }
