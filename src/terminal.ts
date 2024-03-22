/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popup: any = undefined;
let website: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {


    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popup = WA.ui.openPopup("comptoir1Popup","Hello, VarCamper, start your journey here!",
            [{
                label: "Topic Board",
                className: "primary",
                callback: async () => {
                    if (website) { website.close(); }
                    website = await WA.nav.openCoWebSite('https://var.camp/2024-topicboard');
                }
            },
            {
                label: "Community Corner",
                className: "success",
                callback: async () => {
                    if (website) { website.close(); }
                    website = await WA.nav.openCoWebSite('https://var.camp/2024-community-corner');
                }
            }]
        );
    })
    WA.room.onEnterLayer('zoneComptoir2').subscribe(() => {
        popup = WA.ui.openPopup("comptoir2Popup","Hello, VarCamper, choose and enjoy!",[
            {
                label: "Job Fair",
                className: "primary",
                callback: async () => {
                    if (website) { website.close(); }
                    website = await WA.nav.openCoWebSite('https://var.camp/2024-jobs');
                }
            },
            {
                label: "Trophy",
                className: "success",
                callback: async () => {
                    if (website) { website.close(); }
                    website = await WA.nav.openCoWebSite('https://var.camp/2024-quests');
                }
            }
            ]);    
    })
    WA.room.onEnterLayer('zoneBar').subscribe(() => {
        popup = WA.ui.openPopup("barPopup","Hello, I’m Ko Ko Gyi, want to travel back to the 80’s ?",[
            {
                label: "NO",
                className: "primary",
                callback: async () => {
                    closePopup();
                }
            },
            {
                label: "YES",
                className: "success",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://www.youtube.com/embed/5YbjzztYbUo');
                }
            }
        ]);
    })

    WA.room.area.onEnter('game2').subscribe(() => {
        popup = WA.ui.openPopup("game2Popup","5S Alphabet",[
            {
                label: "Let's play!",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game2URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Instructions",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game2VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game2').subscribe(closePopup)

    WA.room.area.onEnter('game3').subscribe(() => {
        popup = WA.ui.openPopup("game3Popup","Lean tetris",[
            {
                label: "Let's play!",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game3URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Instructions",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game3VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game3').subscribe(closePopup)


    WA.room.area.onEnter('departureBoard1').subscribe(() => {
        popup = WA.ui.openPopup("departureBoard1Popup","Check out the presentations schedule.",[
            {
                label: "Open schedule",
                className: "primary",
                callback: async () => {
                    const url = WA.state.departureBoardURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('departureBoard1').subscribe(closePopup)

    WA.room.area.onEnter('departureBoard2').subscribe(() => {
        popup = WA.ui.openPopup("departureBoard2Popup","Check out the presentations schedule.",[
            {
                label: "Open schedule",
                className: "primary",
                callback: async () => {
                    const url = WA.state.departureBoardURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('departureBoard2').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen1').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen1Popup","Be More information",[
            {
                label: "Check it out!",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen1URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen1').subscribe(closePopup)


    WA.room.area.onEnter('presentationScreen3').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen3Popup","Be More information",[
            {
                label: "Check it out!",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen3URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen3').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen5').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen5Popup","Be More information",[
            {
                label: "Check it out!",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen5URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen5').subscribe(closePopup)

    WA.room.onEnterLayer('zoneSecurity').subscribe(() => {
        popup = WA.ui.openPopup("securityPopup","At VarCamp WorkAdventure Virtual Event, Check it out!",[
            {
                label: "Watch video",
                className: "primary",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://drive.google.com/uc?id=1lQXip2NvwF1dpCpBpjFkLTCxXu7yjpSw');
                }
            }
        ]);
    })

    WA.room.onLeaveLayer('zoneComptoir1').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneComptoir2').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneBar').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneSecurity').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){   
    if (popup !== undefined) {
        popup.close();
        popup = undefined;
    }
    if (website !== undefined) {
        website.close();
    }
}

export {};
