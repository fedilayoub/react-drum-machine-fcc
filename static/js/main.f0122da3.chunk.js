(this["webpackJsonpreact-drum-machine-fcc"]=this["webpackJsonpreact-drum-machine-fcc"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(1),c=a.n(o),r=a(5),n=a.n(r),d=(a(10),a(2)),s=(a(11),a(0)),m=function(e){var t=e.stop,a=e.name,o=e.power,c=e.volume,r=e.handleVolumeChange,n=e.changeSoundGroup;return Object(s.jsxs)("div",{className:"controle",children:[Object(s.jsxs)("button",{onClick:t,children:["Turn Power ",o?"OFF":"ON"]}),Object(s.jsxs)("h2",{children:["Volume: %",Math.round(100*c)]}),Object(s.jsx)("input",{max:"1",min:"0",step:"0.01",type:"range",value:c,onChange:r}),Object(s.jsx)("h2",{id:"display",children:a}),Object(s.jsx)("button",{onClick:n,children:"Change Sounds Group"})]})},u=a(4),i=function(e){var t=e.play,a=e.deactivateAudio,c=e.sound,r=c.id,n=c.key,d=c.url,m=c.keyCode,u=function(e){if(m===e.keyCode){var o=document.getElementById(n);t(n,r),a(o)}};return Object(o.useEffect)((function(){document.addEventListener("keydown",u)}),[]),Object(s.jsxs)("button",{value:"test",id:m,className:"drum-pad",onClick:function(){return t(n,r)},children:[Object(s.jsx)("audio",{className:"clip",src:d,id:n}),n]})},p=(a(13),function(e){var t=e.sounds,a=e.play,o=e.power,c=e.deactivateAudio;return Object(s.jsx)("div",{className:"keyboard",children:o?t.map((function(e){return Object(s.jsx)(i,{sound:e,play:a,deactivateAudio:c})})):t.map((function(e){return Object(s.jsx)(i,{sound:Object(u.a)(Object(u.a)({},e),{},{url:"#"}),play:a,deactivateAudio:c})}))})});a(14);var l=function(){var e={heaterKit:[{keyCode:81,key:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,key:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,key:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,key:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,key:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,key:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,key:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,key:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,key:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],smoothPianoKit:[{keyCode:81,key:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,key:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,key:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,key:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,key:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,key:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,key:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,key:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,key:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]},t=c.a.useState(!0),a=Object(d.a)(t,2),o=a[0],r=a[1],n=c.a.useState(1),u=Object(d.a)(n,2),i=u[0],l=u[1],h=c.a.useState(""),y=Object(d.a)(h,2),f=y[0],k=y[1],j=c.a.useState("heaterKit"),C=Object(d.a)(j,2),b=C[0],O=C[1],v=c.a.useState(e[b]),w=Object(d.a)(v,2),H=w[0],_=w[1],x=function(e){setTimeout((function(){e.parentElement.style.backgroundColor="#ffffff",e.parentElement.style.color="#1b1b33"}),450)};return Object(s.jsxs)("div",{id:"drum-machine",children:[Object(s.jsx)("div",{id:"app-header",children:"freeCodeCamp drum-machine challenge"}),void H.map((function(e){return document.getElementById(e.key)})).forEach((function(e){e&&(e.volume=i)})),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(p,{sounds:H,play:function(e,t){k(t);var a=document.getElementById(e);!function(e){e.parentElement.style.backgroundColor="#1b1b33",e.parentElement.style.color="#ffffff"}(a),a.currentTime=0,a.play(),x(a)},power:o,deactivateAudio:x}),Object(s.jsx)(m,{stop:function(){r(!o)},power:o,volume:i,name:f||{heaterKit:"Heater Kit",smoothPianoKit:"Smooth Piano Kit"}[b],changeSoundGroup:function(){k(""),"heaterKit"===b?(O("smoothPianoKit"),_(e.smoothPianoKit)):(O("heaterKit"),_(e.heaterKit))},handleVolumeChange:function(e){l(e.target.value)}})]})]})};n.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f0122da3.chunk.js.map