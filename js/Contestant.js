class Contestant {
    constructor(){
        this.name = null;
        this.index = null;
        this.answer = 0;
        
    }
    getCount(){
        database.ref("contestantCount").on("value",function (data){
           contestantCount = data.val()

        })
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount : count
        })
    }
    update(){
        var contestantIndex = "contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            name : this.name,
            answer : this.answer
        })
    }
    static getContestantInfo(){
        database.ref("contestants").on("value",function (data){
            allContestants = data.val();
        })
    }
}    