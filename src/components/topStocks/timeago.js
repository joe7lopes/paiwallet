const MINUTE =  60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

let diffInSeconds = function (date){
    let now = new Date();
    let seconds = (now.getTime() - date.getTime()) / 1000;
    return roundNumber(seconds);
}

let roundNumber = function(number){
    return  Math.round(number);
}

let timeAgo = function(postDate){

    let secondsAgo = diffInSeconds(postDate);
    var result = ""

    if(secondsAgo < MINUTE){
        result = secondsAgo + " seconds ago";
    }else if(secondsAgo < HOUR){
        result = roundNumber(secondsAgo / MINUTE ) + " minutes ago";
    }else if(secondsAgo < DAY){
        result = roundNumber(secondsAgo / HOUR ) + " hours ago";
    }else {
        let day = postDate.getDay();
        let month = postDate.getMonth();
        let year = postDate.getFullYear();
        let date = day+"/"+month+"/"+year;

        result = day+"/"+month+"/"+year;
    }

    return result;
}

export function getTimeAgo(postDate){
    return timeAgo(postDate);
} 