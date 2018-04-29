const canvas = document.getElementById('drawing');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;

      var referenceWidth = canvas.width;
      var referenceHeight = canvas.height;
      console.log(referenceWidth + "px x " + referenceHeight + "px");

      const context = canvas.getContext('2d');

      function setup() {

        var scale = window.devicePixelRatio;
        canvas.width = referenceWidth * scale;
        canvas.height = referenceHeight * scale;

        context.scale(1.75 * scale, 1.75 * scale);

        draw();
      }

      function draw() {

            var gradient = context.createLinearGradient(1, 470, 100, 100);
            gradient.addColorStop(0, 'purple');
            gradient.addColorStop(0.25, 'blue');
            gradient.addColorStop(0.5, 'green');
            gradient.addColorStop(0.75, 'yellow');
            gradient.addColorStop(1, 'orange');


            context.fillStyle = gradient;
            context.beginPath();
            context.moveTo(1, 420);
            context.lineTo(20, 440);
            context.lineTo(1, 470);
            context.closePath();
            context.stroke();
            context.fill();

            context.beginPath();
            context.moveTo(5, 474);
            context.lineTo(24, 444);
            context.lineTo(40, 470);
            context.closePath();
            context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(6, 417);
      	context.lineTo(33, 390);
      	context.lineTo(57, 413);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(15, 423);
      	context.lineTo(63, 420);
      	context.lineTo(37, 445);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(65, 426);
      	context.lineTo(64, 462);
      	context.lineTo(39, 453);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(70, 457);
      	context.lineTo(70, 424);
      	context.lineTo(106, 432);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(71, 466);
      	context.lineTo(103, 440);
      	context.lineTo(141, 462);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(151, 463);
      	context.lineTo(178, 432);
      	context.lineTo(195, 469);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(108, 433);
      	context.lineTo(158, 399);
      	context.lineTo(145, 456);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(148, 455);
      	context.lineTo(161, 400);
      	context.lineTo(177, 424);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(46, 394);
      	context.lineTo(99, 395);
      	context.lineTo(71, 420);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(74, 421);
      	context.lineTo(99, 396);
      	context.lineTo(110, 430);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(100, 397);
      	context.lineTo(111, 430);
      	context.lineTo(125, 391);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(112, 430);
      	context.lineTo(127, 392);
      	context.lineTo(161, 394);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(164, 394);
      	context.lineTo(203, 391);
      	context.lineTo(179, 420);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(180, 418);
      	context.lineTo(204, 393);
      	context.lineTo(213, 424);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(179, 419);
      	context.lineTo(213, 427);
      	context.lineTo(195, 457);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(46, 395);
      	context.lineTo(72, 376);
      	context.lineTo(96, 393);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(45, 391);
      	context.lineTo(73, 374);
      	context.lineTo(82, 350);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(74, 373);
      	context.lineTo(84, 349);
      	context.lineTo(114, 355);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(72, 372);
      	context.lineTo(99, 394);
      	context.lineTo(115, 356);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(99, 392);
      	context.lineTo(125, 390);
      	context.lineTo(116, 357);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(127, 389);
      	context.lineTo(143, 365);
      	context.lineTo(117, 355);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(127, 390);
      	context.lineTo(144, 366);
      	context.lineTo(162, 395);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(146, 366);
      	context.lineTo(162, 392);
      	context.lineTo(178, 360);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(164, 393);
      	context.lineTo(180, 360);
      	context.lineTo(203, 391);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(213, 422);
      	context.lineTo(206, 392);
      	context.lineTo(234, 395);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(203, 389);
      	context.lineTo(181, 359);
      	context.lineTo(220, 363);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(206, 391);
      	context.lineTo(221, 363);
      	context.lineTo(234, 392);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(86, 349);
      	context.lineTo(105, 344);
      	context.lineTo(115, 354);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(116, 353);
      	context.lineTo(107, 343);
      	context.lineTo(137, 322);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(118, 352);
      	context.lineTo(138, 321);
      	context.lineTo(154, 323);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(119, 353);
      	context.lineTo(155, 324);
      	context.lineTo(159, 329);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(118, 354);
      	context.lineTo(158, 331);
      	context.lineTo(144, 363);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(143, 363);
      	context.lineTo(161, 332);
      	context.lineTo(179, 358);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(159, 327);
      	context.lineTo(185, 297);
      	context.lineTo(199, 325);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(201, 325);
      	context.lineTo(187, 297);
      	context.lineTo(217, 290);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(161, 329);
      	context.lineTo(180, 357);
      	context.lineTo(200, 327);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(181, 357);
      	context.lineTo(201, 328);
      	context.lineTo(220, 361);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(201, 326);
      	context.lineTo(243, 331);
      	context.lineTo(221, 360);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(220, 359);
      	context.lineTo(257, 360);
      	context.lineTo(235, 392);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(223, 360);
      	context.lineTo(244, 330);
      	context.lineTo(258, 357);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(138, 318);
      	context.lineTo(155, 322);
      	context.lineTo(157, 307);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(155, 321);
      	context.lineTo(158, 305);
      	context.lineTo(184, 299);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(156, 322);
      	context.lineTo(184, 298);
      	context.lineTo(160, 328);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(201, 322);
      	context.lineTo(218, 289);
      	context.lineTo(228, 304);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(202, 324);
      	context.lineTo(229, 305);
      	context.lineTo(243, 329);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(244, 328);
      	context.lineTo(277, 324);
      	context.lineTo(259, 356);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(159, 303);
      	context.lineTo(186, 278);
      	context.lineTo(186, 296);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(187, 295);
      	context.lineTo(187, 280);
      	context.lineTo(206, 274);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(188, 295);
      	context.lineTo(207, 274);
      	context.lineTo(216, 287);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(207, 271);
      	context.lineTo(219, 288);
      	context.lineTo(248, 272);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(218, 286);
      	context.lineTo(230, 303);
      	context.lineTo(248, 273);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(245, 326);
      	context.lineTo(265, 303);
      	context.lineTo(276, 323);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(243, 326);
      	context.lineTo(231, 305);
      	context.lineTo(264, 303);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(231, 303);
      	context.lineTo(250, 272);
      	context.lineTo(264, 300);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(264, 300);
      	context.lineTo(277, 322);
      	context.lineTo(293, 292);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(266, 297);
      	context.lineTo(284, 265);
      	context.lineTo(293, 289);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(264, 298);
      	context.lineTo(284, 265);
      	context.lineTo(251, 272);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(186, 277);
      	context.lineTo(206, 271);
      	context.lineTo(211, 245);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(208, 270);
      	context.lineTo(214, 242);
      	context.lineTo(236, 238);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(210, 270);
      	context.lineTo(237, 239);
      	context.lineTo(248, 269);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(250, 269);
      	context.lineTo(239, 238);
      	context.lineTo(266, 237);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(252, 269);
      	context.lineTo(268, 237);
      	context.lineTo(285, 263);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(286, 262);
      	context.lineTo(270, 237);
      	context.lineTo(301, 226);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(287, 261);
      	context.lineTo(303, 226);
      	context.lineTo(310, 252);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(286, 261);
      	context.lineTo(309, 254);
      	context.lineTo(294, 288);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(213, 241);
      	context.lineTo(234, 212);
      	context.lineTo(236, 237);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(238, 235);
      	context.lineTo(235, 211);
      	context.lineTo(253, 210);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(237, 235);
      	context.lineTo(255, 209);
      	context.lineTo(267, 235);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(257, 210);
      	context.lineTo(268, 234);
      	context.lineTo(290, 203);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(269, 236);
      	context.lineTo(291, 203);
      	context.lineTo(302, 224);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(303, 223);
      	context.lineTo(293, 202);
      	context.lineTo(316, 190);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(303, 223);
      	context.lineTo(327, 210);
      	context.lineTo(311, 251);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(303, 221);
      	context.lineTo(317, 189);
      	context.lineTo(327, 207);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(328, 206);
      	context.lineTo(318, 187);
      	context.lineTo(332, 176);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(235, 209);
      	context.lineTo(254, 181);
      	context.lineTo(254, 208);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(254, 204);
      	context.lineTo(256, 180);
      	context.lineTo(283, 167);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(255, 205);
      	context.lineTo(284, 166);
      	context.lineTo(298, 171);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(255, 208);
      	context.lineTo(291, 201);
      	context.lineTo(298, 171);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(290, 201);
      	context.lineTo(299, 171);
      	context.lineTo(316, 187);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(315, 185);
      	context.lineTo(316, 155);
      	context.lineTo(300, 170);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(317, 185);
      	context.lineTo(317, 154);
      	context.lineTo(331, 174);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(298, 168);
      	context.lineTo(285, 165);
      	context.lineTo(314, 155);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(332, 171);
      	context.lineTo(342, 180);
      	context.lineTo(342, 160);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(328, 203);
      	context.lineTo(342, 182);
      	context.lineTo(334, 176);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(332, 171);
      	context.lineTo(344, 157);
      	context.lineTo(338, 143);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(333, 174);
      	context.lineTo(317, 153);
      	context.lineTo(337, 141);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(284, 164);
      	context.lineTo(303, 135);
      	context.lineTo(315, 152);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(285, 163);
      	context.lineTo(281, 145);
      	context.lineTo(302, 136);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(256, 178);
      	context.lineTo(283, 164);
      	context.lineTo(278, 145);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(316, 148);
      	context.lineTo(303, 135);
      	context.lineTo(318, 118);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(318, 150);
      	context.lineTo(319, 118);
      	context.lineTo(334, 128);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(302, 135);
      	context.lineTo(280, 142);
      	context.lineTo(300, 121);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(302, 136);
      	context.lineTo(301, 121);
      	context.lineTo(317, 119);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(302, 119);
      	context.lineTo(314, 109);
      	context.lineTo(317, 117);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(316, 149);
      	context.lineTo(335, 130);
      	context.lineTo(337, 140);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(342, 178);
      	context.lineTo(350, 169);
      	context.lineTo(343, 159);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(319, 116);
      	context.lineTo(332, 117);
      	context.lineTo(334, 128);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(317, 113);
      	context.lineTo(318, 102);
      	context.lineTo(332, 117);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(317, 114);
      	context.lineTo(309, 97);
      	context.lineTo(318, 102);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(318, 100);
      	context.lineTo(309, 96);
      	context.lineTo(304, 83);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(304, 80);
      	context.lineTo(327, 90);
      	context.lineTo(318, 101);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(306, 81);
      	context.lineTo(313, 77);
      	context.lineTo(327, 88);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(318, 99);
      	context.lineTo(328, 91);
      	context.lineTo(332, 115);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(6, 417);
      	context.lineTo(33, 390);
      	context.lineTo(57, 413);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(333, 114);
      	context.lineTo(328, 89);
      	context.lineTo(337, 100);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(334, 126);
      	context.lineTo(333, 117);
      	context.lineTo(350, 119);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(333, 116);
      	context.lineTo(337, 99);
      	context.lineTo(352, 119);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(337, 99);
      	context.lineTo(334, 96);
      	context.lineTo(348, 91);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(337, 138);
      	context.lineTo(335, 128);
      	context.lineTo(352, 120);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(339, 139);
      	context.lineTo(356, 131);
      	context.lineTo(350, 121);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(337, 139);
      	context.lineTo(356, 131);
      	context.lineTo(359, 149);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(343, 157);
      	context.lineTo(338, 142);
      	context.lineTo(359, 150);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(349, 166);
      	context.lineTo(343, 157);
      	context.lineTo(367, 164);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(343, 156);
      	context.lineTo(360, 151);
      	context.lineTo(367, 164);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(352, 168);
      	context.lineTo(369, 165);
      	context.lineTo(391, 170);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(393, 170);
      	context.lineTo(368, 164);
      	context.lineTo(361, 153);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(395, 169);
      	context.lineTo(394, 155);
      	context.lineTo(362, 152);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(361, 151);
      	context.lineTo(383, 136);
      	context.lineTo(394, 152);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(361, 149);
      	context.lineTo(382, 136);
      	context.lineTo(374, 125);
      	context.closePath();
      	context.stroke();
            context.fill();

            var gradient2 = context.createLinearGradient(350, 180, 479, 164);
            gradient2.addColorStop(0, 'orange');
            gradient2.addColorStop(1, 'red');

            context.fillStyle = gradient2;
      	context.beginPath();
      	context.moveTo(360, 148);
      	context.lineTo(357, 131);
      	context.lineTo(372, 125);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(356, 129);
      	context.lineTo(352, 120);
      	context.lineTo(368, 115);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(358, 131);
      	context.lineTo(368, 115);
      	context.lineTo(373, 123);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(338, 99);
      	context.lineTo(367, 114);
      	context.lineTo(352, 118);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(339, 99);
      	context.lineTo(348, 90);
      	context.lineTo(365, 112);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(367, 113);
      	context.lineTo(365, 94);
      	context.lineTo(349, 90);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(341, 93);
      	context.lineTo(348, 89);
      	context.lineTo(344, 78);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(348, 89);
      	context.lineTo(352, 78);
      	context.lineTo(344, 77);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(349, 90);
      	context.lineTo(353, 78);
      	context.lineTo(365, 92);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(342, 80);
      	context.lineTo(343, 76);
      	context.lineTo(329, 70);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(343, 74);
      	context.lineTo(337, 65);
      	context.lineTo(329, 68);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(344, 74);
      	context.lineTo(351, 77);
      	context.lineTo(338, 65);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(328, 68);
      	context.lineTo(337, 64);
      	context.lineTo(329, 59);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(338, 64);
      	context.lineTo(342, 60);
      	context.lineTo(330, 60);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(330, 60);
      	context.lineTo(332, 54);
      	context.lineTo(340, 59);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(343, 59);
      	context.lineTo(338, 64);
      	context.lineTo(356, 75);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(339, 65);
      	context.lineTo(358, 75);
      	context.lineTo(351, 78);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(355, 78);
      	context.lineTo(359, 76);
      	context.lineTo(377, 87);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(354, 78);
      	context.lineTo(366, 92);
      	context.lineTo(379, 87);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(367, 92);
      	context.lineTo(379, 88);
      	context.lineTo(385, 101);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(369, 113);
      	context.lineTo(366, 93);
      	context.lineTo(384, 102);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(379, 89);
      	context.lineTo(392, 84);
      	context.lineTo(385, 100);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(387, 103);
      	context.lineTo(392, 84);
      	context.lineTo(401, 100);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(385, 102);
      	context.lineTo(389, 112);
      	context.lineTo(369, 114);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(374, 122);
      	context.lineTo(388, 112);
      	context.lineTo(370, 114);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(382, 132);
      	context.lineTo(388, 124);
      	context.lineTo(375, 124);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(373, 120);
      	context.lineTo(389, 123);
      	context.lineTo(389, 114);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(390, 112);
      	context.lineTo(400, 112);
      	context.lineTo(402, 100);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(389, 112);
      	context.lineTo(385, 103);
      	context.lineTo(400, 101);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(401, 110);
      	context.lineTo(403, 99);
      	context.lineTo(416, 110);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(395, 168);
      	context.lineTo(403, 163);
      	context.lineTo(395, 156);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(396, 169);
      	context.lineTo(403, 162);
      	context.lineTo(431, 165);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(433, 163);
      	context.lineTo(434, 154);
      	context.lineTo(403, 162);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(405, 161);
      	context.lineTo(423, 150);
      	context.lineTo(430, 156);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(404, 162);
      	context.lineTo(397, 156);
      	context.lineTo(422, 150);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(395, 153);
      	context.lineTo(401, 139);
      	context.lineTo(384, 137);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(397, 155);
      	context.lineTo(402, 139);
      	context.lineTo(422, 149);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(422, 147);
      	context.lineTo(404, 139);
      	context.lineTo(423, 123);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(401, 137);
      	context.lineTo(383, 135);
      	context.lineTo(389, 123);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(403, 138);
      	context.lineTo(414, 119);
      	context.lineTo(390, 124);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(404, 137);
      	context.lineTo(415, 119);
      	context.lineTo(423, 125);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(388, 122);
      	context.lineTo(389, 114);
      	context.lineTo(398, 111);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(390, 122);
      	context.lineTo(400, 111);
      	context.lineTo(414, 119);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(415, 116);
      	context.lineTo(415, 108);
      	context.lineTo(402, 110);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(417, 119);
      	context.lineTo(422, 115);
      	context.lineTo(416, 111);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(424, 123);
      	context.lineTo(423, 114);
      	context.lineTo(416, 119);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(425, 146);
      	context.lineTo(436, 125);
      	context.lineTo(424, 126);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(424, 148);
      	context.lineTo(436, 139);
      	context.lineTo(436, 124);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(424, 125);
      	context.lineTo(423, 117);
      	context.lineTo(435, 124);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(435, 164);
      	context.lineTo(444, 157);
      	context.lineTo(433, 156);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(434, 154);
      	context.lineTo(446, 145);
      	context.lineTo(444, 155);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(430, 153);
      	context.lineTo(436, 140);
      	context.lineTo(424, 149);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(433, 151);
      	context.lineTo(437, 140);
      	context.lineTo(446, 145);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(436, 140);
      	context.lineTo(437, 127);
      	context.lineTo(446, 142);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(447, 141);
      	context.lineTo(450, 132);
      	context.lineTo(437, 125);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(448, 144);
      	context.lineTo(450, 134);
      	context.lineTo(459, 146);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(459, 147);
      	context.lineTo(462, 139);
      	context.lineTo(451, 134);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(460, 147);
      	context.lineTo(464, 140);
      	context.lineTo(472, 144);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(461, 147);
      	context.lineTo(472, 145);
      	context.lineTo(476, 155);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(460, 148);
      	context.lineTo(476, 156);
      	context.lineTo(471, 164);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(443, 164);
      	context.lineTo(444, 156);
      	context.lineTo(435, 165);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(443, 164);
      	context.lineTo(446, 166);
      	context.lineTo(456, 161);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(444, 165);
      	context.lineTo(457, 160);
      	context.lineTo(458, 169);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(459, 169);
      	context.lineTo(469, 165);
      	context.lineTo(458, 161);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(470, 165);
      	context.lineTo(459, 148);
      	context.lineTo(456, 159);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(456, 158);
      	context.lineTo(459, 148);
      	context.lineTo(446, 156);
      	context.closePath();
      	context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(446, 155);
      	context.lineTo(448, 143);
      	context.lineTo(458, 149);
      	context.closePath();
      	context.stroke();
            context.fill();

            context.beginPath();
            context.moveTo(446, 158);
            context.lineTo(455, 160);
            context.lineTo(443, 163);
            context.closePath();
            context.stroke();
            context.fill();

      	context.beginPath();
      	context.moveTo(472, 166);
      	context.lineTo(477, 157);
      	context.lineTo(479, 164);
      	context.closePath();
      	context.stroke();
            context.fill();

            








      }

      window.addEventListener('load', setup);
