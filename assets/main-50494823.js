import{b as n}from"./init-db3cb89e.js";console.log("Script started successfully");let o,a;WA.onInit().then(()=>{WA.room.onEnterLayer("zoneWelcome").subscribe(()=>{o=WA.ui.openPopup("popupWelcome","Hi Geeks, welcome on the VarCamp Hub! To find your way consult the map here.",[{className:"primary",label:"Open the map",callback:async()=>{let e=WA.state.welcomeGuyURL;a=await WA.nav.openCoWebSite(e,!1,"",70)}}])}),WA.room.onLeaveLayer("zoneWelcome").subscribe(r),WA.room.onEnterLayer("zoneBuilding").subscribe(()=>{o=WA.ui.openPopup("popupBuilding","Become VarCamper.",[{className:"primary",label:"Open",callback:async()=>{a=await WA.nav.openCoWebSite("https://var.camp/maps",!1,"",70)}}])}),WA.room.onLeaveLayer("zoneBuilding").subscribe(r),n().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function r(){o!==void 0&&(o.close(),o=void 0),a!==void 0&&a.close()}
