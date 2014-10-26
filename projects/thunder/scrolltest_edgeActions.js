var EdgeWidth = 980;
var AniSpeed = 8;
var StageOffset = 0;



(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
    function setMiddle(syb)
    {
 	var browser = syb.$("${_Stage}").width();
        syb.$("Group").offset({left: browser/2-EdgeWidth/2});
    }

   //Edge symbol: 'stage'
   (function(symbolName) {
     
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Everything'
   (function(symbolName) {   
   
   })("Novel");
   //Edge symbol end:'Novel'

   //=========================================================
   
   //Edge symbol: 'Title'
   (function(symbolName) {   
   
   })("Cover");
   //Edge symbol end:'Cover'

   //=========================================================
   
   //Edge symbol: 'Panel1'
   (function(symbolName) {   
   
   })("Panel01");
   //Edge symbol end:'Panel01'

   //=========================================================
   
   //Edge symbol: 'Panel2'
   (function(symbolName) {   
   
   })("Panel02");
   //Edge symbol end:'Panel02'

   //=========================================================
   
   //Edge symbol: 'Panel3'
   (function(symbolName) {   
   
   })("Panel03");
   //Edge symbol end:'Panel03'

   //=========================================================
   
   //Edge symbol: 'Panel4'
   (function(symbolName) {   
   
   })("Panel04");
   //Edge symbol end:'Panel04'

   //=========================================================
   
   //Edge symbol: 'Panel5'
   (function(symbolName) {   
   
   })("Panel05");
   //Edge symbol end:'Panel05'

   //=========================================================
   
   //Edge symbol: 'Panel6'
   (function(symbolName) {   
   
   })("Panel06");
   //Edge symbol end:'Panel06'

   //=========================================================
   
   //Edge symbol: 'Panel7'
   (function(symbolName) {   
   
   })("Panel07");
   //Edge symbol end:'Panel07'

   //=========================================================
   
   //Edge symbol: 'Panel8'
   (function(symbolName) {   
   
   })("Panel08");
   //Edge symbol end:'Panel08'

   //=========================================================
   
   //Edge symbol: 'Panel9'
   (function(symbolName) {   
   
   })("Panel09");
   //Edge symbol end:'Panel09'

   //=========================================================
   
   //Edge symbol: 'Panel10'
   (function(symbolName) {   
   
   })("Panel10");
   //Edge symbol end:'Panel10'

   //=========================================================
   
   //Edge symbol: 'Panel11'
   (function(symbolName) {   
   
   })("Panel11");
   //Edge symbol end:'Panel11'

   //=========================================================
   
   //Edge symbol: 'Panel12'
   (function(symbolName) {   
   
   })("Panel12");
   //Edge symbol end:'Panel12'

   //=========================================================
   
   //Edge symbol: 'Sharon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Sharon");
   //Edge symbol end:'Sharon'

   //=========================================================
   
   //Edge symbol: 'Cartman'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("Carthead");

      });
      //Edge binding end

   })("Cartman");
   //Edge symbol end:'Cartman'

   //=========================================================
   
   //Edge symbol: 'Kenny'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("Kennyhead");

      });
      //Edge binding end

   })("Kenny");
   //Edge symbol end:'Kenny'

   //=========================================================
   
   //Edge symbol: 'Stan'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("Stanhead");

      });
      //Edge binding end

   })("Stan");
   //Edge symbol end:'Stan'

   //=========================================================
   
   //Edge symbol: 'Kyle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("Kylehead");

      });
      //Edge binding end

   })("Kyle");
   //Edge symbol end:'Kyle'

   //=========================================================
   
   //Edge symbol: 'kennyDeath'
   (function(symbolName) {   
   
   })("KennyDeath");
   //Edge symbol end:'KennyDeath'

   //=========================================================
   
   //Edge symbol: 'cartmanscare'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 402, function(sym, e) {
         sym.play("Cartmanscare");

      });
      //Edge binding end

   })("Cartmanscare");
   //Edge symbol end:'Cartmanscare'

   //=========================================================
   
   //Edge symbol: 'Thunderchild'
   (function(symbolName) {   
   
   })("Thunderchild");
   //Edge symbol end:'Thunderchild'

   //=========================================================
   
   //Edge symbol: 'Panel13'
   (function(symbolName) {   
   
   })("Panel13");
   //Edge symbol end:'Panel13'

   //=========================================================
   
   //Edge symbol: 'Panel14'
   (function(symbolName) {   
   
   })("Panel14");
   //Edge symbol end:'Panel14'

   //=========================================================
   
   //Edge symbol: 'Panel15'
   (function(symbolName) {   
   
   })("Panel15");
   //Edge symbol end:'Panel15'

   //=========================================================
   
   //Edge symbol: 'Sharon_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
         //Edge binding end

      })("SharonNoKenny");
   //Edge symbol end:'SharonNoKenny'

   //=========================================================
   
   //Edge symbol: 'ThunderchildDance'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 749, function(sym, e) {
         sym.play("Nedhead");
         sym.play("Jimbohead");

      });
      //Edge binding end

   })("ThunderchildDance");
   //Edge symbol end:'ThunderchildDance'

})(jQuery, AdobeEdge, "EDGE-3575538");



$(document).ready(function()
{	
	$(window).scroll(function() 
	{
		StageOffset = window.scrollY;
    $.Edge.getComposition("EDGE-3575538").getStage().getSymbol("Novel").stop(StageOffset*AniSpeed);

	});
});