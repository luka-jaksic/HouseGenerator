var packs = ["Realm of Magic","Strangerville","Jungle Adventure","Parenthood","Vampires","Outdoor Retreat","Dine Out","Spa Day",
            "Get To Work", "Get Together", "City Living", "Cats and Dogs", "Seasons", "Get Famous", "Island Living", "Discover University",
            "Eco Lifestyle"];

var colors = ["Blue", "Green", "Yellow", "Red", "Purple", "Pink", "White", "Black", "Gray","Orange", "Rainbow"];

function generatePack(){
    var num = Math.floor(Math.random() * 17);
    return packs[num];
}
function generateColor(){
    var num = Math.floor(Math.random()* 11);
    return colors[num];
}
function getNewHouse(numOfBedrooms, numOfBathrooms, numOfKitchens,diningRoomBool){
    if(document.getElementById("colorsBool").checked == false)
    {
        var numOfRooms = numOfBathrooms + numOfBedrooms + numOfKitchens + diningRoomBool;
        //var roomArray = new Array(numOfRooms);
        var innerHtmlAllRooms = '';
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h2 class='headerSection'><span>&#x2666; </span> Number of Bedrooms: ",numOfBedrooms.toString(),"</h2>");
        for(i = 0;i<numOfBedrooms;i++){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'>Bedroom #",(i+1).toString(),": ",generatePack(),"</h4>");
        }
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h2 class='headerSection'><span>&#x2666; </span> Number of Bathrooms: ",numOfBedrooms.toString(),"</h2>");
        for(i = 0;i<numOfBathrooms;i++){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'> Bathroom #",(i+1).toString(),": ",generatePack(),"</h4>");
        }

        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'><span>&#x2666; </span> Kitchen: ",generatePack(),"</h4>");

        if(diningRoomBool != 0){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'><span>&#x2666; </span> Dining Room: ",generatePack(),"</h4>");
        }
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'> <span>&#x2666; </span> Living Room: ",generatePack(),"</h4>");
        return innerHtmlAllRooms;
    }
    else
    {
        var numOfBedrooms = Math.floor(Math.random() * 4) + 1;
        var numOfBathrooms = Math.floor(Math.random() * 3) + 1
        var numOfKitchens = 1;
        var diningRoomBool = Math.floor(Math.random() * 5);
        var numOfRooms = numOfBathrooms + numOfBedrooms + numOfKitchens + diningRoomBool;
        //var roomArray = new Array(numOfRooms);
        var innerHtmlAllRooms = '';
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h2 class='headerSection'><span>&#x2666; </span> Number of Bedrooms: ",numOfBedrooms.toString(),"</h2>");
        for(i = 0;i<numOfBedrooms;i++){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'>Bedroom #",(i+1).toString(),": ",generateColor(),"</h4>");
        }
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h2 class='headerSection'><span>&#x2666; </span> Number of Bathrooms: ",numOfBedrooms.toString(),"</h2>");
        for(i = 0;i<numOfBathrooms;i++){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'> Bathroom #",(i+1).toString(),": ",generateColor(),"</h4>");
        }

        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'><span>&#x2666; </span> Kitchen: ",generateColor(),"</h4>");

        if(diningRoomBool != 0){
            innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'><span>&#x2666; </span> Dining Room: ",generateColor(),"</h4>");
        }
        innerHtmlAllRooms = innerHtmlAllRooms.concat("<h4 class='headerRoom'> <span>&#x2666; </span> Living Room: ",generateColor(),"</h4>");
        return innerHtmlAllRooms;
    }
}

function getBaths(){
    var numOfBathrooms = Math.floor(Math.random() * 3) + 1
    return numOfBathrooms;
}
function getBeds(){
    var numOfBedrooms = Math.floor(Math.random() * 4) + 1;
    return numOfBedrooms;
}
function getDining(){
    var diningRoomBool = Math.floor(Math.random() * 5);
    return diningRoomBool;
}

function getNewPack(){
    var baths = getBaths();
    var beds = getBeds();
    var din = getDining();
    document.getElementById("generatedPack").innerHTML = getNewHouse(beds, baths, 1, din);
}