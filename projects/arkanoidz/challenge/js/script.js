    // inner variables
    var canvas, ctx;
    var width, height;
    var iStart = 0;
    var bRightBut = false;
    var bLeftBut = false;
    //object variables
    var oBall, oPadd, oBricks;
    //sound array
    var aSounds = [];
    //scored points
    var iBrokenBricks = 0;
    var iTotalTime;
    //elapsed time
    var iScoredTime = iMin = iSec = 0;
    //variables saving last scored time and points
    var bestTime;
    var playerName;
    //my vars

    //functions for creating objects
    function Ball(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
    }
    function Padd(x, w, h, img) {
        this.x = x;
        this.w = w;
        this.h = h;
        this.img = img;
    }
    function Bricks(w, h, r, c, p) {
        this.w = w;
        this.h = h;
        this.r = r; // rows
        this.c = c; // cols
        this.p = p; // padding
        this.objs;
        this.colors = ['white']; // colors for rows
    }


    function initialise(){
        //canvas
        canvas = document.getElementById('scene');
        ctx = canvas.getContext('2d');
        $('#scene').show();

        width = canvas.width;
        height = canvas.height;

        //pad image
        var padImg = new Image();
        padImg.src = 'images/paddWhite.png';
        padImg.onload = function() {};

        //creating objects
        oBall = new Ball(width / 2, 550, 0.5, -5, 10); // position x, position y, speed/angle x, speed/angle y, radius
        oPadd = new Padd(width / 2, 120, 20, padImg); // position x, width ,height, image
        oBricks = new Bricks((width / 6 -5) - 1, 20, 5, 6, 5); // width of a single brick, height of a single brick,number of bricks vertically, number of bricks horizontally, brick padding

        //filling bricks
        oBricks.objs = new Array(oBricks.r);
        for (i=0; i < oBricks.r; i++) {
            oBricks.objs[i] = new Array(oBricks.c);
            for (j=0; j < oBricks.c; j++) {
                oBricks.objs[i][j] = 1;
            }
        }

        iStart = setInterval(drawScene, 10); // loop drawScene
        iTotalTime = setInterval(countTimer, 1000); // inner game timer

        // HTML5 Local storage - get values
        bestTime = localStorage.getItem('best-time');
        playerName = localStorage.getItem('player-name');

        allowMouseControl();
        allowKeyboardControl();
    };

    function clearCanvas() { // clear canvas function
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // fill background
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    function drawScene() {
        clearCanvas();

        // draw Ball
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(oBall.x, oBall.y, oBall.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        if (bRightBut && oPadd.x < width-120){
            oPadd.x += 10;
        }
        else if (bLeftBut &&  oPadd.x > 0){
            oPadd.x -= 10;
        }

        // draw Padd (rectangle)
        ctx.drawImage(oPadd.img, oPadd.x, ctx.canvas.height - 30);

        // draw bricks (from array of its objects)
        for (i=0; i < oBricks.r; i++) {
            ctx.fillStyle = oBricks.colors[i];
            for (j=0; j < oBricks.c; j++) {
                if (oBricks.objs[i][j] == 1) {
                    ctx.beginPath();
                    ctx.rect((j * (oBricks.w + oBricks.p)) + oBricks.p, (i * (oBricks.h + oBricks.p)) + oBricks.p, oBricks.w, oBricks.h);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }

        oBall.x += oBall.dx;
        oBall.y += oBall.dy;

        // Drawing text for time and points
        ctx.font = '16px Verdana';
        ctx.fillStyle = '#fff';

        //minutes and seconds
        iMin = Math.floor(iScoredTime / 60);
        iSec = iScoredTime % 60;
        if (iMin < 10) iMin = "0" + iMin;
        if (iSec < 10) iSec = "0" + iSec;

        //current stats
        ctx.fillText('Time: ' + iMin + ':' + iSec, 400, 520);
        //previous stats
        if (bestTime != null) {
            ctx.fillText('Your best: ' + bestTime, 400, 500);
        }
        collisionDetection();
    }

    function allowMouseControl(){
        var iCanvX1 = $(canvas).offset().left;
        var iCanvX2 = iCanvX1 + width;
        canvas.onmousemove = function(e) { // binding mousemove event
            if (e.pageX > iCanvX1 && e.pageX < iCanvX2) {
                oPadd.x = Math.max(e.pageX - iCanvX1 - (oPadd.w/2), 0);
                oPadd.x = Math.min(ctx.canvas.width - oPadd.w, oPadd.x);
            }
        };
    }

    function allowKeyboardControl(){

        document.onkeydown = function(event){ // keyboard-down alerts
            switch (event.keyCode) {
                case 37: // 'Left' key
                    bLeftBut = true;
                    break;
                case 39: // 'Right' key
                    bRightBut = true;
                    break;
                case 13: // 'Enter' key
                    clearInterval(iStart);
                    clearInterval(iTotalTime);
                    clearCanvas();
                    iBrokenBricks = 0;
                    iScoredTime = 0;
                    $("#loseScreenDiv").hide();
                    $("#winScreenDiv").hide();
                    $('#leaderboardsBox').hide();
                    addRestartToScoreoid();
                    initialise();
                    break;
            }
        };
        document.onkeyup = function(event){ // keyboard-up alerts
            switch (event.keyCode) {
                case 37: // 'Left' key
                    bLeftBut = false;
                    break;
                case 39: // 'Right' key
                    bRightBut = false;
                    break;
            }
        };
    }

    function collisionDetection(){
         // collision detection
        iRowH = oBricks.h + oBricks.p;
        iRow = Math.floor(oBall.y / iRowH);
        iCol = Math.floor(oBall.x / (oBricks.w + oBricks.p));

        // mark brick as broken (empty) and reverse ball
        if (oBall.y < oBricks.r * iRowH && iRow >= 0 && iCol >= 0 && oBricks.objs[iRow][iCol] == 1) {
            oBricks.objs[iRow][iCol] = 0;
            oBall.dy = -oBall.dy;
            iBrokenBricks++;
            if (iBrokenBricks % 2 === 0){
                oBall.dy = oBall.dy*1.08;
            }

            if (iBrokenBricks === 30){
                clearInterval(iStart);
                clearInterval(iTotalTime);
                addCompletedToScoreoid();
                $("#winScreenDiv p").text('You managed to finish the game in '+ iMin + ':' + iSec+'! Submit your name and see how you stand in the leaderboards!' );
                $("#winScreenDiv").show();
                $('#submitScoreZone').show();
                if (playerName !== ''){
                    $('#playerName').val(playerName);
                };

                // HTML5 Local storage - save values
                localStorage.setItem('best-time', iMin + ':' + iSec);
                clearCanvas();
            }

            //aSounds[0].play(); // play sound
        }

        // when ball hits the sidewall, reverse X position of ball
        if (oBall.x + oBall.dx + oBall.r > ctx.canvas.width || oBall.x + oBall.dx - oBall.r < 0) {
            oBall.dx = -oBall.dx;
        }

        if (oBall.y + oBall.dy - oBall.r < 0) {
            oBall.dy = -oBall.dy;

        //if ball hits the PAD, reverse in angle
        } else if (oBall.y + oBall.dy + oBall.r > ctx.canvas.height - 25) {
            if (oBall.x > oPadd.x && oBall.x < oPadd.x + oPadd.w) {
                oBall.dx = 10 * ((oBall.x-(oPadd.x+oPadd.w/2))/oPadd.w);
                oBall.dy = -oBall.dy;

               // aSounds[2].play(); // play sound
            }
            //if ball hits the very ground GAME OVER
            else if (oBall.y + oBall.dy + oBall.r > ctx.canvas.height +10) {
                clearInterval(iStart);
                clearInterval(iTotalTime);
                clearCanvas();

                $("#loseScreenDiv").show();

               // aSounds[1].play(); // play sound
            }
        }
    }
    function countTimer() {
        iScoredTime++;
    }

    function introScreen(){
        document.onkeydown = function(event){
            switch (event.keyCode) {
                case 13: // 'Enter' key
                    $( "#introScreenDiv" ).remove();
                    initialise();
                    return true;
                };
        };
        $( "#startGameButton" ).click(function() {
          $( "#introScreenDiv" ).remove();
          initialise();
        });
    }

    $("#submitHighscoreButton").click(function(){
        localStorage.setItem('saved-name', playerName);
        var trimmedInput = $.trim($("#nameInput").val());
        if( trimmedInput.length > 0){
            playerName = $('#nameInput').val();
            console.log(playerName +" scored " + iScoredTime);
            //submit score to scoreoid
            $.post("https://api.scoreoid.com/v1/createScore", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", username: playerName, score: iScoredTime, platform: 'challenge', difficulty: 1},
                function(response) {
                    console.log(response);
                    getScores()
            });
            $('#noNameText').hide();
            $('#submitScoreZone').hide();
            $('#leaderboardsBox').show();
        }else{
            $('#noNameText').show();
        }

    });
    $( ".restartGameButton" ).click(function() {
        iBrokenBricks = 0;
        iScoredTime = 0;
        $("#loseScreenDiv").hide();
        $("#winScreenDiv").hide();
        $('#leaderboardsBox').hide();
        addRestartToScoreoid();
        initialise();
    });

    function getScores(){
        $.post("https://api.scoreoid.com/v1/getScores", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", order_by : 'score', response:"json", limit: '5', order: 'asc', platform: 'challenge', difficulty: 1},
            function(response) {
                console.log(response);
                var source = $("#leaderboards").html();
                var template = Handlebars.compile(source);
                var wrapper = {playerData: response}
                $('#leaderboardsBox').html(template(wrapper));
        });
    }

    function addRestartToScoreoid(){
            $.post(" https://api.scoreoid.com/v1/getGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData'},
            function(response) {
                console.log(response.challengeData.nRestarts);
                var newValue = parseInt(response.challengeData.nRestarts)+1;
                $.post(" https://api.scoreoid.com/v1/setGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData.nRestarts', value: newValue},
                    function(response) {
                        console.log(response);
                    }
                );
            }
        );
    }

    function addCompletedToScoreoid(){
        $.post(" https://api.scoreoid.com/v1/getGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData'},
            function(response) {
                console.log(response.challengeData.nCompleted);
                var newValue = parseInt(response.challengeData.nCompleted)+1;
                $.post(" https://api.scoreoid.com/v1/setGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData.nCompleted', value: newValue},
                    function(response) {
                        console.log(response);
                    }
                );
            }
        );
    }

    $( "#fbShareButton" ).click(function() {
        shareScoreOnFB(iMin + ':' + iSec);
    });

    function shareScoreOnFB(score){
       FB.ui(
   {
     method: 'feed',
     name: 'Arkanoidz',
     link: 'http://jakubs.eu/test/vanilla',
     picture: 'http://jakubs.eu/test/arkimg.PNG',
     caption: 'I managed to finish Arkanoidz in '+score+' seconds, can you beat that?',
     description: 'Arkanoidz is an experimental game designed by Jakub Slaby as a part of his Honours project at the Edinburgh Napier University',
     message: ''
   },
   function(response) {
     if (response && response.post_id) {
       $.post(" https://api.scoreoid.com/v1/getGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData'},
            function(response) {
                console.log(response.challengeData.nFBShares);
                var newValue = parseInt(response.challengeData.nFBShares)+1;
                $.post(" https://api.scoreoid.com/v1/setGameData", {api_key:"4fe408d16ed751b2504ef2c2e3f5a4ca61551a1d",game_id:"b93478f923", response:"json", key: 'challengeData.nFBShares', value: newValue},
                    function(response) {
                        console.log(response);
                    }
                );
            }
        );
     } else {
       //do nothing
     }
   }
);
    }

    introScreen();

