/*
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2013 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
if(!Browser.Engine){if(Browser.Platform.ios){Browser.Platform.ios=true;}Browser.Engine={};var setEngine=function(b,a){Browser.Engine.name=b;Browser.Engine[b+a]=true;
Browser.Engine.version=a;};if(Browser.ie){Browser.ie=true;switch(Browser.version){case 6:setEngine("trident",4);break;case 7:setEngine("trident",5);break;
case 8:setEngine("trident",6);}}if(Browser.firefox){Browser.firefox=true;if(Browser.version>=3){setEngine("gecko",19);}else{setEngine("gecko",18);}}if(Browser.safari||Browser.chrome){Browser.safari=true;
switch(Browser.version){case 2:setEngine("webkit",419);break;case 3:setEngine("webkit",420);break;case 4:setEngine("webkit",525);}}if(Browser.opera){Browser.opera=true;
if(Browser.version>=9.6){setEngine("presto",960);}else{if(Browser.version>=9.5){setEngine("presto",950);}else{setEngine("presto",925);}}}if(Browser.name=="unknown"){switch((ua.match(/(?:webkit|khtml|gecko)/)||[])[0]){case"webkit":case"khtml":Browser.safari=true;
break;case"gecko":Browser.firefox=true;}}}

window.addEventListener('load', () => {
    // if(localStorage.getItem('pocketbook-warranty'))
    const banner = document.createElement('div');
    banner.id = 'warranty-pocketbook';
    banner.innerHTML = `Компания НБ-Сервис не осуществляет гарантийную поддержку Pocketbook с 23.03.2020 !<style>
#warranty-pocketbook{
position: absolute;
right: 100px;
left: 100px;
width: 400px;
padding: 20px;
background: orange;
color: white;
z-index: 10000;
box-shadow: 0 2px 3px rgba(0,0,0,0.2);
border-top: 1px solid rgba(225,225,225,0.2);
}
</style>`;
    document.body.appendChild(banner);
    setTimeout(() => banner.parentNode.removeChild(banner), 5000);
});