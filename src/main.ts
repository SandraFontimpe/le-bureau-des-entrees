/// <reference types="@workadventure/iframe-api-typings" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    });

    WA.room.area.onLeave('clock').subscribe(() => {
        if (currentPopup) currentPopup.close();
        currentPopup = undefined;
    });

    bootstrapExtra().then(() => console.log('Scripting API Extra ready'));
}).catch(console.error);

export {};
