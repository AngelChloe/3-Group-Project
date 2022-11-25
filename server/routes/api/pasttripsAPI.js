require("dotenv").config();
const express = require("express");
const async = require("async");
const User = require("../models/user");
const Pasttrips = require("../models/pasttrips");
const { makeid } = require("../function/misc");
const AWS = require("aws-sdk");

const region = "ap-southeast-1";
const accessKeyId = process.env.ACCESS_KEYID;
const secretAccessKey = process.env.SECRET_ACCESSKEY;
const bucketName = process.env.BUCKETNAME;

AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region
});

const router = express.Router();

//Upload the pasttrips by creating a new entry in the database

router.post("/upload", (req, res) => {
    const { number,title,desc, favspot, favmeal, favrestaurant, uri, startDate, endDate } = req.body;
    var tempData = {};
    const regex = /^data:image\/\w+;base64,/;
    let pasttripsImgKey = [];
    console.log(req.body);
    User.findOne({ number }, (err, usr) => {
      if (err || !usr) {
        console.log(err);
        console.log("user not found");
        return res.status(400).json({ error: "User not found" });
      }

      async.forEach(
        uri,
        (photoObj, callback) => {
          console.log(photoObj.uri);
          const body = Buffer.from(photoObj.uri.replace(regex, ""), "base64");
          const tempId = makeid(6);
          const key = `${number}/${tempId}/posmImage${tempId}`;
          pasttripsImgKey.push(key);
          const s3 = new AWS.S3();
          const param = {
            Bucket: bucketName,
            Key: key,
            Body: body,
            ContentEncoding: "base64",
            ContentType: photoObj.fileType,
          };

          s3.putObject(param, (err, data) => {
            if (err) {
              console.log("Error when uploading images to s3 in update posm : ");
              console.log(err);
              return res.status(400).json({ error: "Internal Error" });
            }

            console.log({ data });
            console.log("Uploaded to S3");
          });

          callback();
        },
        (err) => {
          if (err) {
            console.log("Error after loop photoset in update posm : ");
            console.log(err);
            return res.status(400).json({ error: "Internal Error" });
          }

          let newUpload = {
            customer: {
              name: usr.name,
              number: usr.number
            },
            status: "Approved",
            title: title,
            description: desc,
            imageKey: pasttripsImgKey,
            favspot: favspot,
            favrestaurant: favrestaurant,
            favmeal:favmeal,
            startdate: startDate,
            enddate: endDate,
            recorddate
          };

          Pasttrips.create(newUpload, function (err, mypasttrips) {
            if (err) {
              console.log(err);
              return res.status(400).json({ error: "Cannot create New Upload." });
            }
            return res.status(200).json({ status: "Success"});
          });
        }
      );
    });
  });

module.exports = router;

router.post('/readAllByUser' , (req , res) => {
    const {number} = req.body
    console.log(req.body)
    var tempData = []
    const s3 = new AWS.S3();
    Pasttrips.find({number:number}, (err, diaries) => {
      if(err) {
        console.error(err);
            return res.status(400).json({error : "Internal Error."});
      }
      if(diaries){
        async.forEach(diaries, (pasttrips, cbTran) => {
          let temp = {
            status: pasttrips.status,
            title: pasttrips.title,
            description: pasttrips.description,
            favspot: pasttrips.favspot,
            favrestaurant: pasttrips.favrestaurant,
            favmeal:pasttrips.favmeal,
            startdate: pasttrips.startDate,
            enddate: pasttrips.endDate
          }
          if (pasttrips.status == "Rejected") {
            pasttrips.reason = pasttrips.reason
          }
          pasttrips.images = [];

          async.forEach(pasttrips.imageKey , (key , next) => {
            const s3Param = {
              Bucket : bucketName,
              Key : key,
              Expires : 7200
            };
            // console.log(s3Param)

            s3.getSignedUrl("getObject" , s3Param , (err , url) => {
              if (err) {
                console.log("Error when get signed url in validations list : ");
                console.log(err);
                return res.status(400).json({error : "Internal Error"});
              }
              // console.log("push url to temp img")
              temp.images.push(url);
              // console.log(url)
              next();
            });
          }, (err) => {
            tempData.push(temp)
            cbTran()
          })

        }, (err) => {
          res.status(200).json({status: "Success", data: tempData});  
        })
      }
    })
  })

  router.post('/readAllByUserStatusFilter' , (req , res) => {
    const {number,status} = req.body
    console.log(req.body)
    var tempData = []
    const s3 = new AWS.S3();
    Pasttrips.find({number:number,status:status}, (err, diaries) => {
      if(err) {
        console.error(err);
            return res.status(400).json({error : "Internal Error."});
      }
      if(diaries){
        async.forEach(diaries, (pasttrips, cbTran) => {
          let temp = {
            status: pasttrips.status,
            title: pasttrips.title,
            description: pasttrips.description,
            favspot: pasttrips.favspot,
            favrestaurant: pasttrips.favrestaurant,
            favmeal:pasttrips.favmeal,
            startdate: pasttrips.startDate,
            enddate: pasttrips.endDate
          }
          if (pasttrips.status == "Rejected") {
            pasttrips.reason = pasttrips.reason
          }
          pasttrips.images = [];

          async.forEach(pasttrips.imageKey , (key , next) => {
            const s3Param = {
              Bucket : bucketName,
              Key : key,
              Expires : 7200
            };
            // console.log(s3Param)

            s3.getSignedUrl("getObject" , s3Param , (err , url) => {
              if (err) {
                console.log("Error when get signed url in validations list : ");
                console.log(err);
                return res.status(400).json({error : "Internal Error"});
              }
              // console.log("push url to temp img")
              temp.images.push(url);
              // console.log(url)
              next();
            });
          }, (err) => {
            tempData.push(temp)
            cbTran()
          })

        }, (err) => {
          res.status(200).json({status: "Success", data: tempData});  
        })
      }
    })
  })

  router.post('/readAllByUserDateFilter' , (req , res) => {
    const {number,startDate, endDate} = req.body
    console.log(req.body)
    let thisMonth = moment().format('MMMM')
    let year = moment().format('YYYY')
    var stDate = ""
    var edDate = ""
    var tempData = []
    const s3 = new AWS.S3();
    if(!startDate && !endDate) {
      stDate = new Date('1 ' + thisMonth + ' '+year);
      edDate = new Date().setHours(23 , 59 , 59 , 999)
    } else {
      stDate = new Date(startDate).setHours(00 , 00 , 00 , 000);
      edDate = new Date(endDate).setHours(23 , 59 , 59 , 999);
    }
    Pasttrips.find({number:number, createdAt: {$gte: stDate, $lte:edDate}}, (err, diaries) => {
      if(err) {
        console.error(err);
            return res.status(400).json({error : "Internal Error."});
      }
      if(pasttrips){
        async.forEach(pasttrips, (pasttrips, cbTran) => {
          let temp = {
            status: pasttrips.status,
            title: pasttrips.title,
            description: pasttrips.description,
            favspot: pasttrips.favspot,
            favrestaurant: pasttrips.favrestaurant,
            favmeal:pasttrips.favmeal,
            startdate: pasttrips.startDate,
            enddate: pasttrips.endDate
          }
          if (pasttrips.status == "Rejected") {
            pasttrips.reason = pasttrips.reason
          }
          pasttrips.images = [];

          async.forEach(pasttrips.imageKey , (key , next) => {
            const s3Param = {
              Bucket : bucketName,
              Key : key,
              Expires : 7200
            };
            // console.log(s3Param)

            s3.getSignedUrl("getObject" , s3Param , (err , url) => {
              if (err) {
                console.log("Error when get signed url in validations list : ");
                console.log(err);
                return res.status(400).json({error : "Internal Error"});
              }
              // console.log("push url to temp img")
              temp.images.push(url);
              // console.log(url)
              next();
            });
          }, (err) => {
            tempData.push(temp)
            cbTran()
          })

        }, (err) => {
          res.status(200).json({status: "Success", data: tempData});  
        })
      }
    })
  })

  router.get('/readAllPasttrips' , (req , res) => {
    Pasttrips.find({status:"Approved",createdAt:{$gte: stDate, $lte: edDate}}, (err, diaries) => {
      if(err) {
        console.error(err);
            return res.status(400).json({error : "Internal Error."});
      }
      if(diaries){
        async.forEach(diaries, (pasttrips, cbTran) => {
          let temp = {
            status: pasttrips.status,
            title: pasttrips.title,
            description: pasttrips.description,
            favspot: pasttrips.favspot,
            favrestaurant: pasttrips.favrestaurant,
            favmeal:pasttrips.favmeal,
            startdate: pasttrips.startDate,
            enddate: pasttrips.endDate
          }
          pasttrips.images = [];

          async.forEach(pasttrips.imageKey , (key , next) => {
            const s3Param = {
              Bucket : bucketName,
              Key : key,
              Expires : 7200
            };
            // console.log(s3Param)

            s3.getSignedUrl("getObject" , s3Param , (err , url) => {
              if (err) {
                console.log("Error when get signed url in validations list : ");
                console.log(err);
                return res.status(400).json({error : "Internal Error"});
              }
              // console.log("push url to temp img")
              temp.images.push(url);
              // console.log(url)
              next();
            });
          }, (err) => {
            tempData.push(temp)
            cbTran()
          })

        }, (err) => {
          res.status(200).json({status: "Success", data: tempData});  
        })
      }
    })
  })

  router.post('/editPasttrips', (req , res) => {
    const {PasttripsId,number,title,desc, favspot, favmeal, favrestaurant, uri, startDate, endDate} = req.body
    let query = {_id: pasttripsId}
  var tempData = {};
  const regex = /^data:image\/\w+;base64,/;
  let pasttripsImgKey = [];
  console.log(req.body);
    console.log(query)
    Pasttrips.findOne(query, (err, pasttrips) => {
        if(err) {
            console.error(err)
            return res.status(400).json({error : "Internal Error"});
        }
    if(pasttrips) {
      async.forEach(
        uri,
        (photoObj, callback) => {
          console.log(photoObj.uri);
          const body = Buffer.from(photoObj.uri.replace(regex, ""), "base64");
          const tempId = makeid(6);
          const key = `${number}/${tempId}/posmImage${tempId}`;
          pasttripsImgKey.push(key);
          const s3 = new AWS.S3();
          const param = {
            Bucket: bucketName,
            Key: key,
            Body: body,
            ContentEncoding: "base64",
            ContentType: photoObj.fileType,
          };

          s3.putObject(param, (err, data) => {
            if (err) {
              console.log("Error when uploading images to s3 in update posm : ");
              console.log(err);
              return res.status(400).json({ error: "Internal Error" });
            }

            console.log({ data });
            console.log("Uploaded to S3");
          });

          callback();
        },
        (err) => {
          if (err) {
            console.log("Error after loop photoset in update posm : ");
            console.log(err);
            return res.status(400).json({ error: "Internal Error" });
          }
          let Pasttripsinfo = {
            customer: {
              name: usr.name,
              number: usr.number
            },
            status: "Approved",
            title: title,
            description: desc,
            imageKey: pasttripsImgKey,
            favspot: favspot,
            favrestaurant: favrestaurant,
            favmeal:favmeal,
            startdate: startDate,
            enddate: endDate
          };
          Pasttripsinfo.save()
          .then(savePasttrips => {
            console.log('done edit pasttrips')
            console.log(savedPasttrips)
          })
          res.status(200).json({status: "Success"});  
        } 
      )
    }
    })
})

router.post('/deletePasttrips', (req , res) => {
    const {pasttripsId} = req.body
    let query = {_id: pasttripsId}
    console.log(query)
    Pasttrips.deleteOne(query, (err, pasttrips) => {
            if(err) {
                    console.error(err)
                    return res.status(400).json({error : "Internal Error"});
            }
            console.log('deleted')
            res.status(200).json({status: "Success"});  
    })
})
