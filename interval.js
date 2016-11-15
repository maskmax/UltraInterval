function ultraInterval(func,inttime){


    ultraInterval.prototype.clocktick=function(){



        this.timenow= Math.floor( Date.now()/this.inttime);



        for(xx=this.timestart;xx<this.timenow;xx++){

            this.func();


        }
        this.timestart= Math.floor( Date.now()/this.inttime);

    }
    ultraInterval.prototype.stop=function() {
        clearInterval(this.intervalId);
    }

    this.inttime=inttime;
    this.func=func;
    console.log(this.inttime);
    this.timestart= Math.floor( Date.now()/this.inttime);
    this.timenow=Math.floor( Date.now()/this.inttime);
    this.clocktick();

    var t = this;
    var intervalId = setInterval(function(){t.clocktick();}, this.inttime);
    this.intervalId=intervalId;



}