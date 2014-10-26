	var EdgeWidth = 980;
	var AniSpeed = 8; 
	var gotoStopSpeed = 500;
	var stop1 = 0;
	var stop2 = 555;
	var stop3 = 1070;
	var stop4 = 1585;
	var stop5 = 2100;
	var stop6 = 2615;
	var stop7 = 3130;
	var stop8 = 3645;
	var stop9 = 4160;
	var stop10 = 4675;
	var stop11 = 5190;
	var stop12 = 5705;
	var stop13 = 6220;
	var stop14 = 6735;
	var stop15 = 7250;
	var stop16 = 7765;
	var StageOffset = 0;
	   
	   
	$(document).ready(function(){
	
		function gotoPosition(pos)
		{
			$("#holder").animate({scrollTop: pos}, getDistance(pos)+gotoStopSpeed);
		}
		
		function getDistance(pos)
		{
			var dist = 0;
			if(pos-StageOffset>=0){ dist = pos-StageOffset; }
			else{ dist = -(pos-StageOffset) }
			return dist;
		}
		
		
		$("#holder").scroll(function(e) 
		{
			StageOffset = $("#holder").scrollTop();
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Cover").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel01").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel02").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel03").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel04").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel05").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel05").getSymbol("KennyDeath").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel06").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel07").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel08").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel09").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel10").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel11").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel12").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel13").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel14").stop(StageOffset*AniSpeed);
			$.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").getSymbol("Panel15").stop(StageOffset*AniSpeed);
		});
		
		
		$("#rect1").click(function(event){ gotoPosition(stop1) });
		$("#rect2").click(function(event){ gotoPosition(stop2) });
		$("#rect3").click(function(event){ gotoPosition(stop3) });
		$("#rect4").click(function(event){ gotoPosition(stop4) });
		$("#rect5").click(function(event){ gotoPosition(stop5) });
		$("#rect6").click(function(event){ gotoPosition(stop6) });
		$("#rect7").click(function(event){ gotoPosition(stop7) });
		$("#rect8").click(function(event){ gotoPosition(stop8) });
		$("#rect9").click(function(event){ gotoPosition(stop9) });
		$("#rect10").click(function(event){ gotoPosition(stop10) });
		$("#rect11").click(function(event){ gotoPosition(stop11) });
		$("#rect12").click(function(event){ gotoPosition(stop12) });
		$("#rect13").click(function(event){ gotoPosition(stop13) });
		$("#rect14").click(function(event){ gotoPosition(stop14) });
		$("#rect15").click(function(event){ gotoPosition(stop15) });
		$("#rect16").click(function(event){ gotoPosition(stop16) });
	});
