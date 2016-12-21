function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function gridTpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (size) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Ftheodore\u002FDesktop\u002FWork\u002Fcode\u002Flearn_js\u002Fturtle_twins\u002Fdocs\u002Fcomponents\u002Fgrid\u002Fgrid.tpl.pug";
for (var x = 0; x < size; x++)
{
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftheodore\u002FDesktop\u002FWork\u002Fcode\u002Flearn_js\u002Fturtle_twins\u002Fdocs\u002Fcomponents\u002Fgrid\u002Fgrid.tpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid__row\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftheodore\u002FDesktop\u002FWork\u002Fcode\u002Flearn_js\u002Fturtle_twins\u002Fdocs\u002Fcomponents\u002Fgrid\u002Fgrid.tpl.pug";
for (var y = 0; y < size; y++)
{
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftheodore\u002FDesktop\u002FWork\u002Fcode\u002Flearn_js\u002Fturtle_twins\u002Fdocs\u002Fcomponents\u002Fgrid\u002Fgrid.tpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid__cell\"\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}}.call(this,"size" in locals_for_with?locals_for_with.size:typeof size!=="undefined"?size:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}