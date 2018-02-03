import {Injectable} from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages=[];
    getImages(){
        return this.visibleImages=IMAGES.slice(0);
    }
    getImage(id:number){
        return IMAGES.slice(0).find(image=>image.id==id);
    }
}

const IMAGES=[
    {"id":1,"category":"Advice","caption":"Girls won't Understands the Pain of Boys holds in his back.","url":"assets/img/Advice1.jpg"},
    {"id":2,"category":"Advice","caption":"Don't Hit Animals because they have families too.","url":"assets/img/Advice2.jpg"},
    {"id":3,"category":"Advice","caption":"Non smoker only like this pic.","url":"assets/img/Advice3.jpg"},
    {"id":4,"category":"Advice","caption":"Don't Spoil others life because definitely someone waiting spoil your life.","url":"assets/img/Advice4.jpg"},
    {"id":5,"category":"Advice","caption":"Everyone has some fate in their head so don't worry about the thing loss.","url":"assets/img/Advice5.jpg"},
    {"id":6,"category":"Comedy","caption":"Prays the God for my mother to get beautiful daughter-in-law :).","url":"assets/img/comedy1.jpg"},        
    {"id":7,"category":"Comedy","caption":"Expectations vs Reality When the girl sit to me in bus.","url":"assets/img/comedy2.jpg"},        
    {"id":8,"category":"Comedy","caption":"Expections of others during my semester holidays.But my reality is COC game.","url":"assets/img/comedy3.jpg"},        
    {"id":9,"category":"Comedy","caption":"Our friends only spoil us!!.","url":"assets/img/comedy4.jpg"},        
    {"id":10,"category":"Comedy","caption":"Reason for Love Failure/BreakUp","url":"assets/img/comedy5.jpeg"},        
    {"id":11,"category":"Comedy","caption":"Money Grows in a tree!!","url":"assets/img/comedy6.jpg"},        
    {"id":12,"category":"Comedy","caption":"Evolution of Bike Rides","url":"assets/img/comedy7.jpg"},
    {"id":13,"category":"Friends","caption":"My Nanben Tamil Selvan!!","url":"assets/img/Friends1.jpg"},        
    {"id":14,"category":"Friends","caption":"No doubts Rajesh kumar and Sathish Only in my class.","url":"assets/img/friends2.jpg"},        
    {"id":15,"category":"Friends","caption":"Boys vs. Girls during Friends Birthday","url":"assets/img/friends3.jpg"},        
    {"id":16,"category":"Friends","caption":"No doubts Sathish Only in my class.","url":"assets/img/friends4.jpg"},        
    {"id":17,"category":"Friends","caption":"Surely Ms.Monica Baskaran because sometimes i though to punch her nose!!","url":"assets/img/friends5.jpg"},        
    {"id":18,"category":"Friends","caption":"No doubt i am a living Example","url":"assets/img/friends6.jpg"},        
    {"id":19,"category":"Life","caption":"Life Path","url":"assets/img/life1.jpg"},        
    {"id":20,"category":"Life","caption":"Life Proverb","url":"assets/img/life2.jpg"},        
    {"id":21,"category":"Life","caption":"Whether we ready for sudden problem in our life","url":"assets/img/life3.jpg"},        
    {"id":22,"category":"Life","caption":"Now a days every family member have no respect to their Relationship","url":"assets/img/life4.jpg"},        
    {"id":23,"category":"Life","caption":"Grades Don't Matter when you die!!","url":"assets/img/life5.jpg"},        
    {"id":24,"category":"Life","caption":"In my Life Mom has highest place in my heart!!","url":"assets/img/life6.jpg"},        
    {"id":25,"category":"Life","caption":"Successful vs Unsuccessful person","url":"assets/img/life7.jpg"},        
    {"id":26,"category":"Love","caption":"Love Failure made sleepless Nights!!","url":"assets/img/love1.jpg"},        
    {"id":27,"category":"Love","caption":"Waiting for my love!!","url":"assets/img/love2.jpg"},        
    {"id":28,"category":"Love","caption":"Boys vs Girls Mind after Breakup!!","url":"assets/img/love3.jpg"},        
    {"id":29,"category":"Love","caption":"Love Makes you Mind Stress","url":"assets/img/love4.jpg"},        
]