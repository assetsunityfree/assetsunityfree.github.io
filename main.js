const _0x5efa6b=_0x3b2b;(function(_0x4dde4e,_0x14a007){const _0x64dc3a=_0x3b2b,_0x54b7ea=_0x4dde4e();while(!![]){try{const _0x569bcc=-parseInt(_0x64dc3a(0x185))/0x1+parseInt(_0x64dc3a(0x19a))/0x2+parseInt(_0x64dc3a(0x19d))/0x3*(parseInt(_0x64dc3a(0x19e))/0x4)+-parseInt(_0x64dc3a(0x18f))/0x5*(-parseInt(_0x64dc3a(0x18a))/0x6)+parseInt(_0x64dc3a(0x193))/0x7+parseInt(_0x64dc3a(0x18b))/0x8+-parseInt(_0x64dc3a(0x189))/0x9;if(_0x569bcc===_0x14a007)break;else _0x54b7ea['push'](_0x54b7ea['shift']());}catch(_0x8810e6){_0x54b7ea['push'](_0x54b7ea['shift']());}}}(_0x10aa,0x77f23));let SHEET_ID=_0x5efa6b(0x187),SHEET_TITLE=_0x5efa6b(0x1a1),FULL_URL=_0x5efa6b(0x1a6)+SHEET_ID+_0x5efa6b(0x180)+SHEET_TITLE,data=[];fetch(FULL_URL)[_0x5efa6b(0x17f)](_0x5ccb9e=>_0x5ccb9e[_0x5efa6b(0x181)]())[_0x5efa6b(0x17f)](_0x38198e=>{const _0x206e8c=_0x5efa6b;let _0x15b717=JSON[_0x206e8c(0x1a5)](_0x38198e['substr'](0x2f)[_0x206e8c(0x19f)](0x0,-0x2));console[_0x206e8c(0x190)](_0x206e8c(0x18c)+'%j'+_0x38198e);let _0x33c3c5=_0x15b717[_0x206e8c(0x1a8)]['rows']['length'];for(let _0x410949=0x0;_0x410949<_0x33c3c5;_0x410949++){if(_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x1]==null||_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x2]==null||_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x3]==null||_0x15b717['table']['rows'][_0x410949]['c'][0x4]==null||_0x15b717[_0x206e8c(0x1a8)]['rows'][_0x410949]['c'][0x5]==null)continue;data[_0x206e8c(0x182)]({'name':_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x1]['v'],'version':_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x2]['v'],'link1':_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x3]['v'],'link2':_0x15b717['table'][_0x206e8c(0x197)][_0x410949]['c'][0x4]['v'][_0x206e8c(0x19c)](_0x15b717[_0x206e8c(0x1a8)][_0x206e8c(0x197)][_0x410949]['c'][0x5]['v'])});}renderTable(data);});let renderTable=function(_0x6004f2){const _0x4d0fab=_0x5efa6b;$(_0x4d0fab(0x196))[_0x4d0fab(0x186)]('');let _0x19e462='';_0x6004f2['map']((_0x18c613,_0x254567)=>{const _0x56b8c3=_0x4d0fab;_0x19e462+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22>'+(_0x254567+0x1)+_0x56b8c3(0x183)+_0x18c613[_0x56b8c3(0x1a0)]+_0x56b8c3(0x195)+_0x18c613[_0x56b8c3(0x1a7)]+_0x56b8c3(0x192)+_0x18c613['version']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22'+_0x18c613['link2']+_0x56b8c3(0x184);}),$('#table_body')[_0x4d0fab(0x18e)](_0x19e462);},searchByName=function(_0x1ff903,_0x3e4a76){const _0x3b69c4=_0x5efa6b;let _0x229ae5=[];for(let _0x90891c=0x0;_0x90891c<_0x1ff903['length'];_0x90891c++){_0x1ff903[_0x90891c][_0x3b69c4(0x1a7)][_0x3b69c4(0x17e)]()[_0x3b69c4(0x17c)](_0x3e4a76[_0x3b69c4(0x17e)]())&&_0x229ae5[_0x3b69c4(0x182)](_0x1ff903[_0x90891c]);}return _0x229ae5;};function _0x3b2b(_0x5f06ae,_0x14adf6){const _0x10aadf=_0x10aa();return _0x3b2b=function(_0x3b2b6f,_0x5c88ac){_0x3b2b6f=_0x3b2b6f-0x17b;let _0x8ead84=_0x10aadf[_0x3b2b6f];return _0x8ead84;},_0x3b2b(_0x5f06ae,_0x14adf6);}function search(){const _0x2121f6=_0x5efa6b;event['key']===_0x2121f6(0x194)&&onSearchClick();}function onSearchClick(){const _0x3b7efe=_0x5efa6b;let _0x4cc8e1=$(_0x3b7efe(0x1a4))[_0x3b7efe(0x19b)](),_0x1d292a=searchByName(data,_0x4cc8e1);_0x4cc8e1==''?renderTable(data):renderTable(_0x1d292a);}function _0x10aa(){const _0x452f69=['/guide.html','</a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','3407698ELMwrc','Enter','\x22\x20target=\x22_blank\x22>','#table_body','rows','click','open','1351258ORdinF','val','concat','3SWqycr','2019828lerbYk','slice','link1','Unity','#search','_blank','#textSearch','parse','https://docs.google.com/spreadsheets/d/','name','table','#groupTelegram','includes','/donate.html','toLowerCase','then','/gviz/tq?sheet=','text','push','</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22','\x22\x20target=\x22_blank\x22button\x20class=\x22btn\x20btn-info\x22>Dowload</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','181852QVqtJi','html','197XpGtSPCduPMmm0RXqEaphwrjJ6E3RxPSLVKJM5aIs','https://t.me/+xRAlp3bWebUyMzQ1','19859121ucWUvI','2021364yLUFys','7003408iHHMjQ','json:\x20','#guide','append','5WeeBNt','log'];_0x10aa=function(){return _0x452f69;};return _0x10aa();}$(_0x5efa6b(0x1a2))['on']('click',function(){onSearchClick();}),$(_0x5efa6b(0x17b))['on']('click',function(){const _0x1a8137=_0x5efa6b;window[_0x1a8137(0x199)](_0x1a8137(0x188),_0x1a8137(0x1a3));}),$('#donate')['on'](_0x5efa6b(0x198),function(){const _0x119eeb=_0x5efa6b;window['open'](_0x119eeb(0x17d));}),$(_0x5efa6b(0x18d))['on'](_0x5efa6b(0x198),function(){const _0x49e73f=_0x5efa6b;window[_0x49e73f(0x199)](_0x49e73f(0x191));});