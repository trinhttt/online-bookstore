/**
 * Created by tutrinh on 5/11/18.
 */
var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from Book,NhaSX,Loai where Book.idNhaSX=NhaSX.idNhaSX and Book.idLoai=Loai.idLoai';
    return db.load(sql);
}
// inner join NhaSX on Book.idNhaSX = NhaSX=idNhaSX
exports.single = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from Book where idSach = ${id}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}
// SELECT DISTINCT StudentID, student_sport.SportID
// FROM student_sport
// -- Search all sport played in a match and plays by the student
// -- (common values sportid btw student_sport & matches)
// INNER JOIN matches on student_sport.SportID = matches.SportID
// WHERE
// -- Select the appropriate player
// student_sport.StudentID = @StudentID
// exports.single = (id) => {
//     return new Promise((resolve, reject) => {
//         var sql = `select * from NhaSX where idNhaSX = ${id}`;
//         db.load(sql).then(rows => {
//             if (rows.length === 0) {
//                 resolve(null);
//             } else {
//                 resolve(rows[0]);
//             }
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }
//
// exports.single = (id) => {
//     return new Promise((resolve, reject) => {
//         var sql = `select * from Loai where idLoai = ${id}`;
//         db.load(sql).then(rows => {
//             if (rows.length === 0) {
//                 resolve(null);
//             } else {
//                 resolve(rows[0]);
//             }
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }


