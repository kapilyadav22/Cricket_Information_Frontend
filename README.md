==========INTRODUCTION===========
This Repo Maintains the Frontend Code Of Cricket_Information app
It's Backend repo is maintained in : https://github.com/kapilyadav22/Cricket_Info_backend


=============BACKEND================
-> To Scrap the IPL Data, I went through the IPLT20.com :https://www.iplt20.com/ .

I Observed few things by going through the APIs.
They Have Mapped Each IPL Season with  a unique Key, and using those keys we can get Each Year IPL Data.

The APIs were found in this form : BASE_URL + ENDPOINT + UNIQUEKEY + SUFFIX;

IPLT20.com is calling the BASE_URL = "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/";
I Have Used 2 APIS from IPLT20.com,
1.) To find the Points Table Year Wise using "feeds/stats/" endpoint with above Base URL with "-groupstandings.js?" suffix.
2.) To find the Results of Each Match of a IPL Season using "feeds/" endpoint with "-matchschedule.js" suffix;

NOTE: Since the IPL Season is Over, so for Live Matches Data, I Have used the RAPID APIs for live cricket Data, Although there is a limit of 200 Request per month in it, but it will be good enough for demonstration purpose.

For Live Matches and For Upcoming Matches, I have used Rapid APIs.
For Live Matches : https://rapidapi.com/cricketapilive/api/cricbuzz-cricket/playground
For Upcoming Matches : https://cricket-live-data.p.rapidapi.com/fixtures



========================FRONTEND=====================================
1.) In Frontend, Used Next JS,Tailwind CSS and shadcn (For Tables).
2.) Created a Nav Bar for medium+ devices and sidebar for small devices.
3.) There are four Sections in Nav/SideBar : Live Matches, Points Table, Matches Scheduled and Teams

=> First Section is Divided Into two parts, Live Matches and Upcoming Matches.
=> Second Section contains the Points Table Of Each IPL Season.
=> Third Section contains the Scheduled Matches for Each Season along with Detailed  Match Details.
=> Fourth Section Contains the Teams which participated In IPL 2025. (Since there was common Endpoint, so created a map and fetched the teams details including Images from IPLT20.com


=====CHALLENGES FACED============
=> Since the data was very cluttered and nested specially in Rapid APIs, it took some time to extract details out of it.
=> Gave a lot of time to search for the Cricket APIs, which were supporting Websockets for Live Data, but majority of them were paid,
so went with Free Live Cricket Data APIS.
=> Because of the API Constrant, Rather than websocket, used Polling to get the live data.So at every 10 seconds interval, the live match data will be updated and highlight as well.
=> There is an api request limit to 200, so commented the code of polling as of now, but by refreshing the page or goinf to the Live matches tab will work smoothly.

To Check the polling code : please go through this path app/liveMatches/LiveScoresPage.tsx and uncomment the logic.




====================DEPLOY===============
Since, there was time constraints, so couldnt deployed it properly, but the Application is Live on : http://165.22.223.85:2222/liveMatches
Frontend code is running on port:2222 and Backend code is running in port:4000 as of now.

To check the backend APi , please go through these endpoints : http://165.22.223.85:4000/pointsTable, http://165.22.223.85:4000/matchSchedule


If you want to deploy it in your setup, just change the path in URLConstant file created in both frontend and backend
