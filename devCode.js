// Delete all baskets
// from Mr. ChatGPT
// Successfully deleted all baskets on May 30, 2023.

// router.delete('/deleteAll', async (request, response) => {
//     try {
//       await Basket.deleteMany(); // Delete all documents in the "Basket" collection
//       response.json({ message: 'All baskets deleted successfully.' });
//     } catch (error) {
//       response.status(500).json({ message: error.message });
//     }
//   });



// This is the code which i was using for development. 
// I later learned there can only be one source, not three.
// Noted at 8:36 am on Wednesday, May 31. 


// {
//     "version": 2,
//     "builds": [
//         {
//             "src":"./index.js",
//             "use": "@vercel/node"
//         }
//     ],
//     "routes": [
//         {
//             "src":"/(.*)",
//             "headers": {
//                 "Access-Control-Allow-Origin": "http://localhost:3000, http://localhost:3001, https://epistemica-x.vercel.app"
//               },
//             "dest": "/"
//         }
//     ]
// }