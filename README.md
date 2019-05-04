ng generate @angular/material:material-nav --name=sideMenu
## Adding bootstrap
    npm install bootstrap

## build production
    ng build --prod

## create apk file
    1. Go to mobile folder
    2. change <base href="/"> to <base href="./"> by adding .(dot)
    3. if first time then
        a. cordova platform add android (for android device)
        b. cordova platform add ios (for IOS)
        c. cordova platform browser (to run on browser)
    4. cordova run android
    5. go to the below folder location, there you will find .apk
        \Workspace\AbdulMazidTailor\mobile\platforms\android\app\build\outputs\apk\debug\app-debug.apk