                                                            //Циклы while и for 1
// for (let num = 1; num <= 100; num++) {
//     console.log(num);
//   }


                                                            //2
// for (let num = 11; num < 34; num++){
//     console.log(num);
// }

                                                            //3

// for (let num = 0; num <= 100; num++){
//     if (num % 2 == 0){
//         console.log(num);
//     }
// }

                                                            //4
// let res = 0;
//     for (let num = 1; num <= 100; num++) {
//         res += num;{
//         console.log(res);
//     }
// }


                                                            //Работа с for для массивов 1
// let m = [1, 2, 3, 4, 5]
// for (let i = 0; i < m.length; i++){
//     console.log(m[i])
// }
 
                                                            //2
// let m = [1, 2, 3, 4, 5]
// let res = 0
//     for (let i = 0; i < m.length; i++){
//             res += i;{
//             console.log(res)
//         }
//     } 

                                                            //Работа с for-in 1
// var obj = {green: 'зеленый', red: 'красный ', blue: 'голубой' }
// for (key in obj){
//     console.log(obj)
// }

                                                            //2
// var obj = {Коля: '200', Петя: '300 ', Вася: '400' }
//     for (key in obj){
//         console.log([key]+ ' - Зарплата '+ obj [key]+' долларов ')
//     }

                                                            //Задачи 1
// var m = [2, 5, 9, 15, 0, 4];
//     for (var i = 0; i < m.length; i++){
//         if (m[i] > 3 && m[i] < 10){
//             console.log(m[i]);
//         }
// }


                                                            //2

// var arr = [3, -5, 7, -2, 4, 1];
// var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
// }
// console.log(sum);                                              


                                                            //3
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for(i = 0; i < arr.length; i++){
//     if(arr[i] == 4){
//         alert('Есть');
//         break;
//     }
// }

                                                            //4

// let m = ['10', '20', '30', '50', '235', '3000'];

//     for (i = 0; i < m.length; i++){
//         if (m[i][0] == '1' || m[i][0] == '2' || m[i][0] == '3'){
//             console.log(m[i]);
//         }
//     }

                                                            //5
// let m = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let def = '';
//     for (i = 0; i < m.length; i++){
//         def += m[i]+'';{
//             console.log('-'+def)
//         }
//     }

                                                            //6
// let m = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// for (let i = 0; i < m.length; i++) {
//     if (i > 4) {
//         document.write('<b>' + m[i] + '</b>' + ' ');
//     } else {
//         document.write( m[i] + ' ');
//     }
// }

                                                            //7
// let week = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Sn'];
// let day = ['Fr'];
// for (i = 0; i < week.length; i++) {
//     if (week[i] == day) {
//         document.write('<b>' + week[i] + '</b>');
//     } else {
//         document.write(week[i] + ' ');
//     }
// }

                                                            //8
// var n = 1000;
// var num = 0;
// while (n > 50) {
//     num++;
//     n /= 2; 
// }
// console.log();(n);
// document.write();(num);
