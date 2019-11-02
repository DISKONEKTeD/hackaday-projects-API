const express = require('express');
const axios = require('axios');
const projectsController = require('../../controller/projectsController');
const router = express.Router();

const API_KEY = process.env.API_KEY;
const API_URI  = 'https://api.hackaday.io/v1/projects?api_key=' + API_KEY + '&per_page=10&page=1';

router.get('/projects', (req, res, next) => {
    // let projectList = projectsController.getProjectsList();
    let projectList = {"total":22796,"per_page":6,"last_page":3800,"page":1,"projects":[{"id":1313,"url":"https:\/\/hackaday.io\/project\/1313-openmv","owner_id":10526,"name":"OpenMV","summary":"Python-powered machine vision modules","description":"The OpenMV project aims at making machine vision more accessible to beginners by developing a user-friendly, open-source, low-cost machine vision platform.\r\n\r\nOpenMV cameras are programmable in Python3 and come with an extensive set of image processing functions such as face detection, keypoints descriptors, color tracking, QR and Bar codes decoding, AprilTags, GIF and MJPEG recording and more.\r\n\r\nAdditionally, OpenMV includes a cross-platform IDE (based on Qt Creator) designed specifically to support programmable cameras. The IDE allows viewing the camera&apos;s frame buffer, accessing sensor controls, uploading scripts to the camera via serial over USB (or WiFi\/BLE if available) and includes a set of image processing tools to generate tags, thresholds, keypoints etc...\r\n\r\nThe OpenMV project is a THP semifinalist and was successfully funded via Kickstarter back in 2015 and has come a long way since then.","image_url":"https:\/\/cdn.hackaday.io\/images\/5817461406329458960.JPG","views":207628,"comments":211,"followers":3673,"skulls":1385,"logs":19,"details":1,"instruction":0,"components":10,"images":6,"created":1401763612,"updated":1554388653,"tags":["camera","OpenMV","arm","TheHackadayPrize","python","stm32f7","machine vision","ongoing project","STm32f429","STM32F407"]},{"id":5373,"url":"https:\/\/hackaday.io\/project\/5373-hack-chat","owner_id":182178,"name":"Hack Chat","summary":"Use the team chat to talk about your projects and find collaborators for whatever you are working on.","description":"If you need help on your project you&apos;ve come to the right place. \r\nClick on the &quot;Public Chat&quot; button on the left top and you&apos;re automatically in. \r\n\r\nThose that just want to talk about hacking have found the place as well. All are welcome!","image_url":"https:\/\/cdn.hackaday.io\/images\/7255311484679597966.png","views":54988,"comments":193,"followers":2538,"skulls":1374,"logs":0,"details":1,"instruction":1,"components":0,"images":3,"created":1429655720,"updated":1561018687,"tags":["ongoing project"]},{"id":3800,"url":"https:\/\/hackaday.io\/project\/3800-3d-printable-robot-arm","owner_id":2561,"name":"3D Printable Robot Arm","summary":"A printable robot arm, a little bigger than the usual hobby servo once.  ","description":"My printable robot arm is inspired by the well known industry robots, but printable.\r\nThe goal is to develop a open source robot arm to use in private or small businesses and make robot development available for every one.  \r\nThe arm should lift about 2 kg enough to perform every day tasks.  Currently robot arms are expensive or small and weak, or clumpy. \r\nIndustrial robots are expensive and dangerous and for that not suitable for using at home or schools. \r\nA Open Source printable robot can build,used and developed by every one. \r\nRobots are still expensive and hard to operate, but this must not longer be the case. \r\nA cheap 3d printed robot arm could be used by disabled persons to manage their daily needs better and more independent. Operate at dangerous but not so developed places. \r\nRemote controlled you could even us the robot to open your door if you forgot your keys.\r\n\r\nThe future Arm will include a moving base. \r\n","image_url":"https:\/\/cdn.hackaday.io\/images\/848911460535166971.jpg","views":216060,"comments":106,"followers":2151,"skulls":1201,"logs":19,"details":1,"instruction":1,"components":4,"images":6,"created":1420754811,"updated":1563280237,"tags":["hardware","hackadayprize","arduino","robot arm","led","ROBOT","2015HackadayPrize","3D Print","ongoing project"]},{"id":19035,"url":"https:\/\/hackaday.io\/project\/19035-zerophone-a-raspberry-pi-smartphone","owner_id":61401,"name":"ZeroPhone - a Raspberry Pi smartphone","summary":"Pi Zero-based open-source mobile phone (that you can assemble for 50$ in parts)","description":"This is a mobile phone that:\r\n\r\n- First and foremost, will be a well-working reliable phone\r\n- Is as open-source as possible *while also being cheap*\r\n- Can be assembled and repaired independently\r\n- Is easy to get parts for\r\n- Doesn&apos;t have apps with privacy concerns\r\n- Allows to write your own apps in Python\r\n\r\nIt costs about 50$ in parts, and all the parts are available on eBay\/TaoBao\/etc, most of the phone can be assembled with just a soldering iron. User interface is written using Python \r\nand is being morphed into a lightweight phone-tailored UI framework.\r\n\r\nA crowdfunded manufacturing run is expected in a month - kits will be available, as well as a small batch of fully-assembled phones. Subscribe to newsletter below!","image_url":"https:\/\/cdn.hackaday.io\/images\/7473031508515021059.jpg","views":367633,"comments":150,"followers":1680,"skulls":1181,"logs":50,"details":1,"instruction":10,"components":27,"images":5,"created":1482175178,"updated":1552196301,"tags":["2017HackadayPrize","GSM","zerophone","Phone","pi zero","raspberry pi","ongoing project","hardware","mobile phone"]},{"id":13466,"url":"https:\/\/hackaday.io\/project\/13466-raspberry-pi-smart-mirror","owner_id":148563,"name":"Raspberry Pi Smart Mirror","summary":"A mirror which displays applications, other useful information","description":"In this video, we show you how to make an easy raspberry pi powered home smart mirror. It displays applications so that you can check the weather and local news while you are getting ready in the morning. It&apos;s also modular, so you can easy move it around or hang it on the wall if you like.  We&apos;ve created a basic application that you can run on the mirror, but it&apos;s totally customizable if you want to write some of your own code. \r\n\r\nIn the future, we plan to add AI components to make this fully automated. We are drawing inspiration from this project:  <a href=\"https:\/\/www.youtube.com\/watch?v=sc9UbREmo58\" target=\"_blank\">https:\/\/www.youtube.com\/watch?v=sc9UbREmo58<\/a>. Stay tuned for a future video about that!","image_url":"https:\/\/cdn.hackaday.io\/images\/4075911473092005133.jpg","views":176669,"comments":30,"followers":1922,"skulls":1151,"logs":0,"details":1,"instruction":0,"components":6,"images":1,"created":1473092117,"updated":1562854669,"tags":["completed project","Software","raspberry pi","hardware"]},{"id":1538,"url":"https:\/\/hackaday.io\/project\/1538-portablesdr","owner_id":9087,"name":"PortableSDR","summary":"Fully stand-alone HF (Shortwave) Software Defined Transceiver & Vector Network Analyzer. Designed for rugged portable use. Highly hackable.","description":"The PSDR is a completely stand-alone (no computer needed), compact, Portable Software Defined Transceiver (hence the name, sorta). Originally designed for backpacking use by Ham Radio operators. It includes complete coverage up to about 30Mhz (plus 144Mhz), it has a 168Mhz ARM processor, color display, and an innovative interface.\r\n\r\nVector Network Analysis (which includes antenna analysis) and GPS functions are included.\r\n\r\nThe entire design is Open Source. The electronics are designed and laid out to be easy to understand and tinker with. In addition to source code, schematics, board layout and parts lists, articles and videos describing the theory of the design are being created.","image_url":"https:\/\/cdn.hackaday.io\/images\/7760611421216476601.jpg","views":196826,"comments":200,"followers":2409,"skulls":1026,"logs":28,"details":1,"instruction":8,"components":16,"images":6,"created":1403234611,"updated":1555630231,"tags":["ham radio","ongoing project","Amateur Radio","rf","PortableSDR","SDR","arm","VNA","radio","PSDR","STM32","TheHackadayPrize"]}]}
    
    return res.render('pages/projectsList', {
        projects: projectList.projects
    });
});

module.exports = router;