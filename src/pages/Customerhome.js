// import React from "react";

// export default function Customerhome() {
//   return (
//     <p>Customer Home</p>

//     <div th:unless="${ispremium}" class="non-premium">
//         <form action="pay">
//             <input type="submit" value="GET PREMIUM"/>
//         </form>

//         <br/> <br/>

//         <form action="logout">
//             <input type="submit" value="LOGOUT"/>
//         </form>
//     </div>

//     <div th:if="${ispremium}" class="premium">
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Artist</th>
//                     <th>Genre</th>
//                     <th>Play</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr th:each="song : ${songs}">
//                     <td th:text="${song.name}"></td>
//                     <td th:text="${song.artist}"></td>
//                     <td th:text="${song.genre}"></td>
//                     <td>
//                         <audio controls>
//                             <source th:src="${song.link}">
//                         </audio>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   );
// }
